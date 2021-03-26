const requestTest = require('supertest');
const app = require('../app/routes/movie');

describe('Test API /movie', () => {
    it('It should be return statusCode 200: success', function(done) {
        requestTest(app).get('/movie?keyword=Dota').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.body.data).toBeArray();
            done();
        });
    });

    it('It should be return statusCode 400: param keyword is required (exist param keyword)', function(done) {
        requestTest(app).get('/movie?keyword=').then((response) => {
            expect(response.statusCode).toBe(400);
            expect(response.body.message).toBe('param keyword is required');
            done();
        });
    });

    it('It should be return statusCode 400: param keyword is required (not exist param keyword)', function(done) {
        requestTest(app).get('/movie').then((response) => {
            expect(response.statusCode).toBe(400);
            expect(response.body.message).toBe('param keyword is required');
            done();
        });
    });

    it('It should be return statusCode 200: success (empty array)', function(done) {
        requestTest(app).get('/movie?keyword=invalidkeyword').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.body.data).toBeArray();
            expect(response.body.data).toBeEmpty();
            expect(response.body.total).toEqual(0);
            expect(response.body.page).toEqual(1);
            done();
        });
    });

})