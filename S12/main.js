import { KEYS } from "./keys.js"
const EMAILJS_API_KEY=KEYS["EmailJS"];
(function(){
    emailjs.init({
    publicKey: EMAILJS_API_KEY,
    });
})();

const senderElement = document.querySelector("#sender")
const emailElement = document.querySelector("#email")
const messageElement = document.querySelector("#message")
const submitBtn = document.querySelector("[type='submit']")

submitBtn.addEventListener("click", async function(e){
    e.preventDefault()
    const myEmail = {
        sender: senderElement.value,
        email: emailElement.value,
        time: `${new Date()}`,
        message: messageElement.value
    }

    const SERVICE_ID = KEYS["SERVICE_ID"]
    const TEMPLATE_ID = KEYS["TEMPLATE_ID"]

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, myEmail)
})