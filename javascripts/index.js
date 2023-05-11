//base URL
const baseURL = 'http://localhost:3000/cards/'

//grab elements of document
const main = document.getElementById('main')
const viewCollection = document.getElementById('view')
const newCard = document.getElementById('newPup')


//content load and page refresh
document.addEventListener('DOMContentLoaded',()=>{
    
    startCountdown()
})

function pagerefresh(){
    main.innerHTML = ''
}

//event listeners
viewCollection.addEventListener('click', fetchPups)
newCard.addEventListener('click', createNewApopt)


function fetchPups(){
    fetch (baseURL)
    .then (res=>res.json())
    .then (pagerefresh())
    .then(data=>data.forEach(pup=>renderOnePup(pup)))    
}

//function to renderOneCard
function renderAdoptPup(pupObj){
    const pup = document.createElement('ul')
    card.id = `${pupObj.id}`
    card.className='pup'
    pup.innerHTML=`
    <img src="${pupObj.image}" class="pup-pic" />
    <div class="pup-info">
        <p>${pupObj.name}</p>
        <p> ${pupObj.pupAge}</p>
        <p> ${pupObj.breed}</p>
        
    `
   
}


//function to submit new card
function createNewAdopt(){
    pagerefresh()
    const form = document.createElement('form')
    form.id = 'addPupForm'
    form.innerHTML= `
        <h3>Info for our new guest!</h3>
        <input
          type="text"
          name="breed"
          value=""
          placeholder="Enter Dog Breed..."
          class="input-text"
        />
        <br />
        <input
          type="text"
          name="age"
          value=""
          placeholder="Enter Dog Age..."
          class="input-text"
        />
        <br />
        <input
          type="text"
          name="Name"
          value=""
          placeholder="Enter Dogs Name..."
          class="input-text"
        />
        <br />
        <input
          type="text"
          name="favorite food"
          value=""
          placeholder="Enter Dogs Favorite Food..."
          class="input-text"
        />
        <br />
        <input
          type="text"
          name="temperment"
          value=""
          placeholder="Enter Dog Temperment..."
          class="input-text"
        />
        <br />
        <button id ="submitPup" class="waves-effect waves-light btn blue accent-1">Submit Pup </button>
    `
    main.appendChild(form)
    document.querySelector('form').addEventListener('submit', newPupObj)
}

function newPupObj(e){
    e.preventDefault()
    let newPupObj={
        breed:e.target.breed.value,
        name:e.target.name.value,
        favoriteFood:e.target.favoriteFood.value,
        dogTemperment:e.target.dogTemperment.value,      
    }
    renderOnePup(newPupObj)
    postNewPup(newPupObj)
    document.querySelector('form').reset()
}

//funtion to post new cards to db
function postNewPup(newPupObj){
    fetch (baseURL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newPupObj)
    })
    .then(res=>res.json())
    .then(pup=>console.log(pup))
  }


//function to update bids to db

// function to delete card from db
function goingHome(cardObj){
    fetch(`${baseURL}${pupObj.id}`,{
        method: 'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
}

//Countdown function to end Auction
//function borrowed from w3schools.com
