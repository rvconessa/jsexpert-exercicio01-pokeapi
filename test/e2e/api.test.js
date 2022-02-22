const { expect } = require('chai')
const { describe, it } = require('mocha')
const request = require('supertest')
const app = require('../../src/api')


describe('API Test', () => {
    describe('testing default route', () => {
        it('should return hello world', async () => {
            const response = await request(app).get('/').expect(200)
            expect(response.status).to.equal(200)
            expect(response.text).to.equal('Hello World!')
        })
    })
    describe('testing route /team', () => {
        it('should be return pokemon object containing name and moves', async () => {
            const response = await request(app).get('/team').expect(200)
            expect(response.status).to.equal(200)
            expect(response.body[0]).to.have.property('moves');
            expect(response.body[0]).to.have.property('name');
        })
    })
    describe('testing route /hello', async () => {
        it('should be return hello world', async () => {
            const response = await request(app).get('/').expect(200)
            expect(response.status).to.equal(200)
            expect(response.text).to.equal('Hello World!')
        })
    })
})
