import {browser, element, by, protractor} from "protractor";

describe('Clip Maker Client E2E', function () {

    beforeEach(function () {
        browser.get('');
    });

    it('should show greeting', function () {
        expect(element(by.id('greeting')).getText()).toEqual('Hello World');
    });

});