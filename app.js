document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]

    const button = document.getElementById("boton")
    button.addEventListener("click", restart)


    cardArray.sort(() => 0.5 - Math.random())
    const result = document.getElementById('options')
    const option = document.getElementById("result")
    const grid = document.getElementById("grid")
    let cardsChoosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
      const imagen = document.createElement("img")
      imagen.setAttribute("src", "./images/blank.png")
      imagen.setAttribute("data-id", i)
      grid.appendChild(imagen)
      imagen.addEventListener("click", flip)
    }
    }

    function checkForMatch(){
      const cards = document.querySelectorAll('img')
      const optionOne = cardsChosenId[0];
      const optionTwo = cardsChosenId[1];

      if (optionOne == optionTwo){
        cards[optionOne].setAttribute("src", "./images/blank.png")
        cards[optionTwo].setAttribute("src", "./images/blank.png")
        result.textContent =  "its the same image, choose another"
      }
      else if (cardsChoosen[0] === cardsChoosen[1]){
        cards[optionOne].setAttribute("src", "./images/white.png")
        cards[optionTwo].setAttribute("src", "./images/white.png")
        cardsWon.push(cardsChoosen)
        result.textContent =  "you found one good, lets go"
      }
      else{
        cards[optionOne].setAttribute("src", "./images/blank.png")
        cards[optionTwo].setAttribute("src", "./images/blank.png")
        result.textContent = "you dont match, try again"
      }


      if(cardsWon.length === cardArray.length/2){
          confetti({
          particleCount: 200,
          spread: 180
        })
        result.textContent = 'Congratulations! You found them all!'
      }
      cardsChoosen = [];
      cardsChosenId = [];

    }

    function flip() {
      const id = this.getAttribute("data-id")
      this.setAttribute("src", cardArray[id].img)
      cardsChoosen.push(cardArray[id].name)
      cardsChosenId.push(id)
      if (cardsChosenId.length == 2 ) {
        setTimeout(checkForMatch, 500)
      }
    }

    function restart(){
     location.reload()
    }

createBoard();
  })










