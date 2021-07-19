import * as CRUDUSERS from '../requests/CrudUsers.request';

describe('TESTE GRAPHQL - SPACEX', () => {
    it('CRUD USERS', () => {
        CRUDUSERS.crudUsers().should((response) => {
            cy.log(response.status);
            cy.log(response.statusText);
            cy.log(response.body);
            expect(response.status).to.eq(200);
            expect(response.statusText).to.eq("OK");
            expect(response.body).to.be.not.null;
        })
    });
});