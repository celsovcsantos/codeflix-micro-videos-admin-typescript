import { validateSync } from 'class-validator';
import { Notification } from './notification';
import { FieldsErrors, IValidatorFields } from './validator-fields-interface';

export abstract class ClassValidatorFields<PropsValidated>
  implements IValidatorFields<PropsValidated>
{
  errors: FieldsErrors | null = {};
  validatedData: PropsValidated | null = null;

  validate(data: any): boolean {
    // this.errors = {};
    const errors = validateSync(data);
    if (errors.length) {
      for (const error of errors) {
        const field = error.property;
        this.errors[field] = Object.values(error.constraints!);
      }
    } else {
      this.validatedData = data;
    }
    return !errors.length;
  }
}
