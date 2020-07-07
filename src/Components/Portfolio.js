import React, { Component } from 'react'
import web_page from '../Components/public/image/web_page.png';
import wishes from '../Components/public/image/wishes.png';
import registration from '../Components/public/image/registration.png'
import javascript from '../Components/public/image/javascript.png'
import web_auto from '../Components/public/image/web_auto.png'
import gmail_auto from '../Components/public/image/gmail_auto.png'
import smarthome_UI from '../Components/public/image/smarthome_UI.png'


class Portfolio extends Component {
    render() {
        return (
            
            <section className="projects">
                  <h1 id='Portfolio'>Portfolio</h1>
                  <p>Some of the projects done by me. <br/> Click on photos to redirect to github uploaded files. </p>

                    <div className="container">
                        <a href="https://github.com/pavankumar102/pavankumar102.github.io"><img src={web_page} width="200" height="200" alt="web_page"/><p>Recent profile web page </p></a>
                        <a href="https://github.com/pavankumar102/Gmail-Automation"><img src={gmail_auto } width="200" height="200" alt=" gmail_auto"/><p>Gmail automation using python</p></a>
                        <a href="https://github.com/pavankumar102/Web-automation"><img src={ web_auto}  width="200" height="200" alt=" web_auto"/><p>Web automation using python</p></a>
                        <a href="https://github.com/SmartPracticeschool/llSPS-INT-1356-Smart-Agriculture-system-based-on-IoT"><img src={smarthome_UI} width="200" height="200" alt="smarthome_UI"/><p>IoT Project(Web App)</p></a>
                        
                    </div>

                    <div className="container">
                        <a href="https://github.com/pavankumar102/javascript"><img src={javascript} width="200" height="200" alt="javascript"/><p> Javascript web programs  </p></a>
                        <a href="https://github.com/pavankumar102/simple-registratioin-form-using-jdbc-servlets-sqldatabase"><img src={registration} width="200" height="200" alt="registration"/><p>Simple registration form using jdbc <br/> and Servlets and storing data in SQL database</p></a>
                        <a href="https://github.com/pavankumar102/birthday-wishes-countdown-program-using-javascript-css-html"><img src={wishes} width="200" height="200" alt="Birthday"/><p>Birthday wishes countdown web page </p></a>
                    </div>

                       
            </section>
        )
    }
}

export default Portfolio


