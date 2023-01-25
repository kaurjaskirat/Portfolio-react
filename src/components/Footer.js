import React from 'react';
import './Footer.css';
import {FaLinkedin,FaGithubSquare,FaInstagramSquare,FaMailBulk,FaTelegramPlane ,FaFacebook} from "react-icons/fa";
const Footer = () =>{
    return(
        <div style={{backgroundColor:"rgba(20, 20, 21, 0.941)",width:"100%",paddingTop:"50px",marginTop:"10%", }}>
             <div className='icons'>
             <a href = "https://www.linkedin.com/in/jaskirat-kaur-054930222"> <FaLinkedin style={{color:"white",fontSize:"200%",marginLeft:"35%"}} className='icons1'/></a>
    <a href ="https://github.com/kaurjaskirat"><FaGithubSquare style={{color:"white",fontSize:"200%",marginLeft:"3%"}} className='icons2'/></a>
     <FaInstagramSquare style={{color:"white",fontSize:"200%",marginLeft:"3%"}} className='icons3'/>
     <FaMailBulk style={{color:"white",fontSize:"250%",marginLeft:"3%"}} className='icons4'/>
     <FaTelegramPlane style={{color:"white",fontSize:"200%",marginLeft:"3%"}}className='icons5'/>
     <FaFacebook style={{color:"white",fontSize:"200%",marginLeft:"3%"}}className='icons6'/>
     </div>
    
        </div>
    )
}

export default Footer;