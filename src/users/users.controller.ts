import { Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post()
  createUser() {
    this.usersService.createUser();
  }
  
  @Get()
  getUser() {
    this.usersService.getUser();
  } 
}
