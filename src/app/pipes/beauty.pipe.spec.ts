import { BeautyPipe } from './beauty.pipe';

describe('BeautyPipe', () => {
  it('create an instance', () => {
    const pipe = new BeautyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should add space, remove commas and last 2 chars', () => {
    const pipe = new BeautyPipe();
    const result = pipe.transform('Name,Mike&*');
    expect(result).toBe('Name: Mike');
  });
});
