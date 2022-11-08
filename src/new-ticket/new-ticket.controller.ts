import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewTicketService } from './new-ticket.service';
import { CreateNewTicketDto } from './dto/create-new-ticket.dto';
import { UpdateNewTicketDto } from './dto/update-new-ticket.dto';

@Controller('new-ticket')
export class NewTicketController {
  constructor(private readonly newTicketService: NewTicketService) {}

  @Post()
  create(@Body() createNewTicketDto: CreateNewTicketDto) {
    return this.newTicketService.create(createNewTicketDto);
  }

  @Get()
  findAll() {
    return this.newTicketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newTicketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewTicketDto: UpdateNewTicketDto) {
    return this.newTicketService.update(+id, updateNewTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newTicketService.remove(+id);
  }
}
