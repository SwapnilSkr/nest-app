import { PartialType } from '@nestjs/mapped-types';
import { GetUsersParamsDto } from 'src/users/dtos/getUserParams.dto';

export class LoginUserParams extends PartialType(GetUsersParamsDto) {}
