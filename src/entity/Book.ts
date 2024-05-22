import 'reflect-metadata'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("books")
export class Book{

    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar")
    title: string;

    @Column("varchar")
    type: string;

    @Column("float")
    price: number;
}