import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatMessagesModule } from './chat-messages/chat-messages.module';
import { VideosModule } from './videos/videos.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { User } from './users/user.entity';
import { ChatMessage } from './chat-messages/chat-message.entity';
import { AuthModule } from './auth/auth.module';

console.log(process.env)
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `src/config/.env`,
      isGlobal: true,
    }),
    // Database setup needed
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, ChatMessage],
      synchronize: true,
    }),
    ChatMessagesModule,
    VideosModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
