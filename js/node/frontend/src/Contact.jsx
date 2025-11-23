import React, { useEffect, useState } from 'react'
import Menubar from './Menubar'
import Test1 from './Test1'
import { Button } from '@mui/material'
import { ToastContainer,toast } from 'react-toastify'

const Contact = ({likes}) => {
  const [count,setCount] = useState(0);   
  const [alphabet,setAlphabet] = useState('A');
  const [post,setPost] = useState({});
  useEffect(()=>{
    fetchPost();
    console.log('fetching post data');
  },[count])
  function fetchPost(){
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
    .then(res=>res.json())
    .then(data=>setPost(data))
  }
  function handleSubtract(){
    if(count>0){
     setCount((prev)=>prev-1) 
    } 
    else{
      addalert();
    } 
  }
  function handleAdd(){
    setCount((prev)=>prev+1)
  }
   const addalert = () => toast('number cannot be negative');
  return (
  <>
  <Menubar/>
  <div>Contact</div>
  <h1>Counter: {count}</h1>
  <Button variant="primary" style={{
          backgroundColor:"purple",
          color:"white"
        }}
        onClick={
          handleAdd
        }
  >Add</Button>
  <br/>
  <br/>
  <Button variant="contained" style={{
          backgroundColor:"purple",
          color:"white"
        }}
        onClick={
        handleSubtract
        }
  >Subtract</Button>


  <Test1/>
  <ToastContainer/>
  </>
  )
}

export default Contact