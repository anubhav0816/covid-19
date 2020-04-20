console.log("connected")

const totalconfirmed = document.querySelector('#total-confirmed')
const totalrecover = document.querySelector('#total-recover')
const todayconfirmed = document.querySelector('#today-confirmed')
const todayrecover = document.querySelector('#today-recovered')
const search = document.querySelector('input')

fetch('http://localhost:3000/cases').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            totalconfirmed.textContent="Loading... "
            totalrecover.textContent="Loading... "
            todayconfirmed.textContent="Loading... "
            todayrecover.textContent="Loading..."
        }
        else{
            totalconfirmed.textContent=data.totalconfirmed
            totalrecover.textContent=data.totalrecovered
            todayconfirmed.textContent=data.todayconfirmed
            todayrecover.textContent=data.todayrecovered

        }
    })
})
