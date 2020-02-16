import { DateP } from './date-pipe.pipe';


describe('DatePipePipe', () => {
  it('create an instance', () => {
    const pipe = new DateP('');
    expect(pipe).toBeTruthy();
  });

  it('transform to right date even from US formats', () => {
    const pipe = new DateP('en-US');
    const result = pipe.transform('02/16/2020');
    expect(result).toBe('Sun, 16 Feb 20');
  });
});
