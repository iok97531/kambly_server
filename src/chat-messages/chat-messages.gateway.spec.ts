import { Test, TestingModule } from '@nestjs/testing';
import { ChatMessagesGateway } from './chat-messages.gateway';

describe('ChatMessagesGateway', () => {
  let gateway: ChatMessagesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatMessagesGateway],
    }).compile();

    gateway = module.get<ChatMessagesGateway>(ChatMessagesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
