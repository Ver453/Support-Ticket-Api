import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TICKET_TYPE{
    TECHNICAL="Technical",
    GENERAL="General"
}
export enum Status{
    PENDING="Pending",
    CLOSE="Close",
    IN_PROGRESS="In_progress"
}

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    title:string
    @Column()
    description:string
    @Column()
    category:string
    @Column({
        type:"enum",
        enum:TICKET_TYPE
    })
    type:TICKET_TYPE
    @Column({
        type:"enum",
        enum:Status,
        default:"Pending"
    })
    status:Status
}
