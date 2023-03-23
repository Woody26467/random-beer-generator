const beerButton = document.querySelector('#beer-button')
const beerTitle = document.querySelector('#random-beer')
const beerDescription = document.querySelector('#description')
const beerImage = document.querySelector('#beer-image')

function getData() {
  fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => response.json())
    .then(data => {
      console.log(data[0].volume)
      const name = data[0].name
      const description = data[0].description
      const volumeUnit = data[0].volume.unit
      const volumeValue = data[0].volume.value

      beerTitle.textContent = name + ' | ' + volumeValue + volumeUnit
      beerDescription.textContent = description
      beerImage.setAttribute('src', data[0].image_url)
    })
}

getData()

beerButton.addEventListener('click', getData)
