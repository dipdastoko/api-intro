const loadPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

const displayPost = posts => {
    const postHolder = document.getElementById('section');
    posts.forEach(post => {
        // console.log(post);
        const p = document.createElement('p');
        p.innerText = `Id: ${post.id}
        Title: ${post.title}`;
        postHolder.appendChild(p);

        p.addEventListener('click', function () {
            const div = document.createElement('div');
            div.innerHTML = `
            Id: ${post.id} </br>
        Title: ${post.title}</br>
        Body: ${post.body}
            `;
            postHolder.textContent = '';
            postHolder.appendChild(div);
        })

    })
}
loadPost();



