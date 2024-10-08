import { Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsInt({ message: 'id should be an integer' })
  @IsNotEmpty({ message: 'id should be not empty' })
  @Type(() => Number)
  id: number;

  @IsString({ message: 'first name should always be a string value' })
  @IsNotEmpty({ message: 'first name should not be empty' })
  @MinLength(3, { message: 'first name should contain at least 3 characters' })
  @MaxLength(96, { message: 'first name should contain at max 96 characters' })
  firstName: string;

  @IsString({ message: 'last name should always be a string value' })
  @IsOptional()
  @MinLength(3, { message: 'last name should contain at least 3 characters' })
  @MaxLength(96, { message: 'last name should contain at max 96 characters' })
  lastName: string;

  @IsEmail()
  @IsNotEmpty({ message: 'email should not be empty' })
  email: string;

  @IsString({ message: 'password should always be a string value' })
  @IsNotEmpty({ message: 'password should not be empty' })
  @MinLength(8, { message: 'password should be at least 8 characters' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'password should contain at least one letter, one number and one special character',
  })
  password: string;
}
