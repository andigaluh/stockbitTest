const buildMovieController = require('../app/controllers/Movie.controller');
const { omdbService } = require('../app/config/dependencies');

describe('TEST controllers/Movie.controller', () => {
    const MovieController = buildMovieController({ omdbService });
    describe('Test getAllMovie', () => {
        it("it should returns 200: mocked and original result", async function(done) {
        const addMock = jest.spyOn(omdbService, 'search');
        addMock.mockImplementation(() => Promise.resolve({
            data: [
            {
                Title: 'Dota 2',
                Year: '2013',
                imdbID: 'tt2290962',
                Type: 'game',
                Poster: 'https://m.media-amazon.com/images/M/MV5BZDQxMjVmMjYtZTU4OC00MzRhLTljNTgtMTAwMDg3YzhlY2M4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
            },
            {
                Title: 'Dota: We, the Community',
                Year: '2015',
                imdbID: 'tt4419694',
                Type: 'movie',
                Poster: 'https://m.media-amazon.com/images/M/MV5BMTY2NzQ3NTEwM15BMl5BanBnXkFtZTgwMTY1NzA0NDE@._V1_SX300.jpg'
            },
            {
                title: 'DOTA: Nakakabaliw',
                year: '2014',
                imdbID: 'tt3657530',
                type: 'movie',
                poster: 'https://m.media-amazon.com/images/M/MV5BMGQxZjc1ZjEtOWI0MS00NGI0LWI4ODItNjE5YmFmNDUzOTlmXkEyXkFqcGdeQXVyNTU3NTA3MTQ@._V1_SX300.jpg',
            }
            ],
            total: 3,
            page: 1
        }));

        const httpRequest = {
            query: {
            keyword: 'Dota',
            },
        };
        const resultMock = await MovieController.getAllMovie(httpRequest);
        expect(resultMock).toContainKey('statusCode');
        expect(resultMock.statusCode).toEqual(200);
        expect(resultMock).toContainKey('body');
        expect(omdbService.search).toHaveBeenCalledWith(httpRequest.query.keyword, 1);
        addMock.mockRestore();

        const result = await MovieController.getAllMovie(httpRequest);
        expect(result).toContainKey('statusCode');
        expect(result.statusCode).toEqual(200);
        expect(result).toContainKey('body');
        done();
        });

        it("It should returns 400: mocked and original result with no keyword", async function(done) {
        const addMock = jest.spyOn(omdbService, 'search');
        addMock.mockImplementation(() => Promise.resolve({
            data: [],
            total: 0,
            page: 1,
        }));

        const httpRequest = {
            query: {
                keyword: '',
            },
        };
        const resultMock = await MovieController.getAllMovie(httpRequest);
        expect(resultMock).toContainKey('statusCode');
        expect(resultMock.statusCode).toEqual(400);
        expect(resultMock).toContainKey('body');
        expect(resultMock.body).toContainKey('message');
        expect(resultMock.body.message).toEqual('param keyword is required');
        expect(omdbService.search).not.toHaveBeenCalled();
        addMock.mockRestore();

        const result = await MovieController.getAllMovie(httpRequest);
        expect(result).toContainKey('statusCode');
        expect(result.statusCode).toEqual(400);
        expect(result).toContainKey('body');
        expect(result.body).toContainKey('message');
        expect(result.body.message).toEqual('param keyword is required');
        done();
        });
    })

    describe('Test getMovieById', () => {

        it("It shourd returns 200: mocked and original result", async function(done) {
        const addMock = jest.spyOn(omdbService, 'getDetail');
        addMock.mockImplementation(() => Promise.resolve({
            Title: 'Dota',
            Year: '2013',
            imdbID: 'tt2290962',
            Type: 'game',
            Poster: 'https://m.media-amazon.com/images/M/MV5BZDQxMjVmMjYtZTU4OC00MzRhLTljNTgtMTAwMDg3YzhlY2M4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        }));

        const httpRequest = {
            query: {
            id: 'tt2290962',
            },
        };
        const resultMock = await MovieController.getMovieById(httpRequest);
        expect(resultMock).toContainKey('statusCode');
        expect(resultMock.statusCode).toEqual(200);
        expect(resultMock).toContainKey('body');
        expect(resultMock.body).toContainKey('data');
        expect(resultMock.body.data).toBeObject();
        expect(omdbService.getDetail).toHaveBeenCalledWith(httpRequest.query.id);
        addMock.mockRestore();

        const result = await MovieController.getMovieById(httpRequest);
        expect(result).toContainKey('statusCode');
        expect(result.statusCode).toEqual(200);
        expect(result).toContainKey('body');
        expect(result.body).toContainKey('data');
        expect(result.body.data).toBeObject();
        done();
        });

        it("It should returns 400: mocked and original result with no keyword", async function(done) {
        const addMock = jest.spyOn(omdbService, 'getDetail');
        addMock.mockImplementation(() => Promise.resolve({}));

        const httpRequest = {
            query: {
            id: '',
            },
        };
        const resultMock = await MovieController.getMovieById(httpRequest);
        expect(resultMock).toContainKey('statusCode');
        expect(resultMock.statusCode).toEqual(400);
        expect(resultMock).toContainKey('body');
        expect(resultMock.body).toContainKey('message');
        expect(resultMock.body.message).toEqual('param id is required');
        expect(omdbService.getDetail).not.toHaveBeenCalled();
        addMock.mockRestore();

        const result = await MovieController.getMovieById(httpRequest);
        expect(result).toContainKey('statusCode');
        expect(result.statusCode).toEqual(400);
        expect(result).toContainKey('body');
        expect(result.body).toContainKey('message');
        expect(result.body.message).toEqual('param id is required');
        done();
        });
    });
});