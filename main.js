"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {

    for (let i = 0; i < 2; i++) {
        let a = prompt ("Один из последних просмотренных фильмов?", "");
        let b = prompt ("На сколько оцените его?", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log ("Done!");
        } else {
            console.log ("Error");
            i--;
        }
    
    }
}

rememberMyFilms();


function detectPersonallevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 30){
        alert ("Вы киноман!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        alert('Вы классический зритель!');
    } else {
        alert("Произошла ошибка!");
    }
    
}

detectPersonallevel();



function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);



function writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYouGenres();


