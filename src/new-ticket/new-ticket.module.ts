import { Module } from '@nestjs/common';
import { NewTicketService } from './new-ticket.service';
import { NewTicketController } from './new-ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewTicket } from './entities/new-ticket.entity';

@Module({
  imports:[TypeOrmModule.forFeature([NewTicket])],
  controllers: [NewTicketController],
  providers: [NewTicketService]
})
export class NewTicketModule {}
