import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ChatMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fromUserId: number;

  @Column()
  toUserId: number;

  @Column()
  message: string;

  @Column()
  createdAt: Date;
}