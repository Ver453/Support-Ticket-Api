import { PartialType } from '@nestjs/mapped-types';
import { CreateNewTicketDto } from './create-new-ticket.dto';

export class UpdateNewTicketDto extends PartialType(CreateNewTicketDto) {}
