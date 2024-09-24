import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export default class User{

    @PrimaryGeneratedColumn()
    id:number;
}