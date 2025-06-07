import userGenerator from '../mocks/userMockGenerator.js';
import petGenerator from '../mocks/petMockGenerator.js';
import UserRepository from '../repository/UserRepository.js';
import PetRepository from '../repository/PetRepository.js';

const userRepository = new UserRepository();
const petRepository = new PetRepository();

const generateMocksUsers = (count) => {
  return userGenerator(count);
};

const insertMockData = async (userCount, petCount) => {
  const users = userGenerator(userCount);

  const savedUsers = await userRepository.insertMany(users);

  const pets = petGenerator(petCount, savedUsers);

  const savedPets = await petRepository.insertMany(pets);

  return { status: 'success', users: savedUsers.length, pets: savedPets.length };
};


export default {
  generateMocksUsers,
  insertMockData,
};
