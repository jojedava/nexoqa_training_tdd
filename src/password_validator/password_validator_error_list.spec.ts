import { PasswordValidator } from './password_validator';
import { PasswordValidator1 } from './password_validator1';
import { PasswordValidator2 } from './password_validator2';

describe('Errors list', () => {
  test('Get errors list from Validator 1', () => {
    let validator: PasswordValidator = new PasswordValidator1();
    validator.checkPassword('abcdefgh');
    expect(validator.getErrors()).toContain('Password length must be up to 8');
  });

  test('Get errors list from Validator 2', () => {
    let validator: PasswordValidator = new PasswordValidator2();
    validator.checkPassword('abcdef');
    expect(validator.getErrors()).toContain('Password length must be up to 6');
  });
});
