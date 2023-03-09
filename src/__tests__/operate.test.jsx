import { render, screen } from '@testing-library/react';
import operate from '../logic/operate';
import Calculator from '../component/Calculator';

describe('Check if operate function gives the results', () => {
  const obj = {
    a: 200,
    b: 50,
  };
  test('Test multiply a * b to get 10,000', () => {
    expect(operate(obj.a, obj.b, 'x')).toBe('10000');
  });

  test('Test subtract a - b to get 150', () => {
    expect(operate(obj.a, obj.b, '-')).toBe('150');
  });

  test('Test Add a + b to get 250', () => {
    expect(operate(obj.a, obj.b, '+')).toBe('250');
  });

  test('Test divide a ÷ b to get 4', () => {
    expect(operate(obj.a, obj.b, '÷')).toEqual('4');
  });

  test('Test remainder a % b to get 0', () => {
    expect(operate(obj.a, obj.b, '%')).toEqual('0');
  });
});

render(<Calculator />);
const calculatorElement = screen.getByText('AC');
expect(calculatorElement).toBeInTheDocument();
