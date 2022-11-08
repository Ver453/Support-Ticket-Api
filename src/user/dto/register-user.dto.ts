import { IsEnum, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { User } from "../entities/user.entity";

export class RegisterUserDto {
    @IsString()
    @IsNotEmpty()
    username:string
    @IsString()
    @IsNotEmpty()
    password:string
//    @IsEnum(TICKET_TYPE)
//    @IsNotEmpty()
//    type:TICKET_TYPE
//    @IsString()
//    image:string

}
