const faker = require('faker');

module.exports = () => {
    return {
        chats: Array.from(Array(3)).map((_, index) => ({
            id: index + 1,
            title: faker.name.title(),
            messageList: Array.from(Array(2)).map(_ => ({
                id: faker.random.uuid(),
                author: `${faker.name.firstName()}  ${faker.name.lastName()}`,
                message: faker.random.words(),
            })),
        })),
        profile: {
            avatar: faker.internet.avatar(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
        },
    };
};
