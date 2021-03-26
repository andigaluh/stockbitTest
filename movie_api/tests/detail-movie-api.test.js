const requestTest = require('supertest');
const app = require('../app/routes/movie');

describe('Test API /detail', () => {
    it('It should be return statusCode 200: success', function(done) {
        requestTest(app).get('/detail?id=tt14069590').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toContainKey('data');
            expect(response.body.data).toContainKey('title');
            expect(response.body.data.title).toBeString();
            done();
        });
    });

    it('It should be return statusCode 400: param id is required (exist param id)', function(done) {
        requestTest(app).get('/detail?id=').then((response) => {
            expect(response.statusCode).toBe(400);
            expect(response.body.message).toBe('param id is required');
            done();
        });
    });

    it('It should be return statusCode 400: param id is required (not exist param id)', function(done) {
        requestTest(app).get('/detail').then((response) => {
            expect(response.statusCode).toBe(400);
            expect(response.body.message).toBe('param id is required');
            done();
        });
    });

    it('It should be return statusCode 200: success (with data = null)', function(done) {
        requestTest(app).get('/detail?id=invalidID').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toContainKey('data');
            done();
        });
    });

})