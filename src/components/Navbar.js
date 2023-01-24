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
                <li className='items'>About</li>
                <li className='items'>Skills</li>
                <li className='items'>Work</li>
                <li className='items'>Contact</li>
                
            </ul>)}
            <button onClick={toggleNav} className='btn'>Btn</button>
       
        </nav>
        </div>
  );

}

export default Navbar;
