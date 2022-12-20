import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('games')
export default class Game {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column()
    name: string
    @Column()
    genre: string
    @Column()
    platform: string
    @Column()
    developer: string
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