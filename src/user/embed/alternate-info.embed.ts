import { Prop } from '@nestjs/mongoose';

export default class AlternateInfoEmbed {
  @Prop({ type: String, default: null })
  address?: string;
  @Prop({ type: Date, default: null })
  phone?: string;
}
