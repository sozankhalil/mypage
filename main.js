
const Button = document.querySelector('.myButton');

const myDive1=document.querySelector('#mymovie1');
const myDive2=document.querySelector('#mymovie2');
const myDive3=document.querySelector('#mymovie3');
const myDive4=document.querySelector('#mymovie4');


// myDives.forEach(dive=> {
//     dive.innerHTML =`<img src="images/movie1.jpg" alt=""> <h3>the hunger game</h3>`;
// })


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


// myImages[0]=new Image();
// myImages[0].src = 'images/movie1.jpg';

// myImages[1] = new Image();
// myImages[1].src = 'images/movie2.jpg';

// myImages[2] = new Image();
// myImages[2].src = 'images/movie3.jpg';

// myImages[3] = new Image();
// myImages[3].src = 'images/movie4.jpg';
// function showMyMovies(){
//     for (const image of myImages) {
//         for (const movieName of movieNames) {
//             myDives.forEach(dive => {
//                 dive.innerHTML = `<img src="${image}" alt=""> <h3>${movieName}</h3>`;
//             });
            
//         }
        
//     }
// }

Button.addEventListener('click', showMyMovies);

    
       
 









