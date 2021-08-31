import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Link from 'next/link'
import Styled, {css} from 'styled-components'
import {useGlobalContext} from '../assets/Context'
import {CgMenuRight, CgClose} from 'react-icons/cg'
import {links} from '../assets/data'

const Navbar = () => {
const {isSidebarOpen, toggleSidebar} = useGlobalContext();
  
  return (
    <>
    <Wrapper>
    <div >
      <Link href="/">
        <a className="brand"><span className="primary">OLO</span>LADE.</a>
      </Link>
    </div>
    <button className="menu-btn" onClick={toggleSidebar}>
    {isSidebarOpen ? <CgClose /> : <CgMenuRight /> }
    </button>
    <ul className="navbar">
    {links.map(link=>{
      const {id, url, text} = link
      return(
        <li key={id}>
          <Link href={url}>
             {text}
          </Link>
        </li>
      )
    }) }
    </ul>
  </Wrapper>
  <Sidebar />
  </>
  )
}

export default Navbar


const Wrapper = Styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .3rem 3rem;
  background: transparent;
  border-bottom: 1px solid var(--sec-main);
  background: var(--sec-dark-2);
  width: 100vw;
  color: #fff;
  max-height: 4rem;
  z-index: 200;
 .navbar{
  display: flex;
  align-items: center;
}
.navbar li a{
  color: #fff;
  font-size: 1.5rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  display: block;
  padding:0 0.5rem;
  transition: var(--transition);
  position: relative;
  text-align: center;
}

.navbar li a::before,
.navbar li a::after{
  content: "";
  position: absolute;
  bottom: -10px;
  width: 0px;
  height: 5px;
  margin: 5px 0 0;
  transition: var(--transition);
  opacity: 0;
  background-color:  var(--pry-dark);
}
.navbar li a:before{
  left: 40%;
}
.navbar li a:after{
  right: 40%;
}

.navbar li a:hover:before,
.navbar li a:hover:after{
  width: 40%;
  cursor: pointer;
  opacity: 1;
}
.brand{
  font-size: 2rem;
  font-family: 'Segoe UI', Roboto, Sans-Serif;
  padding-top: .4rem;
  color: var(--sec-light-2);
  font-weight: 900;
}
.menu-btn{
  display: none;
}

@media (max-width: 768px){
  padding: 1rem;
  .menu-btn{
    display: flex;
    background: transparent;
    border: transparent;
    outline: none;
    font-size: 2rem;
    color: var(--sec-dark);
    transition: var(--transition);
  }
  .navbar{
    display: none;
  }
  .brand{
    font-size: 1.5rem;
  }
}
`