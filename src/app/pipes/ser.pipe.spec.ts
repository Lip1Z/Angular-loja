import { SerPipe } from './ser.pipe';

describe('SerPipe', () => {
  it('create an instance', () => {
    const pipe = new SerPipe();
    expect(pipe).toBeTruthy();
  });
});
