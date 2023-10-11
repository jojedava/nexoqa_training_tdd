import { PasswordValidator } from './password_validator';

export class PasswordValidator2 extends PasswordValidator {
  public checkPassword(password: string): boolean {
    return (
      this.checkPasswordLength(password, 6) &&
      this.hasNumber(password) &&
      this.hasLowercaseLetter(password) &&
      this.hasUppercaseLetter(password)
    );
  }
}
