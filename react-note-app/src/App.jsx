import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'
import Search from './components/Search'
import Header from './components/Header'

const App = () => {
  const [notes, setNotes] = useState([])
  const [SearchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    localStorage.setItem(
      'React-Note-App-Item',
      JSON.stringify(notes)
    )
  }, [notes])

  useEffect(() => {
    const saveNotes = JSON.parse(
      localStorage.getItem('React-Note-App-Item')
    )

    if (saveNotes) { setNotes(saveNotes) }

  }, [])

  const AddNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toDateString()
    }
    setNotes([...notes, newNote])
  }

  const DeleteNote = (id) => {
    const delNote = notes.filter((note) => note.id !== id)
    setNotes(delNote)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}></Header>
        <Search handleSearch={setSearchText}></Search>
        <NotesList
          notes={notes.filter(
            (note) => note.text.toLowerCase().includes(SearchText)
          )}
          handleAddNote={AddNote}
          handleDeleteNote={DeleteNote} />
      </div>
    </div>
  )
}

export default App
