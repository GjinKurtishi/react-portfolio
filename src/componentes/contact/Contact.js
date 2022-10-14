import React, { useRef } from 'react';
import "./contact.css";
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {data} from './contactData';
import emailjs from 'emailjs-com';

const Contact = () => {
        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_e4lzn3f', 'template_tldl2ih', form.current, 'Vjg8SBT8qBeCBgmdC')

            e.target.reset();
        };

    return <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact__container'>
            <div className='contact__options'>
                {
                    data.map((props) => {
                        return <article className='contact__option'>
                                <MdOutlineMail className='contact__option-icon'/>
                                <h4>{props.h4}</h4>
                                <h5>{props.h5}</h5>
                                <a href={props.link} target='_blank'>Send a message</a>
                            </article>;
                        }
                    )
                }
            </div>
            {/*END OF CONTACT OPTIONS*/}
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Full Name' required />
                <input type='email' name='email' placeholder='Email' required />
                <textarea name='message' rows='7' placeholder='Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>;
};

export default Contact;
