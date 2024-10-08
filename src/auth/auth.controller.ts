import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { LoginUserParams } from './dtos/loginUserParams.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/login/:id')
  public loginUser(@Param('id') loginUserParams: LoginUserParams) {
    return this.authService.login(loginUserParams.id);
  }
}
