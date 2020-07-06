import React, { Component } from 'react'
import logo from '../Components/public/image/pavankumar.jpg';
import cse from '../Components/public/image/yt1.png';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="190" height="190" alt="profilepic"/></a>
                    <h1> Hi!! I'm Pavan Kumar </h1>
                    <p id="paragarph1">A Front-end programmer <br/>
                    </p>
                    <a id="logo" href="https://www.youtube.com/channel/UCe-YtkVsXR0qNMs9xOSuJnQ/videos?view_as=subscriber" ><img src={cse} width="50" height="50" alt="cselogo"/></a> 
                    
            </section>
        )
    }
}

export default Banner


