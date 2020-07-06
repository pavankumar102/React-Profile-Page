import React, { Component } from 'react'

import pyimg from '../Components/public/image/pythonimg.png'
import jsimg from '../Components/public/image/javascriptimg2.png'
import htmlimg from '../Components/public/image/html5logo.jpg'
import cssimg from '../Components/public/image/csslogo.png'
import reactjs_logo from '../Components/public/image/reactjs_logo.png'
import sql_logo from '../Components/public/image/sql_logo.jpg'
import node from '../Components/public/image/node.png'
import django from '../Components/public/image/django.png'
import frontend from '../Components/public/image/frontend.png'




class Project extends Component {
    render() {
        return (
       
            <section id="skillheader" className="flex-project-container">

                    <div><img src={pyimg} width="100" height="100" alt="python"/></div>
                    <div><img src={jsimg} width="100" height="100" alt="js"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div><img src={reactjs_logo} width="100" height="100" alt="css"/></div>
                    <div><img src={sql_logo} width="100" height="100" alt="css"/></div>
                    <div><img src={node} width="100" height="100" alt="css"/></div>
                    <div><img src={django} width="100" height="100" alt="css"/></div>
                    <div><img src={frontend} width="100" height="100" alt="css"/></div>
                    
            </section>
        )
    }
}

export default Project
