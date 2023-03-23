const beerButton = document.querySelector('#beer-button')
const beerTitle = document.querySelector('#random-beer')
const beerDescription = document.querySelector('#description')

function getData() {
  fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => response.json())
    .then(data => {
      console.log()
      const name = data[0].name
      const description = data[0].description

      beerTitle.textContent = name
      beerDescription.textContent = description
    })
}

beerButton.addEventListener('click', getData)
