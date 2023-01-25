import React,{useState,useEffect} from 'react';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  const[screenWidth,setScreenWidth]=useState(window.innerWidth)
  const toggleNav=()=>{
    setToggleMenu(!toggleMenu)
  }
useEffect(()=>{
const changeWidth=()=>{
  setScreenWidth(window.innerWidth)
}
window.addEventListener('resize',changeWidth)


},[])
  return (
    <div className='container'>
        <nav>
          {(toggleMenu || screenWidth>375) && (
            <ul className='list'>
                <li className='items'>Home</li>
                <li className='items'><a href ="#about">About</a></li>
                <li className='items'><a href ="#skills">Skills</a></li>
                <li className='items'><a href ="#work">Work</a></li>
                <li className='items'><a href ="#contact">Contact</a></li>
                
            </ul>)}
            <button onClick={toggleNav} className='btn'>Btn</button>
       
        </nav>
        </div>
  );

}

export default Navbar;
