import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddGameIdToOrdersGames1679466118323 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
          'orders_games',
          new TableColumn({
            name: 'game_id',
            type: 'uuid',
            isNullable: true,
          }),
        );
    
        await queryRunner.createForeignKey('orders_games',
          new TableForeignKey({
            name: 'OrdersGamesGame',
            columnNames: ['game_id'],
            referencedTableName: 'games',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('orders_games', 'OrdersGamesGame');
        await queryRunner.dropColumn('orders_games', 'game_id');
      }

}
