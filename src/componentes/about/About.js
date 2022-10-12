import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const about = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='About Image'/>
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h2>Experience</h2>
                            <small>5+ months Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h2>Clients</h2>
                            <small>20+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h2>Projects</h2>
                            <small>10+</small>
                        </article>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem
                            culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores
                            quasi cupiditate. </p>
                        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default about;