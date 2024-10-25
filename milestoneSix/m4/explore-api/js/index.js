
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayData(data))
    
}

// function displayData(data){  // 04:10 conceptual
//     for(const user of data){
    //         console.log(user.name)
    //     }
    
    // }
    function displayData(data){  // 04:10 conceptual
        const ul = document.getElementById('users-list');
        for(const user of data){
            // console.log(user.name);
            const li = document.createElement('li'); // 09:10 conceptual
            li.innerText = user.name;
            ul.appendChild(li);
        }

}

function deletePosts(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
}

function PatchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function createAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

}