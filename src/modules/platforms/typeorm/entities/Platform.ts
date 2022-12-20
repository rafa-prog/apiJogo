import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('platforms')
export default class Platform {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column()
    name: string
    @Column()
    brand: string
    @Column()
    controller: string
    @Column('boolean')
    portable: Boolean
    @Column('date')
    releaseDate: Date
    @Column()
    description: string
    @Column('int')
    rate: number

    @CreateDateColumn()
    created_at: Date
    @CreateDateColumn()
    updated_at: Date
}