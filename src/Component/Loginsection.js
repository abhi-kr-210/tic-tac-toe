import React,{useState} from 'react'
import "../../src/Loginsection.css"
import { Row,Col,Container } from 'react-bootstrap'
import { Link} from 'react-router-dom'

function Loginsection() {
    const [user1,setuser1]=useState('');
    const [user2,setuser2]=useState('');


  return (
    <div className="start_page">
    <section className='login_section'>
    <Container>
    
    <Row className='justify-content-center mt-5 '>
      <Col lg={8} className='justify-content-center text-center '>
       <div>
        <h1>!WELCOME YOU IN!  </h1>
        <h2>TIC-TAC-TOE GAME</h2>
        <h2>GOOD LUCK</h2>
       </div>
      
      </Col>
    </Row>
    <Row className='justify-content-center align-items-center login_page mt-5'>

     <Col  lg={8} className='justify-content-center text-center'>
     <form action="#" className='login_form'>
     <div className="container_inputs ">
       <div className='user1_name mb-3'>

       <label htmlFor="username1">USERNAME-1</label>
      
       <input onChange={(e)=>setuser1(e.target.value)} type="text" placeholder='Enter Your Name'
       value={user1} id='username1'/>

       </div>
       <div className='user2_name mb-5'>
       <label htmlFor="username2">USERNAME-2</label>

       <input onChange={(e)=>setuser2(e.target.value)} type="text" placeholder='Enter Your Name'
       value={user2} id='username2'/>

       </div>      
       <div className='login_button d-flex justify-content-center align-items-center'>
       <Link to= "/homes"  state= {{data:{user1,user2} } } className='btn'>START</Link>
       </div>

       </div>
     </form>    
     </Col>
     
    
    </Row>
    
    </Container>
    
    </section>
    
    </div>
  )
}

export default Loginsection