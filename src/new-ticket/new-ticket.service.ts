import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { Repository } from 'typeorm';
import { CreateNewTicketDto } from './dto/create-new-ticket.dto';
import { UpdateNewTicketDto } from './dto/update-new-ticket.dto';
import { NewTicket } from './entities/new-ticket.entity';

@Injectable()
export class NewTicketService {
  constructor(@InjectRepository(NewTicket) private readonly ticketsRepository:Repository<Ticket>){}

  
 create(createNewTicketDto: CreateNewTicketDto) {
   throw new Error('Method not implemented.');
 }
 findAll() {
   throw new Error('Method not implemented.');
 }
 findOne(arg0: number) {
   throw new Error('Method not implemented.');
 }
 update(arg0: number, updateNewTicketDto: UpdateNewTicketDto) {
   throw new Error('Method not implemented.');
 }
 remove(arg0: number) {
   throw new Error('Method not implemented.');
 }
 mappale(){

 }
}
