import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/createPosts.dto';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  public createPost(createPostDto: CreatePostDto) {
    const latestUser = this.usersService.usersArray.find(
      (user: CreateUserDto) => user.id === 1,
    );
    return { ...createPostDto, user: latestUser.firstName };
  }
}
