import React from 'react';
import './Skills.css';
import {FaLinkedin,FaGithubSquare,FaInstagramSquare,FaMailBulk,FaHtml5,FaCss3Alt,FaBootstrap,FaReact,FaList } from "react-icons/fa";
import{TbBrandJavascript} from 'react-icons/tb'

const Skills = () => {
    return(
        <div className="Skills" id='skills'>
 <hr style={{fontWeight:"bold"}}></hr>
            <h2 style={{color:"rgb(27, 16, 74)",marginLeft:"40%",fontSize:"280%",textDecoration:"underline"}}> Skills</h2>
            <p style={{marginLeft:"40%",color:"rgb(27, 16, 74)",marginTop:"-2%"}}>My Technical Level</p>
        <div className='icons'>
        <a href = "https://www.linkedin.com/in/jaskirat-kaur-054930222"> <FaLinkedin style={{color:"blue",fontSize:"260%"}}/></a>
        <a href ="https://github.com/kaurjaskirat"><FaGithubSquare style={{color:"black",fontSize:"260%",marginLeft:""}}/></a>
         <FaInstagramSquare style={{color:"rgba(246, 43, 215, 0.941)",fontSize:"260%",marginLeft:""}}/>
         <FaMailBulk style={{color:"black",fontSize:"300%",marginLeft:""}}/>
        </div>
        <h3 style={{color:"black",marginLeft:"20%",fontSize:"180%",marginTop:"-25%",color:"rgb(27, 16, 74)"}}> ═ ═ Frontend Skills ═ ═ </h3>
        <div  style={{display:"flex"}} className="fs">
        <div style={{marginLeft:"20%",backgroundColor:"white",width:"10%",  boxShadow: "0 0 5px 4px rgba(14, 13, 16, 0.5)",fontSize:"130%"}} className="fs1"> <FaHtml5 style={{fontSize:"260%",marginLeft:"25%",marginTop:"10%"}}/> <p style={{justifyContent:"center",alignItems:"center",marginLeft:"20%"}}>HTML <br></br>Advanced</p></div>
        <div style={{ marginLeft:"5%",backgroundColor:"white",width:"10%",  boxShadow: "0 0 5px 4px rgba(14, 13, 16, 0.5)",fontSize:"130%"}} className="fs2"> <FaCss3Alt  style={{fontSize:"260%",marginLeft:"20%",marginTop:"10%"}}/> <p style={{justifyContent:"center",alignItems:"center",marginLeft:"15%"}}>CSS <br></br>Intermediate</p></div>
        <div style={{marginLeft:"4%",backgroundColor:"white",width:"10%",  boxShadow: "0 0 5px 4px rgba(14, 13, 16, 0.5)",fontSize:"130%"}}className="fs3"> <FaBootstrap style={{fontSize:"260%",marginLeft:"22%",marginTop:"10%"}}/> <p style={{justifyContent:"center",alignItems:"center",marginLeft:"20%"}}>BOOTSTRAP <br></br>Basics</p></div>
        <div style={{marginLeft:"4%",backgroundColor:"white",width:"10%",  boxShadow: "0 0 5px 4px rgba(14, 13, 16, 0.5)",fontSize:"130%"}}className="fs4">   <FaReact style={{fontSize:"260%",marginLeft:"22%",marginTop:"10%"}}/> <p style={{justifyContent:"center",alignItems:"center",marginLeft:"15%"}}>REACT <br></br>Intermediate</p></div>
        <div style={{marginLeft:"4%",backgroundColor:"white",width:"10%",  boxShadow: "0 0 5px 4px rgba(14, 13, 16, 0.5)",fontSize:"130%"}} className="fs5">  <TbBrandJavascript style={{fontSize:"260%",marginLeft:"22%",marginTop:"10%"}}/> <p style={{justifyContent:"center",alignItems:"center",marginLeft:"15%"}}>JAVASCRIPT <br></br>Intermediate</p></div>
        </div>
        <h3  style={{color:"black",marginLeft:"20%",fontSize:"180%",marginTop:"2%",color:"rgb(27, 16, 74)"}}> ═ ═ Languages ═ ═ </h3>
        <div style={{display:"flex"}}  className="fs">
        <div style={{marginLeft:"20%",backgroundColor:"white",width:"10%",  boxShadow: "0 0 5px 4px rgba(14, 13, 16, 0.5)",fontSize:"130%"}} className="fs6"> <FaList style={{fontSize:"260%",marginLeft:"25%",marginTop:"10%"}}/> <p style={{justifyContent:"center",alignItems:"center",marginLeft:"20%"}}>C <br></br>Advanced</p></div>
        <div style={{marginLeft:"5%",backgroundColor:"white",width:"10%",  boxShadow: "0 0 5px 4px rgba(14, 13, 16, 0.5)",fontSize:"130%"}} className="fs7"> <FaList style={{fontSize:"260%",marginLeft:"25%",marginTop:"10%"}}/> <p style={{justifyContent:"center",alignItems:"center",marginLeft:"10%"}}>C++ <br></br>Intermediate</p></div>
        <div style={{marginLeft:"4%",backgroundColor:"white",width:"10%",  boxShadow: "0 0 5px 4px rgba(14, 13, 16, 0.5)",fontSize:"130%"}} className="fs8"> <FaList style={{fontSize:"260%",marginLeft:"25%",marginTop:"10%"}}/> <p style={{justifyContent:"center",alignItems:"center",marginLeft:"10%"}}>PYTHON <br></br>Intermediate</p></div>
    
        </div>
        
        </div>
    )
}
export default Skills;