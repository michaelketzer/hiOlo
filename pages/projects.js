import React from 'react'
import Styled from 'styled-components'
import projectImg from '../assets/images/ideas.png'
import {projects} from '../assets/data'
import {FaArrowDown} from 'react-icons/fa';




const Projects = () =>{
  return (
    <Wrapper>
      <article className="container">
        <h2><span className="slash">/</span>My works</h2>
        <h4>Some of my recent projects<span className="primary"><FaArrowDown /></span></h4>
        <img className="idea-img" src={projectImg} alt="landing page building" />
      <div className="projects">
        {projects.map(project => {
          const {id, img, title,desc, tech, links} = project
          return(
            <div className="project" key={id}>
          <img src={img} className="project-img" alt={title} />
          <h4>{title}</h4>
          <p>
            {desc}
          </p>
          <a href={links} className="btn"> visit </a>
        </div>
          )
        })
          
        }
      
      </div>
      </article>
    </Wrapper>
  )
}
export default Projects


const Wrapper = Styled.main`
margin: 1rem auto;

.container{
  padding: 2rem;
}
h2{
  text-align: center;
  margin: 1rem 0;
}
.idea-img{
  width: 8rem;
  height: 8rem;
  display: block;
  margin: 0 auto;
}
.project{
  background: #fff;
  padding: 2rem;
  margin: 1rem; 
  border-radius: var(--radius-lg);
}
p{
  line-height: 2;
  margin: 1rem 0;
}
@media (min-width: 768px){
  .projects{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
`