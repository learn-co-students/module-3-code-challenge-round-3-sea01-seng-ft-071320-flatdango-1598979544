// const url = "http://localhost:3000/films"
let uicards = document.getElementById('showing')
let card = document.querySelector('.card')
let description = document.querySelector('.description')

//not persisting in the database
const purchaseTicket = (item) => {
    console.log(item)
    let boughttickets = item.tickets_sold -= 1
    console.log(boughttickets)

    fetch(`http://localhost:3000/films/[:id]`,{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        bod: JSON.stringify({ticketnum:ticketnum})
    })
    .then(res = res.json())
    .then(json => {
        let tickets = card.querySelector('ticket-num')
        tickets.innerText = `${json.tickets}`
    })
}

const fetchMovieDetails = () => {
    fetch("http://localhost:3000/films/1")
    .then(res => res.json())
    .then(content => addContent(content))
}
fetchMovieDetails()
const addContent = (data) => {
let poster = document.getElementById('poster')
let title = document.querySelector('.title')
let filminfo = document.getElementById('film-info')
let runtime = document.querySelector('#runtime')
let showtime = document.querySelector('#showtime')
let ticketnum = document.querySelector('#ticket-num')
// console.log(filminfo)
// console.log(poster)
// console.log(title)
// console.log(runtime)
// console.log(showtime)
// console.log(ticketnum)
poster.src = data.poster
title.innerText = data.title
filminfo.innerText = data.description
runtime.innerText = data.runtime + ' minutes'
showtime.innerText = data.showtime
ticketnum.innerText = `${data.tickets_sold}`

// showing.prepend(card)
let buyticket = document.querySelector('.ui.orange.button')
buyticket.addEventListener('click', () => purchaseTicket(data))

}
