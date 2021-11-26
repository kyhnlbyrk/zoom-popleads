import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'toDGpAuau40bj5LKwQ2NQvsGfxTomdjsD6Or',
  sdkSecret: 'nohrPW9uKiTf1iXfCxTFLCfNj2pShwYWpUfl',
  topic: 'Popleads Test',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: 'abc123',
  signature: 'abc123',
};
