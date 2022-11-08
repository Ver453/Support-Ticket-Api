import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket, TICKET_TYPE } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(@InjectRepository(Ticket) private readonly ticketsRepository:Repository<Ticket>){}


  async createTicket(createTicketDto: CreateTicketDto) {
    const ticket = this.ticketsRepository.create(createTicketDto)
    return await this.ticketsRepository.save(ticket)
  }

  async getAllTickets():Promise<Ticket[]> {
    const tickets= await this.ticketsRepository.find()
    return tickets
    
  }
  async findOneBy(id:number): Promise<Ticket>{
    const ticket = await this.ticketsRepository.findOneBy({id})
    if(!ticket){
      throw new NotFoundException("Ticket not found!")
    }
    return ticket
  }

  async findOne(type:TICKET_TYPE): Promise<Ticket[]>{
    const ticket = await this.ticketsRepository.findBy({type})
    console.log(ticket)
    if(!ticket){
      throw new NotFoundException("Ticket not found!")
    }
    return ticket
  }
 

  async update(id: number, updateTicketDto: UpdateTicketDto):Promise<Ticket> {
    const ticket = await this.ticketsRepository.findOneBy({id})
    if(!ticket){
      throw new NotFoundException("ticket not found")
    }
    Object.assign(ticket,updateTicketDto)
    console.log(ticket)
    return await this.ticketsRepository.save(ticket)
  }

  async remove(id: number): Promise<string | { success: boolean; message: string; }> {
    const ticket = await this.ticketsRepository.findOneBy({id})
    if(!ticket){
      throw new NotFoundException("Ticket not found!")
    }
    const deletedTicket = await this.ticketsRepository.delete(id)
    if(deletedTicket.affected === 1){
      return {success:true, message:"Ticket delete success!"}
    }
    return "Ticket not found!"

  }
}
