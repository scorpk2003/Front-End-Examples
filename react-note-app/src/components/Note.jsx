import { MdDeleteForever } from 'react-icons/md'

const Note = ({ id, text, date, DeleteNote }) => {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever
                    onClick={() => DeleteNote(id)}
                    className='delete-icon'
                    size='1.3em'>
                </MdDeleteForever>
            </div>
        </div>
    );
}

export default Note;