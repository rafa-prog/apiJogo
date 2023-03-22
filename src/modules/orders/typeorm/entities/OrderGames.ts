import Game from "@modules/games/typeorm/entities/Game";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Order from "./Order";

@Entity('orders_games')
export default class OrderGames {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Order, order => order.order_games)
    @JoinColumn({name: 'order_id'})
    order: Order
    @ManyToOne(() => Game, game => game.order_games)
    @JoinColumn({name: 'game_id'})
    game: Game
    @Column()
    order_id: string
    @Column()
    game_id: string
    
    @Column('decimal')
    price: number
    @Column('int')
    quantity: number
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}