const url = "http://localhost:3000/films"
const getPoster = document.getElementById("poster")
const getTitle = document.getElementById("title")
const Runtime = document.getElementById("runtime")
const getShowtime = document.getElementById("showtime")
const ticketLeft = document.getElementById("ticket-num")
const OrangeBunton =document.getElementsByClassName("ui orange button")[0]

OrangeBunton.addEventListener("click", buyATicket)

function getRequest(){
    fetch("http://localhost:3000/films/1")
    .then(response => response.json())
    .then(data => showInfo(data));

}

function showInfo(data){
    debugger
    getPoster.src = data.poster
    getTitle.innerText = data.title
    Runtime.innerText = `${data.runtime} minutes`
    getShowtime.innerText = data.showtime
    ticketLeft.innerText = data.capacity - data.tickets_sold
}


getRequest()

 function buyATicket(data){
    if (ticketLeft.innerText !=0){
        let data = 27
        fetch("http://localhost:3000/films/1",{
            method: "PATCH",
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify({tickets_sold: data})

        })
        .then(res => res.json())
        .then(result => console.log(result))
        ticketLeft.innerText = parseInt(ticketLeft.innerText) - 1
    }
    else
    OrangeBunton.innerText = "Sold Out"

    debugger

     
 }