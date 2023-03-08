import operate from '../Logic/operate';

describe('Check if operate function gives the results', () => {
  test('Test multiply 20 * 30 to get 600', () => {
    expect(operate(20, 30, 'x')).toBe('600');
  });

  test('Test subtract 100 - 30 to get 70', () => {
    expect(operate(100, 30, '-')).toBe('70');
  });

  test('Test Add 100 + 30 to get 130', () => {
    expect(operate(100, 30, '+')).toBe('130');
  });

  test('Test divide 40 ÷ 2 to get 20', () => {
    expect(operate(40, 2, '÷')).toEqual('20');
  });

  test('Test remainder 25 % 2 to get 3', () => {
    expect(operate(25, 2, '%')).toEqual('1');
  });
});
