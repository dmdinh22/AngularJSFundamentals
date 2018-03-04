function MoviesController() {
    this.newTitle = '';
    this.newRelease = '';
    this.addMovie = function () {
        this.favorites.unshift({ // unshift to add to beginning of array
            title: this.newTitle, // can use push to add at end
            year: this.newRelease
        });
    };
    this.favorites = [{
        title: 'The Shawshank Redemption',
        year: '1994'
    }, {
        title: 'Inception',
        year: '2010'
    },{
        title: 'The Matrix',
        year: '1999'
    }, {
        title: 'Saving Private Ryan',
        year: '1998'
    }];
}

angular
    .module('app')
    .controller('MoviesController', MoviesController);
