//grab elements of document
{
const main = document.getElementById('main')
const viewServices = document.getElementById('view')
const pickDate = document.getElementById('pickDate')
}

{
viewServices.addEventListener('click', fetchServe)
pickDate.addEventListener('click', pickDate)
}