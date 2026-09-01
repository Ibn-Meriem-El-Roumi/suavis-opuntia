import BlogPost from "./BlogPost.js"

const titleInput = document.querySelector("#title")
const tagsInput = document.querySelector("#tags")
const blogInput = document.querySelector("#blogContent")
const blogsContainer = document.querySelector("#blogs")


const submitBtn = document.querySelector("[type='submit']")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

    let blogPost = new BlogPost(titleInput.value, tagsInput.value, blogInput.value)
    
    // post to database
    
    // render it on the dom
    createBlogPostUI(blogsContainer, blogPost)

    // send it somewhere
    
    
})

function createMyElement(parent, element, content){
    const el = document.createElement(element)
    el.textContent = content
    parent.appendChild(el)
}

function createBlogPostUI(parent, blog){
    const mainDiv = document.createElement("div")
    mainDiv.classList = "blog"

    createMyElement(mainDiv, "h1", blog.title)
    createMyElement(mainDiv, "small", blog.tags)
    createMyElement(mainDiv, "p", blog.content)

    parent.appendChild(mainDiv)
}

// submitBtn.addEventListener("click", function(e){
//     e.preventDefault()
//     console.log(e);
// })

// function clickEffect(e){
//     e.preventDefault()
//     console.log(e);
// }

// const clickEffect2 = (e) => {
//      e.preventDefault()
//     console.log(e);
// }
// submitBtn.addEventListener("click", clickEffect)

