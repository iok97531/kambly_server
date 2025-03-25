import { Module } from '@nestjs/common';
import { ChatMessagesGateway } from './chat-messages.gateway';

@Module({
  providers: [ChatMessagesGateway]
})
export class ChatMessagesModule {}
