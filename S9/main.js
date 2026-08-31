// const headings = document.querySelectorAll("h1")
// headings[1].textContent = "Hello Abdou 2"
// headings[0].textContent = "Goodbye Yasmine"

// let h2 = document.createElement("h2") // Empty
// document.querySelector("body").appendChild(h2)

// h2.textContent = "Hello Imane" // New value

// h2 = "Hello"

// h2.textContent = "Hello Imane, again" // New value
const body = document.querySelector("body")

const createMyElement = function(parent, elementName, content="Dummy Content"){
    let el = document.createElement(elementName)
    el.textContent = content
    parent.appendChild(el)

    return el
}

function createCardElement(parent, content){
    const section = document.createElement("section")
    section.classList="card"

    const h2 = document.createElement("h2")
    h2.textContent = content.title
    section.appendChild(h2)

    const p = document.createElement("p")
    p.textContent = content.text
    section.appendChild(p)

    const a = document.createElement("a")
    a.textContent = content.linkText
    a.href = content.linkDir
    section.appendChild(a)

    // section.innerHTML = `
    //     <h2>${content.title}</h2>
    //     <p>${content.text}</p>
    //     <a href="${content.linkDir}}">${content.linkText}</a>
    //     <script>alert("Hahaha hyou are hacked")</script>
    // `
    parent.appendChild(section)
}

const content = {
    title: "Phone",
    text: "The newest Xiaomi Phone (17)",
    linkText: "Redmi 17",
    linkDir: "http://youtube.com",
}
for (let i = 0; i <= 10; i+=2) {
    createCardElement(body, content)
    // createMyElement(document.querySelector("body"), "p", "Hello Haya "+i)
}