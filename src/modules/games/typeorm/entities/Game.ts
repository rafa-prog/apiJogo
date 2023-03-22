import OrderGames from "@modules/orders/typeorm/entities/OrderGames";
import Platform from "@modules/platforms/typeorm/entities/Platform";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('games')
export default class Game {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToMany(() => OrderGames, order_games => order_games.game)
    order_games: OrderGames[]

    @JoinColumn({name: 'platform_id'})
    @Column()
    platform_id: string
    
    @Column()
    name: string
    @Column()
    genre: string
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