import React, {useState} from 'react'
import Styled from 'styled-components'
import {social, quickLinks} from '../assets/data'
import Link from 'next/link'
import {TiLocationOutline} from 'react-icons/ti';
import {BiPhoneCall} from 'react-icons/bi';

import {AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineMail} from 'react-icons/ai';



const Footer = () =>{
  const [emailInput, setEmailInput] = useState('');
  const [openLink, setOpenLink] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  
  const handleSubmit = e => {
    e.preventDefault();
  }
  return(
    <Wrapper>
      <form className="newsletter" onSubmit={handleSubmit}>
        <h1>newsletter</h1>
        <input type="text" value={emailInput} onChange={e=>{
          setEmailInput(e.target.value)
        }} placeholder="Enter your email..."/>
        <button type="submit">Subscribe</button>
      </form>
      <span className="border" />
      <article className="links"> 
        <h4><span className="primary">OLO</span>LADE.</h4>
        <p>I am a Freelance Frontend developer and UI UX designer, let's connect!</p>
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
        <article className="quick-link">
         <div>
            <h4>Quick Links</h4>
            <i className="open-btn" type="button" onClick={()=>{
              setOpenLink(!openLink)
            }}>
            {openLink ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
            </i>
          </div>
          <ul className={`${openLink ? 'quick-links show-links' : 'quick-links'}`}>
        {quickLinks.map(link=>{
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
        </article>
        <article className="quick-link">
         <div>
            <h4>Contact</h4>
            <i className="open-btn" type="button" onClick={()=>{
              setOpenContact(!openContact)
            }}>
            {openContact ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
            </i>
          </div>
          <ul className={`${openContact ? 'quick-links show-links' : 'quick-links'}`}>
            <li><TiLocationOutline className="icon"/>
            Ijebu Igbo, Ogun State, Nigeria.</li>
           <li><BiPhoneCall className="icon"/>
           <a href="tel:+2348182716135">
           +234-818-272-6135</a>
           </li>
          <li><AiOutlineMail className="icon"/>
          <a href="mailto:belololade2017@gmail.com">
           belololade2017@gmail</a>
           </li>
          </ul>
        </article>
      </article>
      <article className="copyright">
      <p><span className="primary">OLO</span>LADE. &copy; {new Date().getFullYear()} All rights Reserved</p>
      </article>
    </Wrapper>
  )
}

export default Footer


const Wrapper = Styled.footer`
background: var(--sec-dark-2);
display: grid;
margin-top: auto;
width: 100%;
padding: 2rem;
.newsletter{
  width: 100%;
  display: grid;
  place-items: center;
  color: #fff;
  border-bottom: .5px solid var(--sec-light-2);
  padding: 2rem;
}
.newsletter h1{
  text-transform: uppercase;
  font-family: ubuntu;
  font-weight: 500;
}
.newsletter input{
  width: 80%;
  background: transparent;
  border: 1px solid var(--pry-dark);
  border-radius: 2rem;
  padding: 1rem;
  font-size: 1.2rem;
  color: #a1a1a1;
  outline: none;
  cursor: pointer;
  margin: 1rem;
}
.newsletter button{
  color: var(--pry-dark);
  background: transparent;
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: 4px double var(--pry-dark);
  outline: none;
  cursor: pointer;
  font-weight: 500px;
  font-size: 1rem;
  transition: var(--transition);
}

.links{
  border-bottom: .5px solid var(--sec-light-2);
  padding: 1rem;
  color: var(--sec-light-3);
}
.links p{
  font-size: .7rem;
}
.social-icons{
  display: flex;
}
.social-icons a {
  font-size: 1.5rem;
  margin: 1rem .5rem;
  color: var(--sec-light-2);
  display: grid;
  place-items: center;
  padding: .5rem;
  cursor: pointer;
  border: 2px solid var(--pry-dark);
  border-radius: 100%;
  transition: var(--transition);
}
.social-icons a:hover,
.newsletter button:hover{
  color: var(--pry-dark-2);
  border: 2px solid var(--sec-light-2);
}
.quick-link{
  color: #fff;
  margin-top: 1rem;
  display: grid;
}
.quick-link div{
  display: flex;
  justify-content: space-between;
}
.quick-link div{
  font-size: 2rem;
}
.quick-link div i{
  color: #fff;
  border: transparent;
  border-radius: 100%;
  padding: 0 .5rem;
  cursor: pointer;
  outline: none;
}
.quick-links{
  height: 0;
  transition: var(--transition);
  overflow: hidden;
}
.icon{
  margin-right: 1rem;
  font-size: 1rem;
}
.quick-links li a{
  color: var(--sec-light-3);
  font-size: 1.2rem;
  font-weight: 500;
}
.show-links{
  height: 100%;
}
.copyright{
  text-align: center;
  font-size: .7rem;
  color: var(--sec-light-3);
}

@media (max-width: 768px){
  width: 100vw;
  max-width: 100%;
  padding: 0;
}
.newsletter input{
  width: 100%;
}
.newsletter h1{
  font-size: 2.5rem;
}
.social-icons a{
  font-size: 1rem;
}
.quick-link div h4{
  font-size: 1rem;
}

`