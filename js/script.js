// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

const sliderImage = [
   "img/01.jpg",
   "img/02.jpg",
   "img/03.jpg",
   "img/04.jpg",
   "img/05.jpg"
]

const itemsContainer = document.querySelector(".items-container")

for(let i = 0; i < sliderImage.length; i++){
    const thisImg = sliderImage[i]
    const element = `
        <div class="item">
            <img src="${thisImg}" alt="">
        </div>`;
    itemsContainer.innerHTMl += element
    console.log(thisImg)
}

// start

const items = document.getElementsByClassName("item");
let sliderPosition = 0;
items[sliderPosition].classList.add("active");