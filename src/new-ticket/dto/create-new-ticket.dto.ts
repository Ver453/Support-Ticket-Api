import { IsArray,IsEnum,IsNotEmpty, IsString } from "class-validator"
import { TICKET_TYPE } from "src/tickets/entities/ticket.entity"
import { Column, PrimaryGeneratedColumn } from "typeorm"
import { CATEGORY } from "../entities/new-ticket.entity"

export class CreateNewTicketDto {
    @IsString()
    @IsNotEmpty()
    title:string
    @IsString()
    @IsNotEmpty()
    description:string
   @IsEnum(CATEGORY)
   @IsNotEmpty()
   type:CATEGORY
   @IsString()
   types:string
}
