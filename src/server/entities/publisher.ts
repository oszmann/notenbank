import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Piece } from "./piece";

@Entity()
export class Publisher {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    name: string;

    @Column("text")
    somethingImportant: string;

    @OneToMany(() => Piece, (piece) => piece.publisher)
    pieces: Piece[];
}