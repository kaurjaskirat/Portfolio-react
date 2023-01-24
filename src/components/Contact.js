import React from 'react';
import './Contact.css';
import {HiMail } from "react-icons/hi";


const Contact = () => {
    return(
        <div>
        <hr style={{fontWeight:"bold"}}></hr>
        <div style={{width:"100%",padding:"50px",backgroundColor:"rgb(27, 16, 74)",marginBottom:"70%"}} className='Contact'>
            <h1 style={{color:"white",marginLeft:"40%"}}>CONTACT ME</h1>
            </div>
            <h1 style={{marginLeft:"10%",marginTop:"-60%",marginBottom:"70%"}}>Let's chat.</h1>
            <h1 style={{marginLeft:"10%",marginTop:"-70%",marginBottom:"70%"}}>Tell me about your projects</h1>
            <p style={{marginLeft:"10%",marginTop:"-68%",marginBottom:"70%",fontWeight:"bold"}}>Let's create something together</p>
            <h4 style={{marginLeft:"20%",marginTop:"-68%",marginBottom:"70%"}}>Mail me at</h4>
            <p style={{marginLeft:"20%",marginTop:"-70%",marginBottom:"40%",color:"purple",fontWeight:"bold"}}>jaskirat2357@gmail.com</p>
            <div style={{marginLeft:"15%",marginTop:"-43%",marginBottom:"70%",fontSize:"200%",backgroundColor:"white",width:"4%",jusifyContent:"center",boxShadow:"0 0 3px 2px rgba(14, 13, 16, 0.5)",textAlign:"center"}} ><HiMail/></div>
        <div>
        {/* <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form> */}
        </div>
       
        </div>
    )
}
export default Contact;