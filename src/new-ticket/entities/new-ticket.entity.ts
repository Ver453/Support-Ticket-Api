import { TICKET_TYPE } from "src/tickets/entities/ticket.entity"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


export enum CATEGORY{
    TECHNICAL="technical",
    GENERAL="general"
}



@Entity()
export class NewTicket {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    title:string
    @Column()
    description:string
    @Column()
    types:string
    @Column({
        type:"enum",
        enum:CATEGORY
    })
    category:CATEGORY
}
