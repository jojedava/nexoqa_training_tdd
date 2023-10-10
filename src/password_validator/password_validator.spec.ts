class PasswordValidator {
  private readonly minium_length: number;
  constructor(minium_length: number) {
    this.minium_length = minium_length;
  }

  public validate(password: string): boolean {
    let hasUppercase = password.toLowerCase() !== password;
    let hasLowercase = password.toUpperCase() !== password;
    let hasNumber = password.split('').some((character) => !isNaN(Number(character)));
    let hasUnderscore = password.indexOf('_') !== -1;
    if (this.minium_length === 8) {
      return (
        password.length > this.minium_length &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasUnderscore
      );
    } else if (this.minium_length === 6) {
      return password.length > this.minium_length && hasUppercase && hasLowercase && hasNumber;
    }
    return false;
  }
}

describe('Password validator - iteration 1', () => {
  test('Password must have more than 8 characters', () => {
    const passwordValidator: PasswordValidator = new PasswordValidator(8);
    expect(passwordValidator.validate('abcdefgh')).toBe(false);
  });

  test('Password must have an uppercase letter', () => {
    const passwordValidator: PasswordValidator = new PasswordValidator(8);
    expect(passwordValidator.validate('abcdefghi')).toBe(false);
  });

  test('Password must have an lowercase letter', () => {
    const passwordValidator: PasswordValidator = new PasswordValidator(8);
    expect(passwordValidator.validate('ABCDEFGHI')).toBe(false);
  });

  test('Password must have a number', () => {
    const passwordValidator: PasswordValidator = new PasswordValidator(8);
    expect(passwordValidator.validate('Abcdefghi')).toBe(false);
  });

  test('Password must have an underscore', () => {
    const passwordValidator: PasswordValidator = new PasswordValidator(8);
    expect(passwordValidator.validate('Abcdefgh1')).toBe(false);
  });
});

describe('Password validator - iteration 2', () => {
  test('Password must have more than 6 characters for validation 2', () => {
    const passwordValidator: PasswordValidator = new PasswordValidator(6);
    expect(passwordValidator.validate('abcdef')).toBe(false);
  });

  test('Password must have more than 6 characters, uppercase, lowercase and number for validation 2', () => {
    const passwordValidator: PasswordValidator = new PasswordValidator(6);
    expect(passwordValidator.validate('Abcdef1')).toBe(true);
  });
});
