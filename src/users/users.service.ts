import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  createUser() {
    return 'Hello World!';
  }

  getUser() {
    return 'I am user'
  }

  updateProfile() {

  }
}
