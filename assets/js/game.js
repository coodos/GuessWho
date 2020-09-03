var images = ['juan.jpeg', 'toby.jpeg', 'bob.jpeg', 'jenna.jpeg', 'melissa.jpeg', 'jempa.jpeg', 'emma.jpeg', 'emily.jpeg', 'edward.jpeg', 'john.jpeg', 'Courtney.jpeg', 'arun.jpeg', 'william.jpeg', 'venessa.jpeg', 'danielle.jpeg', 'jeff.jpeg', 'susan.jpeg', 'samuel.jpeg', 'bill.jpeg', 'harris.jpeg', 'sarah.jpeg'];

var cards = document.querySelector('.cards');
var yourCard = document.querySelector('.yourCard');

images.forEach((img) => {
    var person = document.createElement('div')
    person.innerHTML = `<img src="../assets/imgs/people/${img}"></img><br><h2>${img.split('.')[0]}</h2>`;
    person.classList.add('card');
    cards.appendChild(person);
});

var randomNumber = Math.floor(Math.random() * 21);
var personToGuess = document.createElement('div');
personToGuess.innerHTML = `<img src="../assets/imgs/people/${images[randomNumber]}"></img><br><h1>${images[randomNumber].split('.')[0]}</h1>`;
yourCard.appendChild(personToGuess)
var people = document.querySelectorAll('.card');

document.querySelectorAll('.card').forEach((element) => {
    element.onmouseenter = function () {
        element.classList.add('hover');
    }
    element.onmouseleave = function () {
        element.classList.remove('hover')
    }
    element.onclick = function () {
        element.style.transition = 'all 0s'
        element.style.visibility = 'hidden'
    }
})