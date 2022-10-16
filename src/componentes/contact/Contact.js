import React, {useRef, useState} from 'react';
import "./contact.css";
import {FaCheckCircle} from 'react-icons/fa';
import {data} from './contactData';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [popout, setPopout] = useState(false);
    const [submitted, setSubmitted] = useState(false);

        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_e4lzn3f', 'template_tldl2ih', form.current, 'Vjg8SBT8qBeCBgmdC')
                .then((result) => {
                    setSubmitted(true);
                }, (error) => {
                    setSubmitted(false);
                });

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
                            {<props.icon className='contact__option-icon' />}
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
                <button type='submit' className='btn btn-primary' onClick={() => setPopout(true)}>Send Message</button>
                <div id='popup' className={popout & submitted ? 'popup open-popup' : 'popup'}>
                    <FaCheckCircle className='popup-icon'/>
                    <h2>Thank You!</h2>
                    <p>Your message has been successfully submitted. Thanks!</p>
                    <button className='btn btn-primary' onClick={() => {setPopout(false); setSubmitted(false);}}>OK</button>
                </div>
            </form>
        </div>
    </section>;
};

export default Contact;
