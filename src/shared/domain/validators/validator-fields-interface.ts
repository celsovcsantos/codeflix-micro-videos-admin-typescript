import { Notification } from './notification'; // Corrected import path

export type FieldsErrors =
  | {
      [field: string]: string[];
    }
  | string;

export interface IValidatorFields {
  validate(notification: Notification, data: any, fields: string[]): boolean;
}
