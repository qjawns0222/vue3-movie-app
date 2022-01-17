import { iteratee } from "lodash"
import { getTransitionRawChildren } from "vue"

describe('첫번재테스트',()=>{
    it('프로젝트 페이지 이동',()=>{
        cy.visit('/')
        cy.get('header .active')
            .contains('Search')
    })
    it('영화를 검색합니다',()=>{
        cy.get('input.content')
            .type('Frozen')
        cy.get('select.select:nth-child(2)')
            .select('30')
        cy.get('button.apply')
            .contains('Apply')
            .click()
        cy.wait(2000)
        cy.get('.movies')
        .should('have.length',30)
        

    })
    it('겨울왕국2 선택',()=>{
        cy.get('.movies .title')
        .contains("Frozen II")
        .click()
    })
    it('겨울왕국2 상세정보확인',()=>{
        cy.url()
        .should('include','/movie/tt4520988')
        cy.wait(2000)
        cy.get('header .active')
        .contains('Movie')
        cy.get('.title')
        .contains("Frozen II")
    })
})