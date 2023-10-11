import { PasswordValidator } from './password_validator';
import { PasswordValidator3 } from './password_validator3';

describe('Validator 3', () => {
  test('Password length is less than 16', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator3();
    expect(passwordValidator.checkPassword('abcdefghijklmnop')).toBe(false);
  });

  test('Password length does not have uppercase', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator3();
    expect(passwordValidator.checkPassword('abcdefghijklmnopq')).toBe(false);
  });

  test('Password length does not have lowercase', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator3();
    expect(passwordValidator.checkPassword('ABCDEFGHIJKLMNOPQ')).toBe(false);
  });

  test('Password length does not have underscore', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator3();
    expect(passwordValidator.checkPassword('Abcdefghijklmnopq')).toBe(false);
  });
});
