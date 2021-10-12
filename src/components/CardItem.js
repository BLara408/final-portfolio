import './Cards.css'
import React from 'react';
import {SocialIcon} from "react-social-icons"
const Card = props=>{
return(

    <div className= "card text-center">
        <div className="fit-screen">
            <img 
            src={props.src} 
            alt=" 1" 
            className = "card-img-top"/>
            <h3 className="card-title ">{props.title}</h3>
            <p className="card-text " >
                {props.text}
            </p>
            <SocialIcon url= {props.url}
                     className="icon-space" 
                     target="blank" 
                     fgColor= "#ffff" 
                     style ={{height: 35, width: 35}} />
                
        </div>
        <div className="card-body-border">
          
          
           
            

            
            
      </div>
    </div>

);
}
export default Card;
