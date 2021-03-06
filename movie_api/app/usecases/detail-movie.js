const Movie = require('../entities/movie.entities');

module.exports = ({ omdbService }) => {
    return (query) => {
        const { id } = query;
        return omdbService
        .getDetail(id)
        .then((data) => {
            return new Movie(data);
        });
    };
};
