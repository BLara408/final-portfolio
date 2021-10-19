import Card from "./CardItem"
import './Cards.css'
import React from 'react'
import matrixPic from "./assets/matrix.jpeg"
import pythonPic from "./assets/python.jpeg"
import portPic from "./assets/testimgTwo.jpeg"




function Cards() {
    return (
        <div className = "container-fluid d-flex justify-content-center">
            <p className= "card-desc"> Click the Icons for source code.</p>
            <div className="row">
                <div className="col-md-4">
                    <Card src = {portPic}
                    title = "Portfolio Website" 
                    text = "The site your vieweing! This website is built with React, styled with bootstrap and hosted on Gihub Pages"
                    url = "https://github.com/BLara408/Portfolio-Website">
                    
                    </Card>
                    
                   
                </div>

                <div className="col-md-4">
                    
                    <Card 
                    src = {pythonPic}
                    title = "Python Proxy Script" 
                    text = 'Python script for a proxy server, opens and binds to a socket and sends data over http.'
                    url = "https://github.com/BLara408/Python-Proxy-Server">

                    </Card>
                  
                </div>
                <div className="col-md-4">
                    <Card 
                    src =  {matrixPic}
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
