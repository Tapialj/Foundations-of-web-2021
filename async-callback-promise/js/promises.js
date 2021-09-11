const posts = [
    {title: "Post one", body: "This is post one"},
    {title: "Post two", body: "This is post two"}
];

function getPosts() 
{
    setTimeout(() => {
        
        let output = "";

        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;

    }, 1000);
}

function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error)
            {
                resolve();
            }
            else
            {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
}
/*
//.then is only executed after the original function promise has been resolved or rejected.
//.catch will catch thrown rejections.
createPost({title: "Post Three", body: "This is post three"})
    .then(getPosts)
    .catch(err => console.log(err));
*/
/*
//async needs to be there for await to be called within the function.
async function init() {
    await createPost({title: "Post Three", body: "This is post three"});

    getPosts();
}

init();
*/


//async/await with fetch
async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log(data);
}

fetchUsers();

/*
//Promies.all will resolve all promises inside the array in order.
const p1 = Promise.resolve("Hellow World");
const p2 = 10;
const p3 = new Promise((resolve,reject) =>
    setTimeout(resolve, 2000, "Goodbye")
);
//with a fetch you need to use .then to format the data usually into json via the .json()
const p4 = fetch("https://jsonplaceholder.typicode.com/users").then(res =>
    res.json()
);

Promise.all([p1, p2, p3, p4]).then(values => console.log(values));
*/

