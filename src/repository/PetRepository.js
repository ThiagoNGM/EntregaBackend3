import GenericRepository from './GenericRepository.js';
import PetDAO from '../dao/Pets.dao.js';

export default class PetRepository extends GenericRepository {
  constructor() {
    const petDAOInstance = new PetDAO();
    super(petDAOInstance);
  }

  insertMany = (pets) => {
    return this.dao.insertMany(pets);
  };
}
