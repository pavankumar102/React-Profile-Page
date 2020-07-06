import React, { Component } from 'react'
import biologo from './public/image/biopicimg.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={biologo} width="180" height="180" alt="abtimg"/>
                    <p>My passion is to learn new programming languages and I am very much curious to work on web development. I am a fresher and I really want to get the experience of working. The best way of possessing the knowledge to enhance student ability is self learning. I can put my full hard work and show my skills perfectly. I can give new innovative ideas via my skills and creative mind. I can prove myself and my passion for work. I can put my full support and better work for completing the tasks and make the project better. I hope I will do my level best to explore my skills to enhance. I can build a website with my relevant skills. Mainly HTML, CSS, JAVASCRIPT, ReactJS are the most technologies I will use. I have ability to think and get innovative thoughts, logically solving problems.</p>
                
            </section>
        )
    }
}

export default About
