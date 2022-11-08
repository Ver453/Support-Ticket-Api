import { Test, TestingModule } from '@nestjs/testing';
import { NewTicketController } from './new-ticket.controller';
import { NewTicketService } from './new-ticket.service';

describe('NewTicketController', () => {
  let controller: NewTicketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewTicketController],
      providers: [NewTicketService],
    }).compile();

    controller = module.get<NewTicketController>(NewTicketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
