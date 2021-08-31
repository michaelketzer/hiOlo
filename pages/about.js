import React from 'react'
import Head from 'next/head'
import Styled from 'styled-components'
import Hero from '../components/Hero';
import personImg from '../assets/images/person.png'
import {stack} from '../assets/data'
import Link from 'next/link'
import {BsArrowRight} from 'react-icons/bs';



const About = () =>{
  return (
    <>
    <Head>
      <title> Bello Ololade | Home </title>
      <meta name="keywords" content="Freelance Web developer website" />
      <meta name="keywords" content="Bello Ololade" />
    </Head>
    <Wrapper>
      <Hero heroImg={personImg}/>
      <article className="container">
      <h3><span className="slash">/</span>About Me</h3>
        <p>
          My name is <strong>Bello Ololade. </strong> I'm a Developer and UI/UX expert with 3 years experience... During which i've worked with lots of brand and also helped them achieve thier ultimate goal on the web.
        </p>
        <p>
          I've also worked with teams on open sourced projects by contribution, so i work well with teams. Good communication skill is also part of the package. Where we analyse <strong>what </strong> you want, <strong>how </strong>you want it and <strong>when </strong> you want it.
        </p>
        <h3><span className="slash">/</span>My story</h3>
          <p>
            I've always been fascinated with tech...i see a lot of things and always wondered how what works. Sure I've  broken a lot of gadgets in my quest to know what is what 😅 but i think it was all worth it now because now i don't break things anymore.
          </p>
          <p>
            I got into the world of web development while i was a still a student at Olabisi Onabanjo University. Started with HTML back then, Now i can say I've come a long way from those days, gotten better actually.
            With the latest technologies i now build fast-loading, Server-side rendering Websites with great UI/UX. My ability with these technologies is what makes me the better choice if you need a Good converting product page/ landing page for your business/start up .
          </p>
          <Link className="cta link" href="Services">
          <a className="cta link">Find Out More about my Services <BsArrowRight className="primary arrow"/> </a>
          </Link>
        <h3><span className="slash">/</span>Tech Stack </h3>
      <article className="stacks">
        {
          stack.map(item => {
            const {id, text, icon} = item
            return(
              <article key={id} className="stack">
                <i className="icon">{icon}</i>
                <h4>{text}</h4>
              </article>
            )
          })
        }  
      </article>
      <p>and other libraries or frameworks</p>
      <Link href="Contact">
      <a className="cta link"> Let's Get started<BsArrowRight className="primary arrow"/> </a>
      </Link>
      </article>
    </Wrapper>
    </>
  )
}
export default About
const Wrapper = Styled.main`
margin: 0 auto;
width: 100vw;
  .container{
  padding: 2rem;
  }
  h3{
    text-align: center;
    margin: 2rem 0;
  }
  p{
    font-size: 1rem;
    text-align: justify;
    line-height: 2;
  }
  .stacks{
    display: flex;
    overflow: scroll;
    
  }
  .stack{
    padding: 2rem;
    margin: 1rem;
    border-radius: var(--radius-lg);
    box-shadow: var(--light-shadow);
    text-align: center;
    transition: var(--transition);
  }
  .stack:hover{
    background: var(--sec-dark-2);
    color: var(--sec-light-2);
  }
  .cta{
    font-size: 1.3rem;
  }
@media (min-width:768px){
  .container{
    margin: 3rem 2rem;
  }
  .stacks{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  
}
`