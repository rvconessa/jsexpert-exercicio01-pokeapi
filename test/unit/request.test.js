const { describe, it } = require('mocha')
const chai = require('chai')
const { expect, should } = chai
const chaiAsPromised = require('chai-as-promised')
const request = require('../../src/util/request')
chai.use(chaiAsPromised);


describe('request module', () => {
    it('should be show error', async () => {
        await expect(request('https://invalidurl.com')).to.be.rejectedWith(Error);
    })
})
