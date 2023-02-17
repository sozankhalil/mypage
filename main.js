
const Button = document.querySelector('.see-my-movies');
const myDive = document.querySelector('.mymovie');
const seeMore = document.querySelector('.see-more');

let movies = [
    { image: 'images/movie1.jpg', title: 'The Hunger Game' },
    { image: 'images/movie2.jpg', title: 'Red Sparrow' },
    { image: 'images/movie3.jpg', title: 'Passengers' },
    { image: 'images/movie4.jpg', title: 'Mother' },
]






function showMyMovies() {
    movies.forEach(function (movie) {
        const div = document.createElement('div');
        div.classList.add('movie');
        div.innerHTML = `<h3>${movie.title}</h3>
   <img src="${movie.image}" alt="">`;
        myDive.appendChild(div);
    })
    const more = document.createElement('button');
    more.innerText = 'See More ';
    seeMore.appendChild(more);

}
Button.addEventListener('click', showMyMovies);




















