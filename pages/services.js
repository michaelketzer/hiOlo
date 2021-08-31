import React from 'react'
import Styled from 'styled-components'
import {services} from '../assets/data';
import {BsArrowDown} from 'react-icons/bs';
import {RiArrowRightCircleLine} from 'react-icons/ri';
import Link from 'next/link'



const Services = () =>{
  return (
    <Wrapper>
      <h1><span className="slash">/</span>Services</h1>
      <div className="grid">
        <h4>What i do<i className="primary"><BsArrowDown /></i></h4>
        <Link href="Contact">
          <a className="cta">Book a Schedule call <i className="primary"><RiArrowRightCircleLine/></i> </a>
          </Link>
      </div>
      <article className="services grid">
        {
          services.map(service =>{
            const {id, title, icon, desc} = service;
            return (<div className="service" key={id}>
              <i className="icon primary">{icon}</i>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
            )
          })
        }
      </article>
      <h1><span className="slash">/</span>Experience</h1>
        <h1>Loading ...</h1>
    </Wrapper>
  )
}
export default Services

const Wrapper = Styled.main`
margin: 0 auto;
padding: 2rem;
h1{
  text-align: center;
  margin-bottom: 2rem;
}
.services{
  gap: 1rem;
  width: 100%;
}
.service{
  padding: 2rem;
  margin-top: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--light-shadow);
  text-align: center;
  transition: var(--transition);
}
.service:hover{
  background: var(--sec-dark-2);
  color: var(--sec-light-2);
}
p{
  margin: 1rem 0;
  font-size: 1rem;
}


@media (max-width: 768px){
  .services{
    grid-template-columns: 1fr;
  }
  p{
  text-align: justify;
  }
}
`