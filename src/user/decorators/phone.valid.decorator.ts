import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsPhoneValidConstraint implements ValidatorConstraintInterface {
  async validate(phone: string, args: ValidationArguments) {
    try {
      return /^01*[0-9]{10}/.test(phone);
    } catch {
      return false;
    }
  }
}

export function IsPhoneValid(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsPhoneValidConstraint,
    });
  };
}
