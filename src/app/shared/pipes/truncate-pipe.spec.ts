import { TruncatePipe } from './truncate-pipe';

describe('TruncatePipe', () => {

  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate text', () => {
    expect(pipe.transform('Hello Angular World', 5))
      .toBe('Hello...');
  });

});
