import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

const userGenerator = (count) => {
  const passwordHash = bcrypt.hashSync('coder123', 10);
  const users = [];

  for (let i = 0; i < count; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: passwordHash,
      role: Math.random() < 0.5 ? 'user' : 'admin',
      pets: []
    });
  }
  return users;
};

export default userGenerator;
