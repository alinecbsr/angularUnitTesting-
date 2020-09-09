import { powersPipe } from './powers.pipe';

describe('PowersPipe', () => {
  it('should display weak if power is 2', () => {
    let pipe = new powersPipe();

    expect(pipe.transform(2)).toEqual('2 (weak)');
  })

  it('should display strong if power is 5', () => {
    let pipe = new powersPipe();

    expect(pipe.transform(5)).toEqual('5 (strong)');
  })
})
