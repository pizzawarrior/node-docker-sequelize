import { sequelize, Person } from "./database.js";

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

test("create person", async () => {
  expect.assertions(1);
  const person = await Person.create({
    id: 1,
    firstName: "Marty",
    lastName: "McFly",
  });
  expect(person.id).toEqual(1);
});

test("get person", async () => {
  expect.assertions(2);
  const person = await Person.findByPk(1);
  expect(person.firstName).toEqual("Marty");
  expect(person.lastName).toEqual("McFly");
});

test("delete person", async () => {
  expect.assertions(1);
  await Person.destroy({
    where: {
      id: 1,
    },
  });
  const person = await Person.findByPk(1);
  expect(person).toBeNull();
});

afterAll(async () => {
  await sequelize.close();
});
