import { InvalidUuidError, Uuid } from './uuid.vo';
import { validate as uuidValidate } from 'uuid';

describe('Uuid Unit Tests', () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');
  test('should throw error when uuid is invalid', () => {
    expect(() => new Uuid('invalid-uuid')).toThrowError(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test('should create a valid uuid', () => {
    const uuid = new Uuid();
    expect(uuid).toBeDefined();
    expect(uuidValidate(uuid.id)).toBe(true);
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test('should accept a valid uuid', () => {
    const uuid = new Uuid('f6f5e9b0-5e8b-4f9d-9b5e-3f7b7f1c4e5d');
    expect(uuid.id).toBe('f6f5e9b0-5e8b-4f9d-9b5e-3f7b7f1c4e5d');
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });
});
