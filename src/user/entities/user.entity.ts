import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model } from 'mongoose';
import AlternateInfoEmbed from '../embed/alternate-info.embed';

@Schema()
export class User {
  @Prop({ type: String, required: true })
  fullName: string;
  @Prop({ type: String, required: true })
  email: string;
  @Prop({ type: String, required: true })
  phone: string;
  @Prop({ type: Date, required: true })
  birthdate: string;
  @Prop({ type: Date })
  hiringdate?: string;
  @Prop({ type: String, required: true })
  address: string;
  @Prop({ type: Object, default: new AlternateInfoEmbed() })
  alternateInfo?: AlternateInfoEmbed;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
export const UserModel = model<UserDocument>('User', UserSchema);
