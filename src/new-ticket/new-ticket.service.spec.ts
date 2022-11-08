import { Test, TestingModule } from '@nestjs/testing';
import { NewTicketService } from './new-ticket.service';

describe('NewTicketService', () => {
  let service: NewTicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewTicketService],
    }).compile();

    service = module.get<NewTicketService>(NewTicketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
