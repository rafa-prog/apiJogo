import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePlatforms1671214541919 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'platforms',
                columns: [
                    {name: 'id', type: 'uuid', isPrimary: true, 
                    generationStrategy: 'uuid', default: 'uuid_generate_v4()'},

                    {name: 'name', type: 'varchar'},
                    {name: 'brand', type: 'varchar'},
                    {name: 'controller', type: 'varchar'},
                    {name: 'portable', type: 'boolean'},
                    {name: 'releaseDate', type: 'date'},
                    {name: 'description', type: 'varchar'},
                    {name: 'rate', type: 'int'},

                    {name: 'created_at', type: 'timestamp', default: 'now()'},
                    {name: 'updated_at', type: 'timestamp', default: 'now()'},
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('platforms')
    }

}
