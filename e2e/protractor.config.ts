import {Config} from 'protractor';

export let config: Config = {

    rootElement: 'my-app',
    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',

    baseUrl: 'http://localhost:3000',
    specs: ['*e2e-spec.js'],
    //allScriptsTimeout:12000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 20000,
        realtimeFailure: true
    }
};