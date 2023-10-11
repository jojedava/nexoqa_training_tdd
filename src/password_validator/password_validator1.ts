import { PasswordValidator } from './password_validator';

export class PasswordValidator1 extends PasswordValidator {
  public checkPassword(password: string): boolean {
    return (
      this.checkPasswordLength(password, 8) &&
      this.hasNumber(password) &&
      this.hasLowercaseLetter(password) &&
      this.hasUppercaseLetter(password) &&
      this.hasUnderscore(password)
    );
  }
}
