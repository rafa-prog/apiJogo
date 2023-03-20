import Customer from "@modules/customers/typeorm/entities/Customer";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import OrderGames from "./OrderGames";

@Entity('orders')
export default class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Customer)
    @JoinColumn({name: 'customer_id'})
    customer: Customer
    @OneToMany(() => OrderGames, order_games => order_games.order, {cascade: true})
    order_games: OrderGames[]
    
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}