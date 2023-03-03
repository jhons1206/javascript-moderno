/// <reference types="cypress" />

describe('LLena los campos para una nueva cita y la edita', () => {
    it('Campos nueva cita', () => {
        cy.visit('/index.html');

        cy.get('[data-cy=mascota-input]').type('Silvestre');

        cy.get('[data-cy=propietario-input]').type('Jhon Sandoval');

        cy.get('[data-cy=telefono-input]').type('964228935');

        cy.get('[data-cy=fecha-input]').type('2023-03-03');

        cy.get('[data-cy=hora-input]').type('04:39');

        cy.get('[data-cy=sintomas-input]').type('Solo duerme');

        cy.get('[data-cy=submit-cita]').click();

        cy.get('[data-cy=citas-heading]').invoke('text').should('equal', 'Administra tus Citas');

        // Seleccionar la alerta
        cy.get('[data-cy=alerta]').invoke('text').should('equal', 'Se agregó correctamente');

        // Verificar si existe una clase CSS
        cy.get('[data-cy=alerta]').should('have.class', 'alert-success');
    });

    it('Edita la cita', () => {
        cy.get('[data-cy="btn-editar"]').click();

        cy.get('[data-cy=mascota-input]').type('Cenizo');

    });
});
