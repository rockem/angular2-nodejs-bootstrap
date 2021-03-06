import * as mocha from 'mocha';
import * as chai from "chai";
import app from "../../src/server";
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('greeting api', () => {

    it('greet with Hello World', () => {
        return chai.request(app).get('/api/greeting')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body.value).to.be.eql('Hello World');
            });
    });
});