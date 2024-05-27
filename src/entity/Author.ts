import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("authors")
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    first_name: string;

    @Column("varchar")
    last_name: string;
}