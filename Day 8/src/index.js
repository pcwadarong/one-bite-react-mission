import { getRandomName, getRandomEmail, getRandomBirthday } from "./random.js";

const people = [];

for (let i = 0; i < 3; i++) {
  const person = {
    number: i,
    name: getRandomName(),
    email: getRandomEmail(),
    birthday: getRandomBirthday(),
  };
  people.push(person);
}

console.log(people);
