import Card from "./CardItem"
import './Cards.css'
import React from 'react'




function Cards() {
    return (
        <div className = "container-fluid d-flex justify-content-center">
            <p className= "card-desc"> Click the Icons for source code.</p>
            <div className="row">
                <div className="col-md-4">
                    <Card src = 'images/testimgTwo.jpeg' 
                    title = "Portfolio Website" 
                    text = "This website your viewing this on built with react.js and bootstrap, hosted on my Github pages."
                    url = "https://github.com/BLara408/Portfolio-Website">
                    
                    </Card>
                    
                   
                </div>

                <div className="col-md-4">
                    
                    <Card 
                    src = 'images/python.jpeg' 
                    title = "Python Proxy Script" 
                    text = 'Python script for a proxy server, opens and binds to a socket and sends data over http.'
                    url = "https://github.com/BLara408/Python-Proxy-Server">

                    </Card>
                  
                </div>
                <div className="col-md-4">
                    <Card 
                    src =  'images/matrix.jpeg'
                     title = "Matrix calculator" 
                     text = 'OOP structure matrix calculator built in C++ comes with basic arethmetic operations. '
                     url = "https://github.com/BLara408/Matrix-Calculator"
                     
                     ></Card>
                   
                </div>
            </div>

        </div>
    )
}

export default Cards
