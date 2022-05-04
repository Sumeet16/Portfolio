import React from 'react'
import "./Contact.css"
import { UilMessage } from '@iconscout/react-unicons'

const Contact = () => {
    return (
        <>
            <section>
                <div className="contact__container">
                    <div className="contact__heading__section">
                        <h1 className="contact__main__heading">Contact Me</h1>
                        <p className="contact__sub__heading">Get in touch</p>
                    </div>

                    <div className="form__container">
                        <form>
                            <input type="text" placeholder='name' name="name" className='textbox' id="fname" />
                            <input type="text" placeholder='subject' name="subject" className='textbox' id="subject" />
                            <textarea name="body" id="body" placeholder='message' className='textbox' cols="30" rows="10"></textarea>
                            <button type="submit"><p>Send <UilMessage /></p></button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
