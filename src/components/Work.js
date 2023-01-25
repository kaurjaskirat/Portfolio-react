import React from 'react';
import './Work.css';
// import photo from './images/photo.png';


const Work = () => {
    return(
        <div style={{marginBottom:"10%"}} className='Work'>
            <hr style={{fontWeight:"bold"}}></hr>
    

            <h1 style={{marginLeft:"50%",color:"rgb(27, 16, 74)",textDecoration:"underline"}}>WORK</h1>
            <div style={{ width:"22%",padding:"100px 0 100px 0",marginTop:"5%",marginLeft:"12%",color:"black",fontWeight:"bold",fontSize:"200%",justifyContent:"center",textAlign:"center"}} className='photo'>PHOTOGALLERY
            <div></div>
            <button className="btnn">Code</button>
            <button className="btnnn">Demo</button>
            </div>
            <div style={{width:"22%",padding:"100px 2px 100px 0",marginTop:"-20%",marginLeft:"41%",color:"black",fontWeight:"bold",fontSize:"200%",justifyContent:"center",textAlign:"center"}} className='yt'>YOUTUBE CLONE
            <div></div>
            <button className="btnn">Code</button>
            <button className="btnnn">Demo</button>
            </div>
            <div style={{width:"22%",padding:"100px 2px 100px 0",marginTop:"-19%",marginLeft:"70%",color:"black",fontWeight:"bold",fontSize:"200%",justifyContent:"center",textAlign:"center"}} className='wt'>WEATHER APP
            <div></div>
            <button className="btnn">Code</button>
            <button className="btnnn">Demo</button>
            </div>

            {/* <div style={{ width:"22%",padding:"100px 0 150px 0",marginTop:"5%",marginLeft:"12%",color:"black",fontWeight:"bold",fontSize:"200%",justifyContent:"center",textAlign:"center"}} className='photo'>PHOTOGALLERY</div>
            <div style={{width:"22%",padding:"120px 2px 150px 0",marginTop:"-20%",marginLeft:"41%",color:"black",fontWeight:"bold",fontSize:"200%",justifyContent:"center",textAlign:"center"}} className='yt'>YOUTUBE CLONE</div>
            <div style={{width:"22%",padding:"120px 2px 150px 0",marginTop:"-21%",marginLeft:"70%",color:"black",fontWeight:"bold",fontSize:"200%",justifyContent:"center",textAlign:"center"}} className='wt'>WEATHER APP</div> */}

            {/* <div style={{backgroundColor:"red",width:"12%",padding:"70px 0 70px 0",marginTop:"5%",marginLeft:"25%"}}>hi4</div> */}
            {/* <div style={{backgroundColor:"red",width:"12%",padding:"70px 0 70px 0",marginTop:"-27%",marginLeft:"65%"}}>5</div> */}
            {/* <div style={{backgroundColor:"red",width:"12%",padding:"70px 0 70px 0",marginTop:"5%",marginLeft:"65%"}}>hi</div> */}
        </div>
    )

}

export default Work;