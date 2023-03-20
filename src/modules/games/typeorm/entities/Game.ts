import OrderGames from "@modules/orders/typeorm/entities/OrderGames";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('games')
export default class Game {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToMany(() => OrderGames, order_games => order_games.game)
    order_games: OrderGames[]
    
    @Column()
    name: string
    @Column()
    genre: string
    @Column()
    platform: string
    @Column()
    developer: string
    @Column('date')
    releaseDate: Date
    @Column('decimal')
    price: number
    @Column()
    description: string
    @Column('int')
    rate: number

    @CreateDateColumn()
    created_at: Date
    @CreateDateColumn()
    updated_at: Date
}