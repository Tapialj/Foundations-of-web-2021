document.getElementById("get-text").addEventListener("click", getText);
document.getElementById("get-users").addEventListener("click", getUsers);
document.getElementById("get-posts").addEventListener("click", getPosts);
document.getElementById("add-post").addEventListener("submit", addPost);

function getText()
{
    /*
    fetch("sample.txt")
    .then(function (res) {
        return res.text();
    })
    .then(function (data) {
        console.log(data);
    })
    */

    fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("output").innerHTML = data;
    })
    .catch((error) => console.log(error));
}

function getUsers()
{
    fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
        let output = "<h2 class=\"mb-4\">Users</h2>";

        data.forEach(function(user) {
            output += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                </ul>
            `;
        });

        document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

function getPosts()
{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        let output = "<h2 class=\"mb-4\">Posts</h2>";

        data.forEach((post) => {
            output += `
                <div class="card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });

        document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

function addPost(e)
{
    e.preventDefault();

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body: JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}