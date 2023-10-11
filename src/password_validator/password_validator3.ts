import { PasswordValidator } from './password_validator';

export class PasswordValidator3 extends PasswordValidator {
  public checkPassword(password: string): boolean {
    return (
      this.checkPasswordLength(password, 16) &&
      this.hasLowercaseLetter(password) &&
      this.hasUppercaseLetter(password) &&
      this.hasUnderscore(password)
    );
  }
}
