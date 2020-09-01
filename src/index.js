const url = "http://localhost:3000/films"
const movieCard = document.querySelector('.card')
let button = document.querySelector('.button')
console.log(movieCard)

fetch(`http://localhost:3000/films/1`)
    .then(resp => resp.json())
    .then(movie => appendMovie(movie))

const appendMovie = (movie) => {

    button.addEventListener('click', (e) => buyTicket(e))
    let poster = document.querySelector('#poster')
    console.log(movie)
    let title = document.querySelector('#title')
    console.log(title)
    let runtime = document.querySelector('#runtime')
    console.log(runtime)
    let filmInfo = document.querySelector('#film-info')
    let showTime = document.querySelector('#showtime')
    let tickets = document.querySelector('#ticket-num')
    let description = document.querySelector('.description')

    poster.src = movie.poster
    title.textContent = movie.title
    runtime.textContent = `${movie.runtime} minutes`
    filmInfo.textContent = movie.description
    showTime.textContent = movie.showtime
    tickets.textContent = movie.capacity - movie.tickets_sold
    description.appendChild(button)
    
}

const buyTicket = (e) => {
    e.preventDefault()

    let reduceTicketAmount = parseInt(e.target.previousElementSibling.textContent) - 1
    // debugger



    fetch(`http://localhost:3000/films/1`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({tickets_sold: reduceTicketAmount })
    })
    .then(resp => resp.json())
    .then(tickets => {
        e.target.previousElementSibling.innerText =`${reduceTicketAmount}`
        
    })
    
}
