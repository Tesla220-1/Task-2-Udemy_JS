'use strict';

let personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {

        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while ( personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
    
            let lastFilm = prompt('Один из последних просмотренных фильмов?','');
            let userRaitingLastFilm = prompt('На сколько оцените его?', '');
        
            if (lastFilm === '' || lastFilm == null || lastFilm.length >= 50  ||
            userRaitingLastFilm ==='' || userRaitingLastFilm == null) {
        
                --i;
            } else {
                personalMovieDB.movies[lastFilm] = userRaitingLastFilm;
            }  
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {

            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        
            console.log('Вы классичский зритель');
        } else if (personalMovieDB.count > 30) {
        
            console.log('Вы киноман');
        } else {
        
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function() {
        return personalMovieDB.privat == false ? console.log(personalMovieDB) : undefined;
    },

    writeYourGenres: function() {
        let favoriteGenre;

        for ( let i = 0; i < 3; i++) {
            favoriteGenre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
    
            if ( favoriteGenre == '' || favoriteGenre == null || typeof(favoriteGenre) != 'string' ) {
                i--;
            } else {
                personalMovieDB.genres[i] = favoriteGenre;
            }
        }

        personalMovieDB.genres.forEach(function(item, index) {
            console.log(`Любимый жанр ${index + 1}- это ${item}`);
        });
    },
    
    toglleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else  if (personalMovieDB.privat == true){
            personalMovieDB.privat = false;
        }
    },
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();

