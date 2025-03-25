import { MdDeleteForever } from 'react-icons/md'

const Note = () => {
    return (
        <div className="note">
            <span>Hello</span>
            <div className="note-footer">
                <small>11-11-2003</small>
                <MdDeleteForever className='delete-icon' size='1.3em'></MdDeleteForever>
            </div>
        </div>
    );
}

export default Note;