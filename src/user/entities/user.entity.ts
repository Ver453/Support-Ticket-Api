import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TICKET_TYPE{
    TECHNICAL="Technical",
    GENERAL="General"
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    username:string
    @Column()
    password:string
    // description:string
    // @Column({
    //     type:"enum",
    //     enum:TICKET_TYPE
    // })
    // type:TICKET_TYPE    
}
