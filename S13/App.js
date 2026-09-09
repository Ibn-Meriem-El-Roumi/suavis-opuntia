import {readFileSync, writeFileSync, appendFileSync} from "node:fs"
import { createServer } from "node:http"

// console.log(readFileSync("calc.js", {encoding: "utf-8"}));
// writeFileSync("passwords.txt", "instagram: 123456789\n", {encoding: "utf-8"})
// appendFileSync("passwords.txt", "facebook: 123456789\n", {encoding: "utf-8"})
// Receieve data and store them in a file

console.log(process.env.USER);


const server = createServer(function(request, response){
    const requestMethod = request.method
    const requestUrl = request.url

    switch(requestMethod){
        case "GET":
            if(requestUrl === "/students/all") {
                const names = readFileSync("names.txt", {encoding: "utf-8"})
                console.log(names)
                response.end()
            }
            break;

        case "POST":
            if(requestUrl === "students/create") {
                const names = readFileSync("names.txt", {encoding: "utf-8"})
                console.log(names)
                response.end()
            }
            appendFileSync("names.txt", `${new Date().toDateString()}: new student\n`, {encoding: "utf-8"})
            response.end()
            break;

        case "DELETE":
            break;
    }
})

server.listen(8080, ()=>{
    console.log(`Listening to http://localhost:8081`);
})