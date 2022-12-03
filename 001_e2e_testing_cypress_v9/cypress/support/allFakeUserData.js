// ******************************************************************
// Most values used in the test made with Cypress are stored here
// ******************************************************************

const faker = require('faker');

/*
  * For user
 */
const userData = {

    randomUsername: faker.internet.userName(),
    randomFirstName: faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password(),
    randomWebsite: faker.internet.url(),


};

// do export literal as object
module.exports = { userData };