
//Attach event listener
document.querySelector('.look').addEventListener('click', getData);


async function getData() {
    //Grab input from search box
    const leader = document.querySelector('input').value

    try {
        
        const response = await fetch(`/api?leader=${leader}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('.fullname').innerText = data.fullName;
        document.querySelector('.period-served').textContent = data.periodServed;
        document.querySelector('.dio').innerHTML = data.durationInOffice;
        document.querySelector('.country-of-origin').innerText = data.nationality;
        document.querySelector('.sor').innerText = data.stateOfOrigin;
        document.querySelector('.com').innerText = data.civilianOrMilitary;

    } catch (error) {
        console.log(error)
    }
}