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
export class IsFullNameValidConstraint implements ValidatorConstraintInterface {
  async validate(name: string, args: ValidationArguments) {
    try {
        // match only letters and spaces
        return /^[A-z S\+]*$/g.test(name)
    } catch {
      return false;
    }
  }
}

export function IsFullNameValid(
  validationOptions?: ValidationOptions,
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsFullNameValidConstraint,
    });
  };
}
