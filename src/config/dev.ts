import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'nohrPW9uKiTf1iXfCxTFLCfNj2pShwYWpUfl',
  sdkSecret: 'toDGpAuau40bj5LKwQ2NQvsGfxTomdjsD6Or',
  topic: 'Popleads Test',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: 'abc123',
  signature: '',
};
