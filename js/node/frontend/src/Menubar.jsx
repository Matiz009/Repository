import { Button, Container, Navbar } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Menubar = () => {
    const navigate = useNavigate();
  return (
   <>
    <Navbar className="bg-black" variant="dark">
        <Container>
          <Navbar.Brand >
            <Link to={'/'}>Home</Link>
            </Navbar.Brand>
            <Navbar.Brand ><Link to={'/about'} style={{
                color:"white",
                textDecoration:"none"
            }}>About</Link></Navbar.Brand>
            <Navbar.Brand >  <Link to={'/contact'}>Contact</Link></Navbar.Brand>
            <Button variant="primary" onClick={() => navigate('/comment')}>Go to Comment</Button>
        </Container>
      </Navbar>
   </>
  )
}

export default Menubar