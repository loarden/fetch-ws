const rootElement = document.querySelector('#root')

const composeHTML = (data) => {
  rootElement.insertAdjacentHTML('beforeend',`
      <h2>${data.copyright}</h2>
      <h4>${data.date}</h4>
      <p>${data.explanation}</p>
      <img src='${data.url}'/>`)
}

fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(function (response) {
    console.log(response)
    throw new Error ('Hibás kód')
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    composeHTML(data)
  })
  .catch(function (error) {
    console.log('Sajnos hiba történt: ', error)
  })