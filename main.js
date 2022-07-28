"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt ("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {

        for (let i = 0; i < 2; i++) {
            let a = prompt ("Один из последних просмотренных фильмов?", "").trim();
            let b = prompt ("На сколько оцените его?", "");
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log ("Done!");
            } else {
                console.log ("Error");
                i--;
            }
        
        }
    },
    detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 30){
        alert ("Вы киноман!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        alert('Вы классический зритель!');
    } else {
        alert("Произошла ошибка!");
    }
    },
    
    showMyDB: function (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    },

    writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);

        if (genre === "" || genre == null) {
            console.log('вы ввели неправильные данные или не указали их вообще');
            i--;
        } else {
            personalMovieDB.genres[i - 1] = genre;
        }
     }
     personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
     });


    },
    toggleVisibleMyDB: function () {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};