import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder='Name' />
                <br></br>
                <input type="email" name="" id="" placeholder='Email' />
                <textarea placeholder='message' name="" id=""></textarea>
                <br></br>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm