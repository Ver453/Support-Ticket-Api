import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket, TICKET_TYPE } from './entities/ticket.entity';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) { }

  @Post()
  createTicket(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.createTicket(createTicketDto);
  }

  @Get()
  getAllTickets() {
    return this.ticketsService.getAllTickets();
  }
  @Get(':id')
  findOneBy(@Param('id') id:number):Promise<Ticket>{
    return this.ticketsService.findOneBy(id);
  }

  @Get('type/:type')
  findOne(@Param('type') type: TICKET_TYPE):Promise<Ticket[]> {
    return this.ticketsService.findOne(type);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketsService.update(+id, updateTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketsService.remove(+id);
  }
}
