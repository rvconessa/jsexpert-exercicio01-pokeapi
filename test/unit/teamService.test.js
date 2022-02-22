const { expect } = require('chai')
const { describe, it } = require('mocha')
const sinon = require('sinon')
const TeamService = require('../../src/service/teamService')

const mocks = {
    validResponse: require('../mocks/valid-response.json')
}

describe('TeamRepository', () => {
    let teamService = {}
    let sandbox = {}
    before(() => {
        teamService = new TeamService()
    })
    beforeEach(() => {
        sandbox = sinon.createSandbox()
    })

    afterEach(() => {
        sandbox.restore()
    })

    describe('testing get', () => {
        it('should be find three pokemons', async () => {
            const validResponse = mocks['validResponse']
            sandbox.stub(
                teamService,
                teamService.get.name,
            ).resolves(validResponse)
            
            const result = await teamService.get()
            const expected = validResponse

            expect(result).to.be.equal(expected)
        })
    })

    describe('testing getRandomPokemons', () => {
        it('should be find three pokemons', async () => {
            const validResponse = mocks['valid-random-pokemos']
            sandbox.stub(
                teamService.teamRepository,
                teamService.teamRepository.getRandomPokemons.name,
            ).resolves(validResponse)
            
            const result = await teamService.teamRepository.getRandomPokemons()
            const expected = validResponse

            expect(result).to.be.equal(expected)
        })
    })
})