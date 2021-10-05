const loadData = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayInfo(data));
}

const displayInfo = data => {

    const location = data.results[0].location;
    const name = data.results[0].name;

    const imageContainer = document.getElementById('container');
    imageContainer.textContent = '';

    const div = document.createElement('div');
    div.innerHTML = `<img src="${data.results[0].picture.large}">
            </br>
            <b>Name:</b> ${name.title} ${name.first} ${name.last}<br>
            <b>Country:</b> ${location.country}<br>
            <b>State:</b> ${location.state}<br>
            <b>City:</b> ${location.city}</br>
            <b>Street Name:</b> ${location.street.name}<br>
            <b>Street Number:</b> ${location.street.number}</br>
            <b>Coordinates:</b> latitude: ${location.coordinates.latitude}, longitude:${location.coordinates.longitude} </br>
            <b>Timezone:</b> ${location.timezone.offset}<br>
            
    `;
    imageContainer.appendChild(div);
}

