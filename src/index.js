const url = "http://localhost:3000/films"

let movieDiv = document.querySelector('.card')
let moviePoster = document.getElementById('poster')
let btn = document.getElementsByClassName('ui orange button')[0]
console.log(btn)

const fetchMovie = () => {
    fetch(`${url}/1`)
    .then(res => res.json())
    .then(json => renderMovie(json))
}
fetchMovie()

const renderMovie = (movie) => {
    let {id, title, runtime, capacity, showtime, description, poster, tickets_sold} = movie

    moviePoster.src= poster
    let titleI = document.getElementById('title')
    let runtimeI = document.getElementById('runtime')
    let filminfo = document.getElementById('film-info')
    let showtimeI = document.getElementById('showtime')
    let ticketnum = document.getElementById('ticket-num')

    titleI.textContent = title
    runtimeI.textContent = `${runtime} minutes`
    filminfo.textContent = description
    showtimeI.textContent = showtime
    ticketnum.innerText = capacity - tickets_sold

    // movieDiv.innerHTML = `
    //     <div id="title" class="title">${title}</div>
    //     <div id="runtime" class="meta">${runtime} minutes</div>
    //     <div class="content">
    //         <div class="description">
    //             <div id="film-info">${description}</div>
    //             <span id="showtime" class="ui label">${showtime}</span>
    //             <span id="ticket-num">${capacity - tickets_sold}</span> remaining tickets
    //         </div>
    // `
}

const buyTix = (e) => {
    console.log(e.path[2])
// debugger
    // tickets_sold ++

    // let remainingTix = document.getElementById('ticket-num')
    // remainingTix.textContent = `${capacity - tickets_sold}`

    let ticketnum = document.getElementById('ticket-num')
    let tixs = ticketnum.innerText
    tixs --
    ticketnum.innerText = tixs

    if(ticketnum.textContent > 0) {
        console.log(ticketnum)
        // fetch(`${url}/1`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({tickets_sold: tickets_sold})
        // })
    } else if (ticketnum.textContent == 0){
        btn.textContent = 'Sold Out'
        btn.style.backgroundColor= 'gray'
        // fetch(`${url}/1`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({tickets_sold: tickets_sold})
        // })
    } else {
        btn.textContent = 'Sold Out'
        btn.style.backgroundColor= 'gray'
        ticketnum.textContent = 0
    }
}
btn.addEventListener('click', buyTix)


//realized half way through that the placement of my event listener was affecting the purchase of tickets. Re-did the way I rendered items to the screen. Found(finding) a new way to access the values I need to change in order to update my patch and DOM.