import React,{useState} from 'react'
import Styled from 'styled-components';
import contactImg2 from '../assets/images/texting.png'
import {FaMapMarker, FaEnvelope, FaPhone} from 'react-icons/fa';


const Contact = () =>{
    const [emailInput, setEmailInput] = useState('');

  
  
  const handleSubmit= e =>{
    e.preventDefault();
  }
  
  return (
    <Wrapper>
      <article className="contact-form">
      <h1>Let's Talk</h1>
      <p>
      For gig and advertising
      opportunities, Please begin your subject
      with "Gig"
      </p>
       <form onSubmit={handleSubmit} action="http://formspree.io/belololade2017@email.com" method="POST">
          <div className="form-row">
            <label htmlFor="name">your name *</label>
            <input type="text" name="name" id="name" required/>
          </div>
          <div className="form-row">
            <label htmlFor="email">your email *</label>
            <input type="email" name="email" id="email" required/>
          </div>
          <div className="form-row">
            <label htmlFor="message">message *</label>
            <textarea name="message" id="message" required></textarea>
          </div>
          <button type="submit" className="btn block">
            submit
          </button>
        </form>
      </article>
      <article className="details">
        <p><FaMapMarker className="icon"/>
        Ijebu Igbo, Ogun State, Nigeria.</p>
       <p><FaPhone className="icon"/>
       <a href="tel:+2348182716135"> 
       +234-818-272-6135</a>
       </p>
      <p><FaEnvelope className="icon"/>
      <a href="mailto:belololade2017@gmail.com">
       belololade2017@gmail</a>
       </p>
       <article className="contact-img">
        <img src='/texting.png' alt="contact me" className="contactImg"/>
      </article>
      </article>
      
    </Wrapper>
  )
}
export default Contact


const Wrapper = Styled.main`
width: 100%;
padding: 3rem;
display: grid;
gap: 2rem;
grid-template-columns: repeat(2,1fr);
.contact-form form{
  display: grid;
}
label{
  font-size: 1.4rem;
  font-weight: 500;
  
}
input,
textarea{
  background: var(--sec-light-3);
  border-radius: var(--radius-lg);
  padding: 1rem;
  font-size: 1.5rem;
  color: var(--sec-dark-3);
}
button{
  width: 70%;
  background: var(--sec-dark-1);
  padding: 1rem;
  border-radius: 3rem;
  color: var(--sec-light-1);
  font-size: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

}
.details{
  margin-top: 2rem;
}
.details p{
  color: var(--sec-dark-2);
  margin: 2rem 0;
}
.details p a{
  color: var(--sec-dark-2);
}
.icon{
  font-size: 2rem;
  margin: 0 .5rem;
}
@media (max-width: 768px){
grid-template-columns: 1fr;


button{
  margin: 0 auto;
}
.contact-img img{
  height: 100%;
}
.details{
  order: 1;
}
.img2{
  order: 2;
}

}
`