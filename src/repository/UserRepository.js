import GenericRepository from './GenericRepository.js';
import UserDAO from '../dao/Users.dao.js';

export default class UserRepository extends GenericRepository {
  constructor() {
    const userDAOInstance = new UserDAO();
    super(userDAOInstance);
  }

  getUserByEmail = (email) => {
    return this.getBy({ email });
  };

  getUserById = (id) => {
    return this.getBy({ _id: id });
  };

  insertMany = (users) => {
    return this.dao.insertMany(users);
  };
}
