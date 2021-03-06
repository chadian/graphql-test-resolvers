import { buildConfig } from '../../build-utils/rollup';
import pkg from './package.json';

export default buildConfig(pkg, ['cjs', 'es', 'umd'], { external: ['sinon'], bundleGlobalName: 'GraphQLMocks' });
