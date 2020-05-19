'use strict';

let numberOfFilms;

function start () {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};



function rememberMyFilms () {

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
}

rememberMyFilms();

function detectPersonalLevel() {
    
    if (personalMovieDB.count < 10) {

        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB <= 30){
    
        console.log('Вы классичский зритель');
    } else if (personalMovieDB.count > 30) {
    
        console.log('Вы киноман');
    } else {
    
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {

    return personalMovieDB.privat == false ? console.log(personalMovieDB) : undefined;
}

showMyDB();

function writeYourGenres() {
    let favoriteGenre;

    for ( let i = 0; i < 3; i++) {
        favoriteGenre = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');

        if ( favoriteGenre == '' || favoriteGenre == null || typeof(favoriteGenre) != 'string' ) {
            i--;
        } else {
            personalMovieDB.genres[i] = favoriteGenre;
        }
    }
}

writeYourGenres();
