import { Column, Entity, Generated, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Arranger } from "./arranger";
import { Composer } from "./composer";
import { Genre } from "./genre";
import { Publisher } from "./publisher";


@Entity()
export class Piece {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Generated("increment")
    pieceNumber: number;

    @Column("text")
    name: string;

    @ManyToMany(() => Composer)
    @JoinTable()
    composers: Composer[];

    @ManyToMany(() => Arranger)
    @JoinTable()
    arrangers: Arranger[];

    @ManyToMany(() => Genre)
    @JoinTable()
    genres: Genre[];

    @ManyToOne(() => Publisher, (publisher) => publisher.pieces)
    publisher: Publisher;
}