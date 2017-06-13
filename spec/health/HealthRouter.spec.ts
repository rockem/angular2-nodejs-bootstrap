import * as mocha from 'mocha';
import * as chai from "chai";
import app from "../../src/server";
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('health api', () => {

    it('should be healthy', () => {
        return chai.request(app).get('/health')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body.status.code).to.be.eql('UP');
            });
    });
});