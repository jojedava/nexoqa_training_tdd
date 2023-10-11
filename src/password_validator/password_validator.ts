export abstract class PasswordValidator {
  private errors: string[];

  constructor() {
    this.errors = [];
  }

  protected checkPasswordLength(password: string, min_lenght: number) {
    let result = password.length > min_lenght;
    if (!result) this.errors.push('Password length must be up to ' + min_lenght);
    return result;
  }
  protected hasNumber(password: string): boolean {
    return /(?=.*\d)/.test(password);
  }

  protected hasUppercaseLetter(password: string): boolean {
    return /(?=.*[A-Z])/.test(password);
  }

  protected hasLowercaseLetter(password: string): boolean {
    return /(?=.*[a-z])/.test(password);
  }

  protected hasUnderscore(password: string): boolean {
    return /(?=.*_)/.test(password);
  }

  public getErrors(): string[] {
    return this.errors;
  }

  public abstract checkPassword(password: string): boolean;
}
