function fizzbuzz(num: number): number | string {
  
  if (num <= 0) {
    return "String couldn't be 0 or negative";
  } 
  else if (num % 15 === 0){
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } 
  return num;
}

describe('fizzbuzz - phase 1', () => {
  test('fizzbuzz function return 1 when the parameter is 1', () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  test('fizzbuzz function return 2 when the parameter is 2', () => {
    expect(fizzbuzz(2)).toBe(2);
  });

  test('fizzbuzz function return fizz when the parameter is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz');
  });

  test('fizzbuzz function return buzz when the parameter is 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
  });

  test('fizzbuzz function return fizz when the parameter is 6', () => {
    expect(fizzbuzz(6)).toBe('fizz');
  });

  test('fizzbuzz function return buzz when the parameter is 10', () => {
    expect(fizzbuzz(10)).toBe('buzz');
  });

  test('fizzbuzz function return fizzbuzz when the parameter is 15', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
  });

  test('fizzbuzz function return an message when the parameter is 0', () => {
    expect(fizzbuzz(0)).toBe("String couldn't be 0 or negative");
  });

  test('fizzbuzz function return an message when the parameter is negative', () => {
    expect(fizzbuzz(-5)).toBe("String couldn't be 0 or negative");
  });
});
