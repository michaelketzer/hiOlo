import Navbar from './Navbar'
import Footer from './Footer'
import Styled from 'styled-components';

const Layout = ({children}) =>{
  return(
    <Wrapper>
      <Navbar />
        {children}
      <Footer />
   </Wrapper>
  )
}

export default Layout;

const Wrapper = Styled.div`
min-height: 100vh;
overflow: hidden;
display: flex;
flex-direction: column;
`