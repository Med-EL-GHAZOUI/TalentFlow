import { FullNamePipe } from './full-name-pipe';

describe('FullNamePipe', () => {

  let pipe: FullNamePipe;

  beforeEach(() => {
    pipe = new FullNamePipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return full name', () => {
    expect(pipe.transform('John', 'Doe')).toBe('John Doe');
  });

});
