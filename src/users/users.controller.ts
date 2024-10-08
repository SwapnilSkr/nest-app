import {
  BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { GetUsersParamsDto } from './dtos/getUserParams.dto';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('users')
export class UsersController {
  public usersArray: CreateUserDto[] = [];

  public checkUserExists(id: number, email: string): CreateUserDto {
    const foundUser = this.usersArray.find(
      (user: CreateUserDto) => user.id === id || user.email === email,
    );
    return foundUser;
  }

  @Get('/:id?')
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log('params : ', getUsersParamDto);
    console.log('limit : ', limit);
    console.log('page :', page);
    return this.usersArray;
  }

  @Post('/create')
  public postUsers(@Body() createUserDto: CreateUserDto) {
    const foundUser = this.checkUserExists(
      createUserDto.id,
      createUserDto.email,
    );
    if (foundUser) {
      throw new BadRequestException('User already exists');
    }
    this.usersArray.push(createUserDto);
    return createUserDto;
  }
}
