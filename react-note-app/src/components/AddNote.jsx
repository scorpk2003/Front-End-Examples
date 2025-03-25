import { useState } from "react"

const AddNote = ({ handleAddNote }) => {
    const [NoteText, setNoteText] = useState('')
    const charLimit = 200

    const handleChange = (event) => {
        if (charLimit - NoteText.length >= 0)
            setNoteText(event.target.value)
    }

    const handleSave = () => {
        if (NoteText.trim().length > 0) {
            handleAddNote(NoteText)
            setNoteText('')
        }
    }

    return (
        <div className="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder="Add new note..."
                value={NoteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{charLimit - NoteText.length} remaining</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default AddNote