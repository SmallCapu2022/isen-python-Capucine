const random = Math.floor(Math.random() * 100000)
const username = `fake${random}`
const email = `fake${random}@email.com`
const password = '1hstesh<23456789'

describe('Create and connect to an account', () => {
  it('Visits the OC commerce site and creates an account', () => {
    cy.visit('/home')

    // Création de compte
    cy.contains('SIGNUP').click()
    cy.url().should('include', '/user/signup')

    cy.get('[id^=fname]').type('fakeuser')
    cy.get('[id^=lname]').type('toto')
    cy.get('[id^=username]').type(username)
    cy.get('[id^=email]').type(email)
    cy.get('[id^=pass]').type(password)
    cy.get('[id^=re_pass]').type(password)

    // Certains checkboxes sont masqués, on force le click
    cy.get('input[type="checkbox"]').check({ force: true })

    cy.get('form').contains('Register').click()
    cy.url().should('include', '/user/login')

    // Connexion
    cy.get('[id^=your_name]').type(username)
    cy.get('[id^=your_pass]').type(password)
    cy.get('form').contains('Log in').click()
    cy.url().should('include', '/home')
    cy.contains('FAVOURITE')
  })
})

describe('Put item in favourite', () => {
  it('Connect to OC commerce and manage favourite products', () => {
    // Connexion
    cy.visit('/home')
    cy.contains('LOGIN').click()
    cy.url().should('include', '/user/login')

    cy.get('[id^=your_name]').type(username)
    cy.get('[id^=your_pass]').type(password)
    cy.get('form').contains('Log in').click()
    cy.url().should('include', '/home')
    cy.contains('FAVOURITE')

    // Aller dans la page FAVOURITE et vérifier qu’elle est vide
    cy.contains('FAVOURITE').click()
    cy.url().should('include', '/favourite')
    cy.contains('No Product in your favourite list').should('exist')

    // Revenir à l'accueil
    cy.visit('/home')

    // Ajouter un produit aux favoris
    cy.get('[id^=favBtn]').first().click()

    // Vérifier qu’il est bien dans les favoris
    cy.contains('FAVOURITE').click()
    cy.url().should('include', '/favourite')
    cy.get('table tbody tr').should('have.length.at.least', 1)

    // Supprimer le produit
    cy.get('[id^=favBtn]').first().click()

    // Vérifier que la liste est vide après suppression
    cy.reload()
    cy.contains('No Product in your favourite list').should('exist')
  })
})


describe('Dark Mode toggle', () => {
  it('should toggle dark mode and persist after reload', () => {
    cy.visit('/home')

    // 1. Vérifie que le bouton est présent
    cy.get('#theme-toggle').should('exist')

    // 2. Clique pour activer le mode sombre
    cy.get('#theme-toggle').click()
    cy.get('body').should('have.class', 'dark')

    // 3. Recharge la page : le mode sombre doit être toujours actif
    cy.reload()
    cy.get('body').should('have.class', 'dark')

    // 4. Clique pour désactiver le mode sombre
    cy.get('#theme-toggle').click()
    cy.get('body').should('not.have.class', 'dark')
  })
})
