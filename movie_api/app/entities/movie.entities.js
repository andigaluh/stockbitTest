module.exports = class Movie{
    constructor({
        Title,
        Year,
        imdbID,
        Type,
        Poster,
        Rated,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Actors,
        Plot,
        Language,
        Country,
        ImdbRating,
        Ratings,
        Metascore,
        BoxOffice,
        Production,
    }) {
        this.title = Title;
        this.year = Year;
        this.imdbID = imdbID;
        this.type = Type;
        this.poster = Poster;
        this.rated = Rated;
        this.released = Released;
        this.runtime = Runtime;
        this.genre = Genre;
        this.director = Director;
        this.writer = Writer;
        this.actors = Actors;
        this.plot = Plot;
        this.language = Language;
        this.country = Country;
        this.imdbRating = ImdbRating;
        this.ratings = Ratings;
        this.metascore = Metascore;
        this.boxOffice = BoxOffice;
        this.production = Production;
    }
};