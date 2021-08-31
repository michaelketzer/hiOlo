import React,{useEffect} from 'react'
import Styled from 'styled-components'
import {FaArrowLeft} from 'react-icons/fa';
import Link from 'next/link'
import {useRouter} from 'next/router'

const Error = () =>{
  const router = useRouter();
  
  useEffect(()=>{
    setTimeout(()=>{
      router.push("/")
    },3000);
  },[])
  
  return (
      <Wrapper>
        <div className="background">
        <div className="center">
          <div className="box">
            <h1>404!</h1>
            <h2>Page not found</h2>
            <p> The link you clicked may be broken or the page may have been removed or renamed</p>
              <Link href="/"><a className="btn">
              <FaArrowLeft /> Go Back!
            </a></Link>
          </div>
        </div>
      </div>
      </Wrapper>
  )
}
export default Error

const Wrapper = Styled.div`
.background{
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    background: var(--sec-light-1);
    width: 90vw;
    height: 50vh;
    border-radius: 66% 45% 92% 36%;
    z-index: -1;
  }
  .box{
    box-shadow: var(--light-shadow);
    background: #fff;
    padding: 4rem;
    text-align: center;
    display: block;
  
  }
  .box h1{
    font-size: 10rem;
  }
  p{
    font-size: 1.3rem;
    padding: 1rem 0;
  }
  .btn{
    background: var(--sec-dark-2);
    color: var(--sec-light-2);
    margin: 1rem 0; 
    padding: 1rem ;
  }
     
  
@media only screen and (max-width: 600px) {
  .background{
    width: 20rem;
    height: 40rem;
  }
  .box{
    box-shadow: var(--light-shadow);
    background: #fff;
    padding: 2rem;
    marging-top: 1rem;
    text-align: center;
    display: block;
    width: 100%;
    height: 100%;
  }
  .box h1{
    font-size: 5rem;
  }
  p{
    font-size: 1.3rem;
  }
  
}


`