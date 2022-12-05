const movieArray = [];

class Movie {
    constructor (title, actor="Not Specified") {
        this.title = title;
        this.actor = actor;
    }
    add() {
        movieArray.push(this);
        console.table(movieArray);
    }
}

module.exports = Movie;