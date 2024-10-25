

// <!-- https://jsonplaceholder.typicode.com/posts -->

function loadPosts(){
    // console.log('loading posts data')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}

// 1. get the container where new element want to add
// 2. create child element
// 3. set innerText or innerHTML
// 4. appendChild
function displayPosts(posts){
    const posstContainer = document.getElementById('posts-container') // add before for loop
    for(const post of posts){
        // console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>${post.body}</p>
        `;
        posstContainer.appendChild(postDiv)
    }
}

loadPosts();


// function displayData(data){  // 04:10 conceptual
//     const ul = document.getElementById('users-list');
//     for(const user of data){
//         // console.log(user.name);
//         const li = document.createElement('li'); // 09:10 conceptual
//         li.innerText = user.name;
//         ul.appendChild(li);
//     }


