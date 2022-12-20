import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGames1671213091824 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'games',
                columns: [
                    {name: 'id', type: 'uuid', isPrimary: true, 
                    generationStrategy: 'uuid', default: 'uuid_generate_v4()'},

                    {name: 'name', type: 'varchar'},
                    {name: 'genre', type: 'varchar'},
                    {name: 'platform', type: 'varchar'},
                    {name: 'developer', type: 'varchar'},
                    {name: 'releaseDate', type: 'date'},
                    {name: 'price', type: 'decimal', precision: 10, scale: 2},
                    {name: 'description', type: 'varchar'},
                    {name: 'rate', type: 'int'},

                    {name: 'created_at', type: 'timestamp', default: 'now()'},
                    {name: 'updated_at', type: 'timestamp', default: 'now()'},
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('games')
    }

}
