import React, { Component } from 'react'
import contact from '../Components/public/image/contactlogo.png';
import mailme from '../Components/public/image/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">
                   

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
               
                <h1> <strong>Ping me up to collaborate </strong></h1>
                <a href="https://www.facebook.com/profile.php?id=100008653065191">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite',"font-size":'36px'}} ></span>
                        </a>
                        <a href="https://twitter.com/GPavanK34240959" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite',"font-size":'36px'}}></span>
                        </a>
                        <a href="https://github.com/pavankumar102">
                                <span className="icon fa fa-github" style={{color:'antiquewhite',"font-size":'36px'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com/in/pavan-kumar-a20b491a6/">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite',"font-size":'36px'}}></span>
                        </a>
                        <a href="https://www.instagram.com/pavan_kumar102/?hl=en">
                                <span className="icon fa fa-instagram"  style={{color:'antiquewhite',"font-size":'36px'}}></span>
                        </a>  
                        
                <h4>Mail : pavan10283@gmail.com , <br/> pk820393@gmail.com</h4>
                       <a href="tel:7036715931">Click here to Contact- 7036715931</a> <br/>
                       
                       <a href="tel:9182520311">Click here to Contact - 9182520311</a> <br/>
                <a id="mail"href="mailto:pavan10283@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>                
                
                <p class="footer">© 2020 Pavan Kumar.G </p>
                
            </section>
        )
    }
}

export default Contact
