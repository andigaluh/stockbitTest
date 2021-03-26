const buildSearchMovie = require('../usecases/search-movie');
const buildGetMovieDetail = require('../usecases/detail-movie');

module.exports = (dependencies) => {
    const { omdbService } = dependencies;
    const searchMovie = buildSearchMovie({ omdbService });
    const getMovieDetail = buildGetMovieDetail({ omdbService });

    const getAllMovie = (httpRequest) => {
        const { query } = httpRequest;
        if (!query.keyword) {
            return {
                statusCode: 400,
                body: { message: 'param keyword is required' },
            };
        }

        return searchMovie(query).then((response) => {
            return {
                statusCode: 200,
                Response: true,
                body: {
                    ...response
                }
            };
        });
    };

    const getMovieById = (httpRequest) => {
        const { query } = httpRequest;

        if (!query.id) {
            return {
                statusCode: 400,
                body: { message: 'param id is required' },
            };
        }

        return getMovieDetail(query)
        .then((result) => {
            if (!result.title) {
                return {
                    statusCode: 200,
                    body: {
                        data: "null",
                    },
                };
            }

            return {
                statusCode: 200,
                body: {
                    data: result,
                },
            };
        });
    };

    return {
        getAllMovie,
        getMovieById
    }
}