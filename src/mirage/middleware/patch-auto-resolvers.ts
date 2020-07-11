import { ResolverMapMiddleware, ResolverMap } from '../../types';
import { patchAutoFieldResolvers } from './patch-auto-field-resolvers';
import { patchAutoTypeResolvers } from './patch-auto-type-resolvers';
import { defaultTargetableOptions, TargetableMiddlewareOptions } from '../../resolver-map/types';

export function patchAutoResolvers(
  options: TargetableMiddlewareOptions = defaultTargetableOptions,
): ResolverMapMiddleware {
  return async (resolverMap, packOptions): Promise<ResolverMap> => {
    //  piping these two together middlewares together
    const patchedResolverMap = await patchAutoFieldResolvers(options)(resolverMap, packOptions);
    return patchAutoTypeResolvers(patchedResolverMap, packOptions);
  };
}