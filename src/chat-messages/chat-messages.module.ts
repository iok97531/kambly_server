import { Module } from '@nestjs/common';
import { ChatMessagesGateway } from './chat-messages.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatMessage } from './chat-message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatMessage])],
  providers: [ChatMessagesGateway]
})
export class ChatMessagesModule {}
