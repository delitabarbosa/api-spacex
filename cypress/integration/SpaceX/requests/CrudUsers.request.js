/// <reference types="cypress"/>

var queryCRUD = `mutation {
    insert_users(objects: {name: "Delita", rocket: "Falcon", twitter: "@delitaB"}) {
      returning {
        name
        rocket
        twitter
      }
    }
    update_users(_set: {name: "Talita"}, where: {id: {_is_null: false}}) {
      affected_rows
      returning {
        name
        rocket
        twitter
        id
      }
    }
    delete_users(where: {id: {_is_null: false}}) {
      returning {
        name
        rocket
        twitter
      }
    }
  }`

function crudUsers() {
  return cy.request({
    method: 'POST',
    url: 'https://api.spacex.land/graphql/',
    failOnStatusCode: false,
    body: {
      query: queryCRUD
    }
  })
}

export { crudUsers };