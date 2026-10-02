import { useState } from "react"

export default function NoteForm({onAddNote}){
    const [input, setInput] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(!input.trim()) return
        onAddNote(input)
        setInput("")
    }

    return(
     <form onSubmit={handleSubmit} className="form">
        <input 
            type="text"
            className="input-field"
            placeholder="type something nice"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="submit-btn">Post</button>
     </form>
    )
}