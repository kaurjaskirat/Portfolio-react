import React from 'react';
import './Contact.css';
import {HiMail } from "react-icons/hi";


const Contact = () => {
    return(
        <div >
        <hr style={{fontWeight:"bold"}}></hr>
        <div style={{width:"100%",padding:"50px",backgroundColor:"rgb(27, 16, 74)",marginBottom:"70%"}} className='Contact' id="contact">
            <h1 style={{color:"white",marginLeft:"40%"}} className="bo">CONTACT ME</h1>
            </div>
            <div>
            <h1 style={{marginLeft:"10%",marginTop:"-60%",marginBottom:"70%"}}>Let's chat.</h1>
            <h1 style={{marginLeft:"10%",marginTop:"-70%",marginBottom:"70%"}}>Tell me about your projects</h1>
            <p style={{marginLeft:"10%",marginTop:"-68%",marginBottom:"70%",fontWeight:"bold"}}>Let's create something together</p>
            <h4 style={{marginLeft:"20%",marginTop:"-68%",marginBottom:"70%"}}>Mail me at</h4>
            <p style={{marginLeft:"20%",marginTop:"-70%",marginBottom:"40%",color:"purple",fontWeight:"bold"}}>jaskirat2357@gmail.com</p>
            <div style={{marginLeft:"15%",marginTop:"-43%",marginBottom:"80%",fontSize:"200%",backgroundColor:"white",width:"4%",jusifyContent:"center",boxShadow:"0 0 3px 2px rgba(14, 13, 16, 0.5)",textAlign:"center"}} className='bd' ><HiMail/></div>

   <div>
    
   <form className='contact__form'>
                    <div className='contact__form-div'>
                      <h2 style={{color:"black"}}>Send Me Message!!</h2>
                        <label className='contact__form-tag'>Name</label>
                        <input type='text' name='name' className='contact__form-input' placeholder='Enter your name' />
                    </div>
                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Mail</label>
                        <input type='email' name='email' className='contact__form-input' placeholder='Enter your email' />
                    </div>
                    <div className='contact_form-div contact_form-area'>
                        <label className='contact__form-tag'>Projects</label>
                        <textarea name='project' cols='10' rows='10' className='contact__form-input1' placeholder='Enter your project' />
                    </div>
                   
                        <button style={{   padding:"15px 0 15px 0",borderRadius:"0.75rem",marginLeft:"35%",marginTop:"5%",border: "2px solid rgba(0,0,0,0.3)",width:"30%",fontSize:"90%",backgroundColor:"rgb(27, 16, 74)",color:"white"}}>Send Message</button>
                </form>
                </div>
   </div>
        
        </div>
  
        
       
        
    )
}
export default Contact;