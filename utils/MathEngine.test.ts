import MathEngine from './MathEngine'
/*
describe('MathEngine', () => {
  
  test('adds 5 and 7 to equal "12"', () => {
    expect(MathEngine(5, 7, '+')).toBe('12');
  });

  test('subtracts 20 from 50 to equal "30"', () => {
    expect(MathEngine(50, 20, '-')).toBe('30');
  });

  test('multiplies 4 and 3 to equal "12"', () => {
    expect(MathEngine(4, 3, 'x')).toBe('12');
  });

  test('divides 10 by 2 to equal "5"', () => {
    expect(MathEngine(10, 2, '÷')).toBe('5');
  });

  test('calculates 10 % 3 to equal "1"', () => {
    expect(MathEngine(10, 3, '%')).toBe('1');
  });
)};
*/


describe('MathEngine', () => {
    
    test('adds 5 and 7 to equal 12', () => {
        expect(MathEngine(5,7,'+')).toBe('12');
    });
    
    test('returns 0 when dividing by zero', () => {
    expect(MathEngine(10, 0, '÷')).toBe('0');
    });

    test('subtract 20 from 50 to equal 30', () => {
        expect(MathEngine(50,20,'-')).toBe('30');
    });

    test('multiplies 4 and 3 to equal 12', () => {
        expect(MathEngine(4,3,'x')).toBe('12');
    });

    test('divide 10 by 2 to equal 5', () => {
        expect(MathEngine(10,2,'÷')).toBe('5');
    });

    test('calculate 10 % 3 to equal 1', () => {
        expect(MathEngine(10,3,'%')).toBe('1');
    });
})