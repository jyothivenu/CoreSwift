class HomePage{
    getTitle(){
        return cy.get('[id="glow-ingress-line1"]', {timeout:3000})
    }

    getSearchBox(){
        return cy.get('[id="twotabsearchtextbox"]', {timeout:3000})
    }

    getSearchText(){
        return cy.get('.s-desktop-toolbar .a-text-bold', {timeout:3000})
    }
    
}

export default HomePage;