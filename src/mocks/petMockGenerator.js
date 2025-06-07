import { faker } from '@faker-js/faker';

const petGenerator = (count, users) => {
    const pets = [];

    for(let i = 0; i < count; i++){
        pets.push({
            name: faker.person.firstName() + " 's pet",
            specie: faker.animal.type(),
            age: Math.floor(Math.random() * 15),
            owner: users[Math.floor(Math.random() * users.length)]._id
        });
    }

    return pets;
}

export default petGenerator;
