import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaSearch,
  FaSearchLocation,
  FaTools,
  FaChessQueen,
  FaPhone,
  FaReact,
  FaNodeJs,
  FaBlog,
} from 'react-icons/fa';
import {FaRegLightbulb} from 'react-icons/fa'
import {ImUserTie} from 'react-icons/im'
import {RiUserSettingsFill} from 'react-icons/ri'
import {SiJavascript, SiTypescript, SiGatsby, SiGraphql, SiGithub, SiNextDotJs} from 'react-icons/si'
import {AiOutlineCode} from 'react-icons/ai'
import {GiCardDraw} from 'react-icons/gi'
import {BiHomeCircle} from 'react-icons/bi'
import projectImg1 from './images/project2.webp'



// import {FiDribble} from 'react-icons/fi';


export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <BiHomeCircle />,
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
    icon: <ImUserTie />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaRegLightbulb />,
  },
  {
    id: 4,
    url: '/services',
    text: 'services',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/https://hashnode.com/@BellDev',
    text: 'blog',
    icon: <FaWpforms />,
  },
  {
    id: 6,
    url: '/contact',
    text: 'contact',
    icon: <FaPhone />,
  },
];
export const quickLinks = [
  {
    id: 1,
    url: '/About',
    text: 'about',
  },
  {
    id: 2,
    url: '/Services',
    text: 'services',
  },
  {
    id: 3,
    url: '/Blog',
    text: 'blog',
  },
  {
    id: 4,
    url: '/Contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://twitter.com/hey_Ololade?s=09',
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://instagram.com/___ololade?utm_medium=copy_link',
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: 'https://hashnode.com/@BellDev',
    icon: <FaBlog />,
  },
  {
    id: 5,
    url: 'https://github.com/Haryor-Mhie-max',
    icon: <FaGithub />,
  },
  {
    id: 6,
    url: 'https://www.twitter.com',
    icon: <FaDev />,
  },
];
export const features = [
{
  id: 1,
  title: 'SEO',
  icon: <FaSearchLocation />,
  list: ["Higher SEO Rankings", "Quality Traffic generation", "Live measurable results"]
},  
{
  id: 2,
  title: '10/10 User Experience',
  icon: <FaChessQueen />,
  list: ["Simple Converting Interface", "Easy Navigation", "Blazinly fast loading"]
},  
{
  id: 3,
  title: 'Brand Strategy',
  icon: <FaTools />,
  list: ["Excellent Brand Indentity", "Brand Colours pronunced"]
},  
{
  id: 4,
  title: '...And other Features',
  icon: <RiUserSettingsFill />,
  list: ["Ongoing Support", "Website Review", "Post-production Improvements"]
},  
]
export const services = [
{
  id: 1,
  title: 'Tailored Development',
  icon: <AiOutlineCode />,
  desc: "I am equipped with the latest and neccessary teechnologies to develop your ideal website. HTML, CSS (Bootstrap), JavaScript (MERN Stack), Next.js, Firebase ? You name it. I have it all covered!",
},  
{
  id: 2,
  title: 'PSD TO HTML',
  icon: <GiCardDraw />,
  desc: "If you already have a design in Photoshop, Figma, Invision, or any other format, I can convert it from scratch into a pixel-perfect HTML/CSS/JS website, with any other additional features you would like to add offcourse.",
},  
{
  id: 3,
  title: 'User Experience Design',
  icon: <FaTools />,
  desc: "I develop and design your website with user's experience in focus. The simple to use website guides the users towards the end goal of your brand."
},  
{
  id: 4,
  title: 'Website Review',
  icon: <RiUserSettingsFill />,
  desc: "If you already have a website you want to improve, i throughly check out the site and analyse what areas need improving and remove what dosen't work anymore."
},  
]
export const projects =[
{
 id: 1,
 img: projectImg1,
 title: "Responsive Calculator page",
 desc: "This is a system for monitoring projects' progress of final year students. It have three levels of users i.e Students, Supervisors and the Project Coordinator. Each user have a specific role in the system. Students have the lowest privilege. I developed this system using React, Redux and Firebase",
 tech: ["HTML", "CSS", "JAVASCRIPT"],
 links:{
   github: "https://github.com/Haryor-Mhie-max/Calculator",
   url: "https://js-calculator-max.netlify.app/"
 },
},  
{
 id: 2,
 img: projectImg1,
 title: "Responsive Product page",
 desc: "This is a system for monitoring projects' progress of final year students. It have three levels of users i.e Students, Supervisors and the Project Coordinator. Each user have a specific role in the system. Students have the lowest privilege. I developed this system using React, Redux and Firebase",
 tech: ["Gatsby JS", "MDX", "SRIPE"],
 links:{
   github: "https://github.com/Haryor-Mhie-max/Calculator",
   url: "https://js-calculator-max.netlify.app/"
 },
},  
{
 id: 3,
 img: projectImg1,
 title: "Responsive landing page",
 desc: "This is a system for monitoring projects' progress of final year students. It have three levels of users i.e Students, Supervisors and the Project Coordinator. Each user have a specific role in the system. Students have the lowest privilege. I developed this system using React, Redux and Firebase",
 tech: ["React", "Firebase", "Formik"],
 links:{
   github: "https://github.com/Haryor-Mhie-max/Calculator",
   url: "https://js-calculator-max.netlify.app/"
 },
},  
{
 id: 4,
 img: projectImg1,
 title: "Responsive page",
 desc: "This is a system for monitoring projects' progress of final year students. It have three levels of users i.e Students, Supervisors and the Project Coordinator. Each user have a specific role in the system. Students have the lowest privilege. I developed this system using React, Redux and Firebase",
 tech: ["HTML", "CSS", "JAVASCRIPT"],
 links:{
   github: "https://github.com/Haryor-Mhie-max/Calculator",
   url: "https://js-calculator-max.netlify.app/"
 },
},  
{
 id: 5,
 img: projectImg1,
 title: "Responsive page 5",
 desc: "This is a system for monitoring projects' progress of final year students. It have three levels of users i.e Students, Supervisors and the Project Coordinator. Each user have a specific role in the system. Students have the lowest privilege. I developed this system using React, Redux and Firebase",
 tech: ["HTML", "CSS", "JAVASCRIPT"],
 links:{
   github: "https://github.com/Haryor-Mhie-max/Calculator",
   url: "https://js-calculator-max.netlify.app/"
 },
},  
]

export const stack = [
{
  id: 1,
  icon: <SiJavascript />,
  text: 'JavaScript',
},
{
  id: 2,
  icon: <FaReact />,
  text: 'React',
},
{
  id: 3,
  icon: <SiTypescript />,
  text: 'Typescript',
},
{
  id: 4,
  icon: <SiGatsby />,
  text: 'Gatsby js',
},
{
  id: 5,
  icon: <SiNextDotJs />,
  text: 'Next js',
},
{
  id: 6,
  icon: <FaNodeJs />,
  text: 'Node Js',
},
{
  id: 7,
  icon: <SiGraphql />,
  text: 'GraphQL',
},
{
  id: 8,
  icon: <SiGithub />,
  text: 'Git & Github',
},
]