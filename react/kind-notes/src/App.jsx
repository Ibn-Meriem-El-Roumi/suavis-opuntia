import { useState } from "react"
import { Header } from "./components/Header"
import NoteForm from "./components/NoteForm"
import { useEffect } from "react"
import NoteList from "./components/NoteList"

function App() {

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("kind_notes")
    // if(saved){
    //   return JSON.parse(saved)
    // }else{
    //   return []
    // }

    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("kind_notes", JSON.stringify(notes))
  }, [notes])



  function handleAddNote(input){
    const newNote = {id: Date.now(), text: input}
    setNotes([newNote, ...notes])
  }
  return (
    <>
    <div className="app-container">
        <Header />
        <NoteForm onAddNote={handleAddNote} />
        <NoteList notes={notes} />
    </div>
    </>
  )
}

export default App
