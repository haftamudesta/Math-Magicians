import operate from '../logic/operate';

const a = 200;
const b = 50;

describe('Check if operate function gives the results', () => {
  test('Test multiply a * b to get 10,000', () => {
    expect(operate(a, b, 'x')).toBe('10000');
  });

  test('Test subtract a - b to get 150', () => {
    expect(operate(a, b, '-')).toBe('150');
  });

  test('Test Add a + b to get 250', () => {
    expect(operate(a, b, '+')).toBe('250');
  });

  test('Test divide a ÷ b to get 4', () => {
    expect(operate(a, b, '÷')).toEqual('4');
  });

  test('Test remainder a % b to get 0', () => {
    expect(operate(a, b, '%')).toEqual('0');
  });
});
