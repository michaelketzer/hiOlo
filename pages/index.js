import React from 'react'
import Head from 'next/head'
import Styled from 'styled-components'
import Hero from '../components/Hero';
import Link from 'next/link'
import {features} from '../assets/data'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';
import {BsArrowRight} from 'react-icons/bs';
import {BiPhoneCall} from 'react-icons/bi';


const Home = () =>{
  return (
    <>
    <Head>
      <title> Bello Ololade | Home </title>
      <meta name="keywords" content="Freelance Web developer website" />
      <meta name="keywords" content="Bello Ololade" />

    </Head>
  <Wrapper>
    <Hero heroImg="./hero.svg"/>
    <article className="quote">
      <h3>Convert More Sales</h3>
      <ImQuotesLeft className="primary icon"/> <quote>Your Website should turn
        <strong> visitors </strong> into <strong> engaged customers! </strong> It's like having a top performing sales rep<strong> 24 hours a day, 7 days a week. </strong>
        <ImQuotesRight className="primary icon"/>
        </quote>
      </article>
    <div>
      <h3><span className="slash">/</span>Features</h3>
      <article className="features">
        {
        features.map(feature =>{
        const {id, title, icon, list} = feature;
          return(
            <article key={id}>
              <h4>{title}</h4>
              <div className="feature">
                <span className="feature-icon">{icon}</span>
                <ul>
                  {
                    list.map(item =>{
                      return <li key={id}>{item}</li>
                    })
                  }
                </ul>
              </div>
            </article>
          )
        })
      }
    <Link className="cta link" href="Services">
    <a>Find Out More about my Services <BsArrowRight className="primary icon"/></a> 
    </Link>
    </article>
    </div>
      <p className="remarks">You've got a cool project on your mind? let's collaborate and create a <strong>powerful product page </strong> for your brand. </p>
    <article className="contact">
      <a href="mailto:belololade2017@gmail.com">
       Drop a mail
       </a>
      <a href="tel:+2348182716135">
       <BiPhoneCall />Schedule a call</a>
      <a href="mailto:belololade2017@gmail.com">
        let's have a chat
       </a>
      <a href="mailto:belololade2017@gmail.com">
       Free Consultation
       </a>
    </article>
  </Wrapper>
  </>
)
}

export default Home

const Wrapper = Styled.main`
margin: 0 auto;
.features, .contact{
width: 100vw;
  padding: 4rem 2rem;
  background: transparent;
  display: grid;
  gap: 1rem;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
}

.quote{
  margin: 2rem 0;
  width: 100vw;
  background: var(--sec-dark-2);
  color: var(--sec-light-2);
  padding: 4rem 2rem;
  text-align: center;
}
quote{
  margin: 2rem;
}
h3, h4, h5{
  text-align: center;
}
.features{
  margin: 2rem 0;
}
.feature{
  display: flex;
  margin: .5rem 0;
  padding: 1rem;
  align-items: center;
  transition: var(--transition);
  border-radius: var(--radius-lg);
}
.feature-icon{
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
  font-size: 1.5rem;
  background: var(--sec-light-3);
  border-radius: var(--radius-lg);
  display: grid;
  place-items: center;
}
.feature ul li{
  margin: .5rem 0;
}
.feature:hover{
  box-shadow: var(--dark-shadow);
}
.link{
  grid-column: span 2;
}
.contact{
  width: 100vw;
  grid-template-columns: repeat(4, 1fr);
}
.contact a{
  background: var(--sec-light-3);
  border-radius: var(--radius);
  padding: 2rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  transition: var(--transition);
  cursor: pointer;
}
.contact a:hover{
  background: var(--sec-dark-2);
  color: var(--sec-light-2);
}
.remarks{
  text-align: center;
  font-size: 1rem;
}


@media (max-width: 768px){
  .hero, .features{
    padding: 2rem;
    grid-template-columns:1fr;
  }
  
  .border, .arrow{
    display: none;
  }
  .cta, .icon{
    font-size: 1rem;
  }
  .usp{
    margin: 2rem 0;
  }
  .contact{
    grid-template-columns: repeat(2, 1fr);
    padding: .3rem;
  }
  .link{
  grid-column: span 1;
}

}
`

