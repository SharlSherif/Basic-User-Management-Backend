import {
  IsAlpha,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { User } from '../entities/user.entity';
import AlternateInfoDto from './alternate-info.dto';
import AlternateInfoEmbed from '../embed/alternate-info.embed';
import { IsFullNameValid } from '../decorators/full-name.valid.decorator';
import { IsPhoneValid } from '../decorators/phone.valid.decorator';
import { IsDateValid } from '../decorators/date.valid.decorator';

export class CreateUserDto extends User {
  @IsNotEmpty()
  @IsString()
  @IsFullNameValid({ message: 'Full name can only accept letters and spaces' })
  fullName: string;
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  @IsPhoneValid({
    message: 'Please enter a valid phone number that starts with 01',
  })
  phone: string;
  @IsNotEmpty()
  @IsDateValid({ message: 'Invalid date format' })
  birthdate: string;
  @IsOptional()
  @IsDateValid({ message: 'Invalid date format' })
  hiringdate?: string;
  @IsNotEmpty()
  @IsString()
  address: string;
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => AlternateInfoDto)
  alternateInfo: AlternateInfoEmbed;
}
