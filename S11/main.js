const commentsContainer = document.querySelector("#comments")

async function getPosts(){
    const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST"
    })
    const data = await res.json()
    renderPosts(data)
}

function renderPosts(comments){
    for (let i = 0; i < 10; i++) {
        commentsContainer.innerHTML += `
        <div>
            <h3>${comments[i].name}</h3>
            <p>${comments[i].body}</p>
        </div>
        
        `
    }
}

() => (async () => await getPosts())

addEventListener("DOMContentLoaded", async () => {
    // await getPosts()
})
