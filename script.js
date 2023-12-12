const form = document.querySelector('.formContainer')
const userInput = document.querySelector('.nav__input')
const clearInput = document.querySelector('.btn--clear')
const restaurantWrapper = document.querySelector('.resturants__row')
const nextPage = document.querySelector('.next--page--arrow')
const prevPage = document.querySelector('.back--page--arrow')

let locationUserInput = [`West%20Bloomfield` ,`mi`]
let pageNumber = 0

// this function will make the url dynamic
function url() {
  return `https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/${locationUserInput[1]}/city/${locationUserInput[0]}/${pageNumber}`
}

function request() {
  return new Request(url(), {
    method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': '76e31ebb81msh011bc3129b5b491p1112d1jsn7644e0f23ae1',
		  'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
	}
  })
}

async function rendorResturants() {
  try {
    let data = await fetch(request())
    let response = await data.json() // response if returning an object
    
    if(data.status === 200) {
      let responseHTML = ''

      for(let i = 0; i < response['restaurants'].length; i++) {
        responseHTML += restaurantsHTML(response['restaurants'][i])
      }
      
      restaurantWrapper.innerHTML = responseHTML

    } else {
      console.log('Server Error', data)
    }
  } catch(error) {
    console.log('Fetch Error', error)
  }

}

function restaurantsHTML(resturant) {
    return `<div class="resturant">
    <div class="img__wrapper"><img src="./assets/backgroun--img.png" alt=""></div>
    <div class="resturant__descriptions">
      <div class="resturant__description--title">${resturant.restaurantName
      }</div>
      <div class="description__line">
        <i class="fas fa-bowl-food"></i>
        <div class="resturant__description">
          ${resturant.cuisineType}
        </div>
      </div>
      <div class="description__line">
        <i class="fa-solid fa-address-book"></i>
        <div class="resturant__description">
          ${resturant.address}, ${resturant.cityName}, ${resturant.stateName} ${resturant.zipCode}
        </div>
      </div>
      <div class="description__line">
        <i class="fa-regular fa-window-maximize"></i>
        <div class="resturant__description"><a href="${resturant.website}">Website</a></div>
      </div>
      <div class="description__line">
        <i class="fa-solid fa-phone"></i>
        <div class="resturant__description">${resturant.phone}</div>
      </div>
    </div>
  </div>`
}


setTimeout(() => {
    rendorResturants()
}, 1000)

function search() {
  document.body.classList += ' btn--clear-on'
}

function clearSearch () {
  document.body.classList.remove('btn--clear-on')
}

// event listeners
form.addEventListener('submit', e => {
  document.body.classList += ' btn--clear-on'
  e.preventDefault()
  
  let inputValue = userInput.value
  userInput.value = ''
  
  locationUserInput = inputValue.split(', ')
  clearSearch()

  rendorResturants()
})

clearInput.addEventListener('click', clearSearch)

nextPage.addEventListener('click', () => {
  pageNumber++
  prevPage.classList += ' show-back-arrow'
  rendorResturants()
})

prevPage.addEventListener('click', () => {
  pageNumber--
  if(pageNumber === 0) prevPage.classList.remove('show-back-arrow')
  rendorResturants()
})