'use strict';

//Below would be the equivalent of defining the following HTML tag inside the <body>:
//<img width="100" height="200" src="picture.jpg" />

// const myImage = new Image(230, 200);
// myImage.src = 'sverige.jpeg';
// document.body.appendChild(myImage);


let unorderList = document.getElementById('unorder-list');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const buttonAdd = document.getElementById('button-add');

let countryCategories = [
    {
        Country: "Sweden",
        Capital: "Stockholm",
        Population: "10 million",
        Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/640px-Flag_of_Sweden.svg.png"
    },
    {
        Country: "Japan",
        Capital: "Tokyo",
        Population: "126 million",
        Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"
    },
    {
        Country: "Indonesia",
        Capital: "Jakarta",
        Population: "273 million",
        Flag: "https://europa.eu/capacity4dev/system/files/styles/photo_overlay/private/images/photo/flag_of_indonesia.svg_.png?itok=q9uu9Ww9"
    },
    {
        Country: "France",
        Capital: "Paris",
        Population: "67 million",
        Flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
    },
]
//slumpmässigt väljer fram ett nytt land från arrayen varje gång man refreshar
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function countryObject(key, value) {
    let listElement = document.createElement('li');
    unorderList.append(listElement)
    if (key === 'Flag') {
        listElement.innerHTML = `<img src='${value}' width='50px'/>`
    } else {
        listElement.innerText = [`${key}: ${value}`]
    }
}

//slumpmässigt väljer fram ett nytt land från arrayen varje gång man refreshar

if (countryCategories.length > 0) {
    for (const [key, value] of Object.entries(countryCategories[randomNum(0, countryCategories.length)])) {
        countryObject(key, value)
    }
}

let i = 0; // börjar på första landet vilket är 0 i arrayen
nextBtn.addEventListener('click', function (event) {
    if (i > countryCategories.length - 1) {
        i = 0;
    } //få fram hela arrayen
    unorderList.innerHTML = ''; //innerHTML returnerar texten från elementet, i detta fallet är det unorderlist från vår html, vilket är länderna. Om vi inte börjar på en tom array så lägger den till alla länder på rad efter varandra.
    for (const [key, value] of Object.entries(countryCategories[i])) {
        countryObject(key, value)
    }
    i++ // plussar på för att komma till nästa h
})

backBtn.addEventListener('click', function (event) {
    if (i === 0) {
        i = countryCategories.length
    }
    i-- // här lägger vi minus för att varje gång vi trycker på back så går den tillbaka till föregående land.
    unorderList.innerHTML = ''; // ett MÅSTE. se ovan.
    for (const [key, value] of Object.entries(countryCategories[i])) {
        countryObject(key, value)
    }
});


buttonAdd.addEventListener('click', function (event) {
    event.preventDefault(); // för att sidan inte ska laddas om. ett MÅSTE.

    const countryInput = document.getElementById('country-input');
    const capitalInput = document.getElementById('cap-input');
    const popInput = document.getElementById('pop-input');
    const errorMessage = document.getElementById('error-message');
    const inputFlag = document.getElementById('flag-input');

    if (countryInput.value.length > 0, capitalInput.value.length > 0, popInput.value.length > 0, inputFlag.value.length > 0) {
        errorMessage.innerHTML = "";
        const newCountry = {
            Country: countryInput.value,
            Capital: capitalInput.value,
            Population: popInput.value,
            Flag: inputFlag.value,
        }

        unorderList.innerHTML = '';
        for (const [key, value] of Object.entries(newCountry)) {
            countryObject(key, value)
        }

        countryCategories.push(newCountry)
        alert('Your country has been added');

    } else {
        (errorMessage.innerHTML = 'You need to add something!');
    }
});



