import { PasswordValidator } from './password_validator';
import { PasswordValidator2 } from './password_validator2';

describe('Validator 2', () => {
  test('Password length is less than 6', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator2();
    expect(passwordValidator.checkPassword('abcdef')).toBe(false);
  });

  test('Password length does not have uppercase', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator2();
    expect(passwordValidator.checkPassword('abcdefg')).toBe(false);
  });

  test('Password length does not have lowercase', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator2();
    expect(passwordValidator.checkPassword('ABCDEFG')).toBe(false);
  });

  test('Password length does not have number', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator2();
    expect(passwordValidator.checkPassword('Abcdefg')).toBe(false);
  });
});
