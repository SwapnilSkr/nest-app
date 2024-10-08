import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public usersArray: CreateUserDto[] = [];

  public checkUserExists(id: number, email: string): CreateUserDto {
    const foundUser = this.usersArray.find(
      (user: CreateUserDto) => user.id === id || user.email === email,
    );
    return foundUser;
  }

  public findUsers(limit: number, page: number, id?: number) {
    console.log('limit : ', limit);
    console.log('page :', page);
    if (id) {
      const findUser = this.usersArray.find(
        (user: CreateUserDto) => user.id === id,
      );
      if (findUser) return findUser;
      else throw new NotFoundException('No user with the given id found');
    } else return this.usersArray;
  }

  public createUser(createUserDto: CreateUserDto) {
    const foundUser = this.checkUserExists(
      createUserDto.id,
      createUserDto.email,
    );
    if (foundUser) {
      throw new BadRequestException('User already exists');
    }
    console.log('auth', this.authService.isAuth());
    this.usersArray.push(createUserDto);
    return createUserDto;
  }
}
