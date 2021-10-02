function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

function displayUsers(x) {
    const ul = document.getElementById('users');
    for (const user of x) {
        const li = document.createElement('li');
        // li.innerText = user.name;
        li.innerText = `Name: ${user.name}, Email: ${user.email}`;
        ul.appendChild(li);
    }
}