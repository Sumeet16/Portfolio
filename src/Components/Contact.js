import React, {useState} from 'react'
import "./Contact.css"
import { UilMessage } from '@iconscout/react-unicons'

const Contact = () => {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const handleChange = (e) => {
        const id = e.target.id;
        let value = e.target.value;
        if (id === "name") {
            setName(value);
        } else if (id === "subject") {
            setSubject(value);
        } else if (id === "body") {
            setBody(value);
        }
    };

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
                            <input type="text" placeholder='name' name="name" className='textbox' id="name" onChange={handleChange} />
                            <input type="text" placeholder='subject' name="subject" className='textbox' id="subject" onChange={handleChange} />
                            <textarea name="body" id="body" placeholder='message' className='textbox' cols="30" rows="10" onChange={handleChange}></textarea>
                            <a className='sendme' href={`mailto:sumeetishwar1610@gmail.com?subject=${subject}&body=${body} %0D%0A%0D%0ASender's Details: Name: ${name} `} rel="noopener noreferrer" target="_blank"><p>Send <UilMessage /></p></a>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
