import User from '../../models/user.model.js';
import { IUserRepository } from '../../domain/interfaces/user.repository.js';

export class UserMongoRepository extends IUserRepository {
  async create(userEntity) {
    return await User.create(userEntity);
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findAll() {
    return await User.find();
  }
}
