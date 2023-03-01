import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Person {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    name: string
}