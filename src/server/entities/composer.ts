import { Entity, Generated } from "typeorm";
import { Person } from "./person";

@Entity()
export class Composer extends Person {
    @Generated("increment")
    number: number;
}