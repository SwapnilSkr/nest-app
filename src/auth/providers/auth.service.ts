import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  public login(userId: number) {
    return {
      user: this.usersService.findUsers(10, 1, userId),
      token: 'SAMPLE_TOKEN',
    };
  }

  public isAuth() {
    return true;
  }
}
