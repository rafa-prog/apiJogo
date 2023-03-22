import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddPlatformIdToGames1679467680951 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('games', new TableColumn({
            name: 'platform_id',
            type: 'uuid',
            isNullable: true
        }))

        await queryRunner.createForeignKey('games', new TableForeignKey({
            name: 'GamePlatform',
            columnNames: ['platform_id'],
            referencedTableName: 'platforms',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('games', 'GamePlatform')
        await queryRunner.dropColumn('games', 'platform_id')
    }
}
