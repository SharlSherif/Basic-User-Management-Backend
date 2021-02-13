import { IsOptional, IsString } from 'class-validator';
import { IsPhoneValid } from '../decorators/phone.valid.decorator';
import AlternateInfoEmbed from '../embed/alternate-info.embed';

export default class AlternateInfoDto extends AlternateInfoEmbed {
  @IsOptional()
  @IsString()
  address?: string;
  @IsOptional()
  @IsString()
  @IsPhoneValid({
    message: 'Please enter a valid phone number that starts with 01',
  })
  phone?: string;
}
