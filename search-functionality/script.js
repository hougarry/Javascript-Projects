// use json data from json placeholder


/* here we use qureySlector to select the search input field and the user card template. we don't use getElementById because we don't have an id for the search input field and the user card template. we use getElementById when we have an id for the element we want to select.

*/
/* I don't use ; in javascript because it's optional. I use it in css because it's required. */
const userCardTemplate = document.querySelector('[data-user-template]')
const userCardContainer = document.querySelector('[data-user-cards-container]')
const searchInput = document.querySelector('[data-search]')

let users = []

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisble = 
            user.name.toLowerCase().includes(value) || 
            user.email.toLowerCase().includes(value)
        user.element.classList.toggle('hidden', !isVisble)
    })

})

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const userCard = userCardTemplate.content.cloneNode(true).children[0]
            const cardHeader = userCard.querySelector('[data-card-header]')
            const cardBody = userCard.querySelector('[data-card-body]')

            cardHeader.textContent = user.name
            cardBody.textContent = user.email
            userCardContainer.append(userCard)

            return { name: user.name, email: user.email, element: userCard }
        })
    })

/* res.json() returns a promise, so we can chain another .then() to it. res means response.
The second .then() will have the actual data that we want.The data is stored in the data variable.
= > {} is an arrow function. means that we are passing the data to the function as an argument.
data = > {} means that we are passing the data to the function as an argument.
data.forEach() will loop through the data array.
console.log(data) will show the data in the console.
*/