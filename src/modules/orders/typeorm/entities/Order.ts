import Customer from "../../../customers/typeorm/entities/Customer";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import OrderProducts from "./OrderGames";

@Entity('orders')
export default class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Customer)
    @JoinColumn({name: 'customer_id'})
    customer: Customer
    @OneToMany(() => OrderProducts, order_games => order_games.order, {cascade: true})
    order_games: OrderProducts[]
    
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}