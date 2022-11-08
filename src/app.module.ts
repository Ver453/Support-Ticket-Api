import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { TicketsModule } from './tickets/tickets.module';
import { UserModule } from './user/user.module';
import { NewTicketModule } from './new-ticket/new-ticket.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    host:"localhost",
    database:"ticket",
    type:"postgres",
    password:"sagar",
    username:"postgres",
    port:5432,
    entities:["dist/**/*.entity{.ts,.js}"],
    synchronize:true,
  }),TicketsModule, UserModule, NewTicketModule],
  controllers: [CatsController],
  providers: [AppService],
})
export class AppModule {}
