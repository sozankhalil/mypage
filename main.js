
const Button = document.querySelector('.myButton');

const myDive1=document.querySelector('#mymovie1');
const myDive2=document.querySelector('#mymovie2');
const myDive3=document.querySelector('#mymovie3');
const myDive4=document.querySelector('#mymovie4');


let movies=[
    { 
        name: 'The Hunger Game',
        image:'images/movie1.jpg' },
    {
        name: 'The Hunger Game',
        image: 'images/movie1.jpg'
    },
    {
        name: 'The Hunger Game',
        image: 'images/movie1.jpg'
    },
    {
        name: 'The Hunger Game',
        image: 'images/movie1.jpg'
    },

]


let movieNames=['The Hunger Game','Red Sparrow','Passengers','Mother'];

let myImages = ['images/movie1.jpg', 'images/movie2.jpg', 'images/movie3.jpg', 'images/movie4.jpg'];

 function showMyMovies(){
     myDive1.innerHTML = `<img src="${myImages[0]}" alt=""> <h3>${movieNames[0]}</h3>`;
     myDive2.innerHTML += `<img src="${myImages[1]}" alt=""> <h3>${movieNames[1]}</h3>`;
     myDive3.innerHTML += `<img src="${myImages[2]}" alt=""> <h3>${movieNames[2]}</h3>`;
     myDive4.innerHTML += `<img src="${myImages[3]}" alt=""> <h3>${movieNames[3]}</h3>`;
     
 }










// function showMyMovies(){
//    for (const item of myImages) {
//     for (const moviename of movieNames) {
//    myDives.forEach(dive => {
//        dive.innerHTML = `<img src="${item}" alt=""> <h3>${moviename}</h3>`;
//         });
//     }
//    }
        
//     }







Button.addEventListener('click', showMyMovies);

    
       
 









