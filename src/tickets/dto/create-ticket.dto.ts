import { IsEnum, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Status, TICKET_TYPE } from "../entities/ticket.entity";


export class CreateTicketDto {
    @IsString()
    @IsNotEmpty()
    title:string
    @IsString()
    @IsNotEmpty()
    description:string
   @IsEnum(TICKET_TYPE)
   @IsNotEmpty()
   type:TICKET_TYPE
   @IsString()
   category:string
   @IsEnum(Status)
   @IsNotEmpty()
   status:Status

}
