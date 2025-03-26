import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  signUp(userName, password, firstName, lastName, userType, email) {

  }

  signIn(userName, password) {

  }

  signInWithGoggle() {

  }

  signInWithApple() {
    
  }
}
