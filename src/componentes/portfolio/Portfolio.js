import React from "react"
import "./portfolio.css"
import {data} from './portfolioData'

const Portfolio = () => {
    return (
        <section id='Portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map((data) => {
                    return(
                    <article key={data.id} className='portfolio__item'>
                        <div className='portfolio__item-image'>
                            <img src={data.image} alt={data.title}/>
                        </div>
                        <h3>{data.title}</h3>
                        <div className='portfolio__item-cta'>
                            <a href={data.github} className='btn' target='_blank'>Github</a>
                            <a href={data.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                            );
                })}
            </div>
        </section>)
        ;
}

export default Portfolio