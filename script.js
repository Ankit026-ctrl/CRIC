import trendingMovies from './trendingMovies.js';
import bollywoodMovies from './bollywoodMovies.js';
import webseriesMovies from './webseriesMovies.js';
import southMovies from './southMovies.js';
import hollywoodMovies from './hollywoodMovies.js';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize sidenav
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    const movies = {
        trending: trendingMovies,
        bollywood: bollywoodMovies,
        webseries: webseriesMovies,
        south: southMovies,
        hollywood: hollywoodMovies
    };

    function displayMovies(category) {
        const moviesList = document.getElementById('movies-list');
        moviesList.innerHTML = '';  // Clear current movie list

        movies[category].forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('col', 's12', 'm6', 'l4');

            movieCard.innerHTML = `
                <div class="card movie-card">
                    <div class="card-image">
                        <img src="${movie.imgPath}" alt="${movie.title}">
                    </div>
                    <div class="card-content black-text">
                        <span class="card-title black-text">${movie.title}</span>
                        <p class="black-text">${movie.description}</p>
                    </div>
                    <div class="card-action">
                        <a href="${movie.qualityLinks['480p']}" class="btn grey darken-2">
                            480p
                        </a>
                        <a href="${movie.qualityLinks['720p']}" class="btn grey darken-2">
                            720p
                        </a>
                        <a href="${movie.qualityLinks['1080p']}" class="btn grey darken-2">
                            1080p
                        </a>
                    </div>
                </div>
            `;

            moviesList.appendChild(movieCard);
        });
    }

    document.querySelectorAll('.category').forEach(categoryLink => {
        categoryLink.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            displayMovies(category);
        });
    });

    document.getElementById('search').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const allMovies = [].concat(trendingMovies, bollywoodMovies, webseriesMovies, southMovies, hollywoodMovies);
        const filteredMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm));

        const moviesList = document.getElementById('movies-list');
        moviesList.innerHTML = '';

        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('col', 's12', 'm6', 'l4');

            movieCard.innerHTML = `
                <div class="card movie-card">
                    <div class="card-image">
                        <img src="${movie.imgPath}" alt="${movie.title}">
                    </div>
                    <div class="card-content black-text">
                        <span class="card-title black-text">${movie.title}</span>
                        <p class="black-text">${movie.description}</p>
                    </div>
                    <div class="card-action">
                        <a href="${movie.qualityLinks['480p']}" class="btn grey darken-2">
                            480p
                        </a>
                        <a href="${movie.qualityLinks['720p']}" class="btn grey darken-2">
                            720p
                        </a>
                        <a href="${movie.qualityLinks['1080p']}" class="btn grey darken-2">
                            1080p
                        </a>
                    </div>
                </div>
            `;

            moviesList.appendChild(movieCard);
        });
    });

    // Display default category
    displayMovies('trending');

    // Typing effect
    const phrases = [
        "Welcome to Movistaan",
        "Download Movies and Webseries",
        "Subscribe our TG channel for your movie request"
    ];
    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;
    const typedTextElement = document.getElementById('typed-text');
    const cursorElement = document.getElementById('cursor');

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        typedTextElement.textContent = currentPhrase.slice(0, currentLetterIndex + 1);
        currentLetterIndex++;
        
        if (currentLetterIndex === currentPhrase.length) {
            currentLetterIndex = 0;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(type, 2000); // Wait for 2 seconds before typing the next phrase
        } else {
            setTimeout(type, 100);
        }
    }

    type();
});
