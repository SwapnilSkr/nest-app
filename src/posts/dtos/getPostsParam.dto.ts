import { PartialType } from '@nestjs/mapped-types';
import { GetUsersParamsDto } from 'src/users/dtos/getUserParams.dto';

export class GetPostsParamDto extends PartialType(GetUsersParamsDto) {}
