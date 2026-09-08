import {readFileSync, writeFileSync, appendFileSync} from "node:fs"

// console.log(readFileSync("calc.js", {encoding: "utf-8"}));

// writeFileSync("passwords.txt", "instagram: 123456789\n", {encoding: "utf-8"})
// appendFileSync("passwords.txt", "facebook: 123456789\n", {encoding: "utf-8"})

import {createServer} from "node:http"

const server = createServer((request, response) => {
    if(request.method === "GET"){
        console.log("Getting sonmething");
        response.end()
    }

    if(request.method === "POST"){
        // do something else
        console.log("Posting/Creating sonmething");
        response.end()


    }

})


server.listen(8000, () => {
    console.log("running on http://localhost:8000");
    
})