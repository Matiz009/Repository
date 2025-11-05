import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Menubar from './Menubar'

const Home = () => {
  return (
   <>
      <Menubar/>
      <h1>Welcome to React App</h1>  
   </>
  )
}

export default Home