'use strict';

const Lab = require('@hapi/lab');
const {expect} = require('@hapi/code');
const {afterEach, beforeEach, describe, it} = exports.lab = Lab.script();
const {init} = require('../server.testPrepared.js');

describe('GET /', () => {
    let server;

    beforeEach(async () => {
        server = await init();
    });

    afterEach(async () => {
        await server.stop();
    });

    it('responds with 200', async () => {
        const res = await server.inject({   // injeta a requisição direto no route handler do hapi
            method: 'get',
            url: '/'
        });

        expect(res.statusCode).to.equal(200);
    });

    it('responds with 404', async () => {
        const res = await server.inject({   // injeta a requisição direto no route handler do hapi
            method: 'get',
            url: '/hello'
        });

        expect(res.statusCode).to.equal(404);
    });
});