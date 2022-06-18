import { Service } from 'matrix-web';

@Service()
export default class IndexService {
  async getData() {
    return {
      foo: 'bar',
    };
  }
}
