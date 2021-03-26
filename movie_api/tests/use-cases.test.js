const Movie = require('../app/entities/movie.entities');
const buildGetMovieDetail = require('../app/usecases/detail-movie');
const buildSearchMovie = require('../app/usecases/search-movie');

describe('TEST usecases/detail-movie', () => {
    let omdbService = {
        getDetail: jest.fn((id) => Promise.resolve({
        Title: 'The Shawshank Redemption',
        Year: '1994',
        imdbID: id,
        })),
    };

    it('It should be return movie detail', async function(done) {
        const query = {
        id: 'tt0111161',
        };
        const getMovieDetail = buildGetMovieDetail({ omdbService });
        const result = await getMovieDetail(query);
        expect(result instanceof Movie).toEqual(true);
        expect(result.imdbID).toEqual(query.id);
        done();
    });

});

describe('TEST usecases/search-movie', () => {
    let omdbService = {
        search: jest.fn(() => Promise.resolve({
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
        })),
    };

    it('It should be return movie search', async function(done) {
        const query = {
            keyword: 'Dota',
        };
        const searchMovie = buildSearchMovie({ omdbService });
        const result = await searchMovie(query);
        expect(result.data).toBeArray();
        expect(result.data[0] instanceof Movie).toEqual(true);
        done();
    });

});