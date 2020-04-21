console.log("connected")

const totalconfirmed = document.querySelector('#total-confirmed')
const totalrecover = document.querySelector('#total-recover')
const todayconfirmed = document.querySelector('#today-confirmed')
const todayrecover = document.querySelector('#today-recovered')
const stateForm = document.querySelector('form')
const search = document.querySelector('select')
const confirmed = document.querySelector('#message-1')
const active = document.querySelector('#message-2')
const recovered = document.querySelector('#message-3')
const deaths = document.querySelector('#message-4')

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

stateForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const state = search.value
    confirmed.textContent='Loading.....'
    active.textContent='Loading.....'
    recovered.textContent=''
    deaths.textContent=''

    console.log(state)

    fetch('http://localhost:3000/cases?search='+ state).then((response)=>{
        response.json().then((datas)=>{
            if(datas.error){
               confirmed.textContent='Unable to find'
            }
            else{
                console.log('confirmed')
                confirmed.textContent='Confirmed:-'+datas.confirmed
                active.textContent='Active:-'+datas.active
                recovered.textContent='Recovered:-'+datas.recovered
                deaths.textContent='Deaths:-'+datas.deaths
            }         
    
        })
    })


    console.log('testing')
}) 