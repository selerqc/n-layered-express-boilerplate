import { UserEntity } from '../domain/entities/user.entity.js';
import { UserMongoRepository } from '../infrastructure/db/user.mongo.js';
import { hashPassword } from '../utils/hash.util.js';

const repo = new UserMongoRepository();

export const registerUser = async (data) => {
  const hashed = await hashPassword(data.password);
  const entity = new UserEntity({ ...data, password: hashed });
  return await repo.create(entity);
};

export const getUsers = async () => await repo.findAll();
