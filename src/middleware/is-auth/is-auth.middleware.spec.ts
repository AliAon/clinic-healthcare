import { IsAuthMiddleware } from './is-auth.middleware';

describe('IsAuthMiddleware', () => {
  it('should be defined', () => {
    expect(new IsAuthMiddleware()).toBeDefined();
  });
});
