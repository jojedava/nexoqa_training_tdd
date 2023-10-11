import { PasswordValidator } from './password_validator';
import { PasswordValidator1 } from './password_validator1';

describe('Password validator', () => {
  let correctPassword = 'passwordA_1';
  test('Password length is less than 8', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator1();
    expect(passwordValidator.checkPassword('password')).toBe(false);
  });

  test('Password length is up to 8', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator1();
    expect(passwordValidator.checkPassword(correctPassword)).toBe(true);
  });

  test('Password does not have uppercase letter', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator1();
    expect(passwordValidator.checkPassword('passworda')).toBe(false);
  });

  test('Password does not have lowercase letter', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator1();
    expect(passwordValidator.checkPassword('PASSWORDA')).toBe(false);
  });

  test('Password does not have number', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator1();
    expect(passwordValidator.checkPassword('Passworda')).toBe(false);
  });

  test('Password does not have underscore', () => {
    let passwordValidator: PasswordValidator = new PasswordValidator1();
    expect(passwordValidator.checkPassword('Password1')).toBe(false);
  });
});
