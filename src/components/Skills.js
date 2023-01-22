import React from 'react';
import './Skills.css';
import {FaLinkedin,FaGithubSquare,FaInstagramSquare,FaMailBulk } from "react-icons/fa";
import{TbBrandJavascript} from 'react-icons/tb'

const Skills = () => {
    return(
        <div className="Skills">
            <h2 style={{color:"rgb(27, 16, 74)",marginLeft:"40%",fontSize:"280%",textDecoration:"underline",textDecorationColor: "red"}}> Skills</h2>
        <div className='icons'>
        <FaLinkedin style={{color:"blue",fontSize:"260%"}}/>
         <FaGithubSquare style={{color:"black",fontSize:"260%",marginLeft:""}}/>
         <FaInstagramSquare style={{color:"rgba(246, 43, 215, 0.941)",fontSize:"260%",marginLeft:""}}/>
         <FaMailBulk style={{color:"black",fontSize:"300%",marginLeft:""}}/>
        </div>

        <TbBrandJavascript/>
        </div>
    )
}
export default Skills;