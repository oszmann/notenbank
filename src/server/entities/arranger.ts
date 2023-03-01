import { Entity, Generated } from "typeorm";
import { Person } from "./person";

@Entity()
export class Arranger extends Person {
    @Generated("increment")
    number: number;

}