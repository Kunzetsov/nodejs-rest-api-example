import ioc from '../ioc';
import IDENTIFIERS from './identifiers';
import { UserMapper, UserModel, setupModels as setupPgModels } from './pg';

export const setupIoC = () => {
  ioc.bind(IDENTIFIERS.USER_MODEL).toConstantValue(UserModel);
  ioc.bind<UserMapper>(IDENTIFIERS.USER_MAPPER).to(UserMapper);
};

export const setupModels = async () => {
  await setupPgModels();
};
