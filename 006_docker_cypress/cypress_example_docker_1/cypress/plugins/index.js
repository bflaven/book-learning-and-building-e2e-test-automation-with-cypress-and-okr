 
//For cucumber integration
const cucumber = require('cypress-cucumber-preprocessor').default

//For connecting to SQL Server
const mysql = require('mysql')
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  // const connection = mysql.createConnection(config.env.db)
  const connection = mysql.createConnection(config.env.db2)

  // start connection to db
  connection.connect()
  // cy.log(config.env.db)
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}

module.exports = (on, config) => {

 
  on('task', {
    // deconstruct the individual properties
    queryDb(query) {
      // console.log(config)
      return queryTestDb(query, config) 
    },
  })

  on('task', {
    sayHello({ greeting, name }) {
      console.log('greeting :: %s ; name :: %s', greeting, name)
      return null
    },
  })

  on('task', {
    userInfo({ username, role }) {
      console.log('username :: %s, role :: %s', username, role)
      return null
    },
  })

    on('task', {
    logInfo({ message }) {
      console.log('message :: %s', message)
      return null
    },
  })

  // For Gherkin Feature
  on('file:preprocessor', cucumber())

  // For grep
  require('cypress-grep/src/plugin')(config)
  // make sure to return the config object
  // as it might have been modified by the plugin
  return config


}// end module export