import React from 'react';
import jass6 from './images/jass6.jpeg';
import {FaLinkedin,FaGithubSquare,FaInstagramSquare,FaMailBulk } from "react-icons/fa";


const Home = () => {
return(
    <div className='Home'>
        <p style={{color:"red",fontSize:"160%"}}>Hi,my name is</p>
    <h1 style={{fontSize:"360%"}}>Jaskirat Kaur Chhabra</h1>
    <h3 >I'm a Developer</h3>
    <p style={{color:"black",fontSize:"160%",fontStyle:'Italic'}}> I like to make new and responsive websites that are user friendly... </p>
    <button  className="but"><a href ="#work">View Work →</a></button>
    <div className='Home1'>
    <img src={jass6} alt="this is car image" /></div>
    <div className='icons'>
    <a href = "https://www.linkedin.com/in/jaskirat-kaur-054930222"><FaLinkedin style={{color:"blue",fontSize:"260%",marginLeft:"-25%"}}/></a>
      <a href ="https://github.com/kaurjaskirat"><FaGithubSquare style={{color:"black",fontSize:"260%",marginLeft:"-25%"}}/></a>
     <FaInstagramSquare style={{color:"rgba(246, 43, 215, 0.941)",fontSize:"260%",marginLeft:"-25%"}}/>
     <FaMailBulk style={{color:"black",fontSize:"300%",marginLeft:"-25%"}}/>
    </div>
    </div>
)
}
export default Home;