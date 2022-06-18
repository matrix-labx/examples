import { Context, Middleware, Next } from 'matrix-web';

@Middleware()
export default class Auth {
  async handle(ctx: Context, next: Next) {}
}
