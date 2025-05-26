import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should create the app', () => {
    expect(fixture).toBeTruthy();
  });

  it('Should return number when is not divisible by 3 or 5', () => {
    expect(fixture.fizzbuzz(1)).toBe('1');
  });

  it('Should return "Fizz" when number is divisible by 3', () => {
    expect(fixture.fizzbuzz(3)).toBe('Fizz');
  });

  it('Should return "Buzz" when number is divisible by 5', () => {
    expect(fixture.fizzbuzz(5)).toBe('Buzz');
  });

  it('Should return "FizzBuzz" when number is divisible by 3 and 5', () => {
    expect(fixture.fizzbuzz(15)).toBe('FizzBuzz');
  });

  it('Should generate fizzbuzz list in ngOnInit', () => {
    expect(fixture.fizzBuzzList).toEqual([]);
    fixture.ngOnInit();
    expect(fixture.fizzBuzzList.length).toEqual(100);
  })

});
