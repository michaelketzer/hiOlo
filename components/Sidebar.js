import React from 'react'
import {useGlobalContext} from '../assets/Context'
import Link from 'next/link'
import {social, links} from '../assets/data'
import person from '../assets/images/undraw_avatar.png'
import Styled from 'styled-components'


const Sidebar = () => {
const {isSidebarOpen, toggleSidebar} = useGlobalContext();

  return (
  <SideStyle>  
  <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
    <div className="container">
    <div className="profile">
      <img src="undraw_avatar.png" alt="me" className="profile-picture" />
      <h2>Bello Ololade</h2>
    </div>
    <nav className="sidebar-nav"> 
    <ul className="sidebar-nav-list">
    {links.map(link=>{
      const {id, url, text, icon} = link
      return(
        <li key={id}>
          <Link href={url} onClick={toggleSidebar}>
              <a className="sidebar-links">{icon} {text}</a>
          </Link>
        </li>
      )
    }) }
    </ul>
    </nav>
    <ul className="social-icons">
    {social.map(link=>{
      const {id, url, icon} = link
      return(
        <li key={id}>
          <a href={url}>
          {icon}
          </a>
        </li>
      )
    }) }
    </ul>
  </div>
  </aside>
  </SideStyle>
  )
}

export default Sidebar

const SideStyle = Styled.aside`

.sidebar{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--sec-light-2);
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1rem;
  padding-top: 9rem;
  box-shadow: var(--light-shadow);
  z-index: 10;
  transform: translate(-100%);
  transition: all .4s linear;
  overflow: hidden;
 }
 
.close-menu,
.profile,
.sidebar-nav,
.social-icons{
  display: flex;
}
.close-menu button{
  background: transparent;
  border: transparent;
  font-size: 1.2rem;
  color: var(--sec-main);
  outline: none;
  cursor: pointer;
  padding-right: 1rem;
  margin-bottom: 2rem;
}
.profile-picture{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.profile h2{
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem .5rem;
  color: var(--pry-dark);
}
.sidebar-nav{
  flex-direction: column;
}
.sidebar-links{
  background: var(--sec-light-1);
  padding: .5rem;
  border-radius: 1rem;
  margin: 1rem 0;
  font-size: 1.2rem;
  color: var(--sec-dark-3);
  font-weight: 500;
  cursor: pointer;
  display: block;
  text-transform: capitalize;
  letter-spacing: .1rem;
  width: 50%;
}
.sidebar-links:hover {
   background: var(--sec-dark-3); 
   color: var(--sec-light-3);
}
.social-icons a {
  font-size: 1rem;
  margin: 1rem .5rem;
  color: var(--sec-dark-1);
  display: grid;
  place-items: center;
  padding: .2rem;
  cursor: pointer;
  border: 2px solid var(--pry-dark);
  border-radius: 100%;
  transition: var(--transition);
}
.social-icons a:hover {
  color: var(--pry-dark-2);
  font-size: 1.7rem;
}
.sidebar-links i{
  margin-right: 1rem;
  font-size: 1.3rem;
}
@media only screen and (min-width: 600px) {
  .sidebar{
    padding-top: 20vh;
  }
  .sidebar-links{
    width: 60%;
  }
  .close-menu,
  .profile,
  .sidebar-nav,
  .social-icons{
    margin-bottom: 2rem;
  }
}

.show-sidebar{
  transform: translate(0);
}

`