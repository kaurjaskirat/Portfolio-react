import React from 'react';
import './About.css';
import {FaLinkedin,FaGithubSquare,FaInstagramSquare,FaMailBulk } from "react-icons/fa";
import about1 from './images/about1.png';


const About = () => {
    return(
        <div className='About' id='about'>
      <hr style={{fontWeight:"bold"}}></hr>

            <h1 style={{color:"rgb(27, 16, 74)",marginLeft:"40%",fontSize:"280%",textDecoration:"underline"}}>About Me</h1>
            <h3 style={{color:"rgb(27, 16, 74)",marginLeft:"40%",fontSize:"150%",marginTop:"5%"}}>Hi! I'm Jaskirat,nice to meet you.Please take a look around</h3>
  
 <p style={{color:"rgb(27, 16, 74)",marginLeft:"40%",fontSize:"150%",marginTop:"2%",}}>I am passionate about building excellent software that improves the lives of those around me.I specialize in creating websites for clients ranging from individuals and small-business all the way to large enterprise cooperations.</p>
        <div className='icons'>
        <a href = "https://www.linkedin.com/in/jaskirat-kaur-054930222"> <FaLinkedin style={{color:"blue",fontSize:"260%"}}/></a>
        <a href ="https://github.com/kaurjaskirat"> <FaGithubSquare style={{color:"black",fontSize:"260%",marginLeft:""}}/></a>
     <FaInstagramSquare style={{color:"rgba(246, 43, 215, 0.941)",fontSize:"260%",marginLeft:""}}/>
     <FaMailBulk style={{color:"black",fontSize:"300%",marginLeft:""}}/>
    </div>
    
    {/* <div className='pi'>
        <h3>Personal Informations</h3>
        <h4 style={{fontSize:"100%",marginLeft:"3%"}}>Name:</h4><p style={{marginTop:"-5%",marginLeft:"10%",fontSize:"130%"}}>Jaskirat Kaur Chhabra</p>
        <h4 style={{fontSize:"100%",marginLeft:"3%"}}>DOB:</h4><p style={{marginTop:"-5%",marginLeft:"10%",fontSize:"130%"}}>23-10-2002</p>
        <h4 style={{fontSize:"100%",marginLeft:"3%"}}>Experience:</h4><p style={{marginTop:"-5%",marginLeft:"13%",fontSize:"130%"}}>Fresher</p>
        <h4 style={{fontSize:"100%",marginLeft:"3%"}}>Address:</h4><p style={{marginTop:"-5%",marginLeft:"11%",fontSize:"130%"}}>Mardanpur,Jaunpur</p>
    </div> */}
    <button className='btn1'>Discover Me</button>
  <button className='btn2'>Download CV</button>

  <div className='About1'>
    <img src={about1} alt="this is car image" /></div>
    </div>
    
    )
}

export default About;