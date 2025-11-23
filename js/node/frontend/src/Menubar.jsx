import { Button, Container, Navbar } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Menubar = ({title,color}) => {
    const navigate = useNavigate();
    console.log("Title:", title);
    console.log("Color:", color);
  return (
   <>
    <Navbar className="bg-black" variant="dark">
        <Container>
          <Navbar.Brand style={{
            color:color
          }} >
            <Link to={'/'}>{title}</Link>
            </Navbar.Brand>
            <Navbar.Brand ><Link to={'/about'} style={{
                color:"white",
                textDecoration:"none"
            }}>About</Link></Navbar.Brand>
            <Navbar.Brand >  <Link to={'/contact'}>Contact</Link></Navbar.Brand>
             <Navbar.Brand >  <Link to={'/blog'}>Blog</Link></Navbar.Brand>
            <Button variant="primary" className='rounded-full' onClick={() => navigate('/comment')}>Go to Comment</Button>
         
        </Container>
      </Navbar>
   </>
  )
}

export default Menubar