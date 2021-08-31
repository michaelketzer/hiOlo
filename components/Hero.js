import React from 'react';
import Styled from 'styled-components';
import {FaArrowRight, FaArrowCircleRight} from 'react-icons/fa';
import {BsArrowRight, BsArrowUpRight} from 'react-icons/bs';
import Link from 'next/link'
import Image from 'next/image'


const Hero = ({heroImg}) =>{
  return(
    <Wrapper> 
    <article className="hero-text"> 
      <h2>Hy, There!</h2>
      <h2>I'm Ololade</h2>
      <p className="usp">I help <span className="primary">brands</span> build beautiful <span className="primary">landing pages</span> that convert more!</p>
      <Link href="/contact">
      <a className="btn"> Get in Touch!</a>
      </Link>
    </article>
    <article className="hero-img">
      <img src={heroImg} alt="landing page" height="400" width="100"/>
    </article>
    </Wrapper>
  )
}

export default Hero;

const Wrapper = Styled.div`
  position: relative;
  width: 100vw;
  padding: 1rem 6rem;
  background: transparent;
  display: grid;
  gap: 2rem;
  place-items: center;
  overflow: hidden;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  
.hero-text h2{
  font-size: 4rem;
  letter-spacing: 2px;
  font-family: ubuntu, sans-serif;
  font-weight: 900;
}
.hero-img img{
  height: 30rem;
  border-radius: var(--radius-lg);
}
.usp{
  font-size: 1rem;
  margin: 2rem 0;
}
.btn{
  text-align: center;
}

@media (max-width: 768px){
    padding: 3rem 2rem;
    grid-template-columns: 1fr;
  .hero-text{
    text-align: center;
    padding: 3rem 1.5rem;
    
  }
  .hero-text h2{
    font-size: 2.3rem;
  }
  .border{
    display: none;
  }
  .cta, .icon{
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  .usp{
    margin: 1rem 0;
  }
  .hero-img img{
  height: 90%;
  width: 100%;
  border-radius: var(--radius-lg);
}

}
`