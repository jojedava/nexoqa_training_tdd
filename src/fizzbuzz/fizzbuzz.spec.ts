function fizzbuzz(num: number): string {
  let result = '';
  if (num <= 0) result = 'Only positive numbers';
  else {
    if (num % 3 == 0) result += 'Fizz';
    if (num % 5 == 0) result += 'Buzz';
  }
  if (result == '') result = num.toString();
  return result;
}

describe('FizzBuzz', () => {
  test('Only positive number', () => {
    expect(fizzbuzz(0)).toBe('Only positive numbers');
  });

  test('Parameter 1 return 1', () => {
    expect(fizzbuzz(1)).toBe('1');
  });

  test('Parameter negative, return error', () => {
    expect(fizzbuzz(-1)).toBe('Only positive numbers');
  });

  test('Parameter 2 return 2', () => {
    expect(fizzbuzz(2)).toBe('2');
  });

  test('Parameter 3 return Fizz', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });

  test('Parameter 5 return Buzz', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });

  test('Parameter 6 return Fizz', () => {
    expect(fizzbuzz(6)).toBe('Fizz');
  });

  test('Parameter 10 return Buzz', () => {
    expect(fizzbuzz(10)).toBe('Buzz');
  });

  test('Parameter 15 return FizzBuzz', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });

  test('Parameter 30 return FizzBuzz', () => {
    expect(fizzbuzz(30)).toBe('FizzBuzz');
  });
});
