import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import gallery03 from '../../assets/gallery03.png'
import { Link } from "react-router-dom";
const Template = () => {
  return (
    <>
    
    <div style={{margin:30}}>
      <h4>Choose template</h4>
      <p>Template is combination of style and Branding  and it can be easily edited </p>
    </div>

    {/* <div style={{display:'flex',justifyContent:'center',backgroundColor:'pink'}}>
      <div className='row'>
        <div className='col-sm-6 col-md-4'>
          <h2>Muhammad</h2>
        </div>
        <div className='col-sm-6 col-md-4'>
          <h2>Muhammad</h2>
        </div>
        <div className='col-sm-6 col-md-4'>
          <h2>Muhammad</h2>
        </div>
      </div>

    </div> */}


<div className="App" style={{display:'flex',justifyContent:'center',alignContent:'center',alignSelf:'center'}}>  
   <Container className='p-3 row' >  
  <Col md="3">  
  <Card>  
  <Card.Img variant="top" style={{width:'100%',height:150}} src={gallery03} />  
  <Card.Body style={{display:'flex',justifyContent:'space-between'}}>  
    <Card.Title style={{marginTop:5}}>Card Title</Card.Title>  
     
    <Link to={'/editor'}>

    <Button style={{backgroundColor:'pink', border:'none'}} variant="primary">select</Button>  
    </Link>
  </Card.Body>  
</Card>  
    </Col>  
  <Col md="3">  
  <Card>  
  <Card.Img variant="top" style={{width:'100%',height:150}} src={gallery03} />  
  <Card.Body style={{display:'flex',justifyContent:'space-between'}}>  
    <Card.Title style={{marginTop:5}}>Card Title</Card.Title>  
     
    <Link to={'/editor'}>

    <Button style={{backgroundColor:'pink', border:'none'}} variant="primary">select</Button>  
    </Link>
  </Card.Body>  
</Card>  
    </Col>  
  <Col md="3">  
  <Card>  
  <Card.Img variant="top" style={{width:'100%',height:150}} src={gallery03} />  
  <Card.Body style={{display:'flex',justifyContent:'space-between'}}>  
    <Card.Title style={{marginTop:5}}>Card Title</Card.Title>  
    
    <Link to={'/editor'}>

    <Button style={{backgroundColor:'pink', border:'none'}} variant="primary">select</Button>  
    </Link>
  </Card.Body>  
</Card>  
    </Col>  
  <Col md="3">  
  <Card>  
  <Card.Img variant="top" style={{width:'100%',height:150}} src={gallery03} />  
  <Card.Body style={{display:'flex',justifyContent:'space-between'}}>  
    <Card.Title style={{marginTop:5}}>Card Title</Card.Title>  
    
    <Link to={'/editor'}>

    <Button style={{backgroundColor:'pink', border:'none'}} variant="primary">select</Button>  
    </Link>
  </Card.Body>  
</Card>  
    </Col>  
</Container>  
    </div> 
<div className="App" style={{display:'flex',justifyContent:'center',alignContent:'center',alignSelf:'center'}}>  
   <Container className='p-3 row' >  
  <Col md="3">  
  <Card>  
  <Card.Img variant="top" style={{width:'100%',height:150}} src={gallery03} />  
  <Card.Body style={{display:'flex',justifyContent:'space-between'}}>  
    <Card.Title style={{marginTop:5}}>Card Title</Card.Title>  
     
    <Link to={'/editor'}>

    <Button style={{backgroundColor:'pink', border:'none'}} variant="primary">select</Button>  
    </Link>
  </Card.Body>  
</Card>  
    </Col>  
  <Col md="3">  
  <Card>  
  <Card.Img variant="top" style={{width:'100%',height:150}} src={gallery03} />  
  <Card.Body style={{display:'flex',justifyContent:'space-between'}}>  
    <Card.Title style={{marginTop:5}}>Card Title</Card.Title>  
     
    <Link to={'/editor'}>

    <Button style={{backgroundColor:'pink', border:'none'}} variant="primary">select</Button>  
    </Link>
  </Card.Body>  
</Card>  
    </Col>  
  <Col md="3">  
  <Card>  
  <Card.Img variant="top" style={{width:'100%',height:150}} src={gallery03} />  
  <Card.Body style={{display:'flex',justifyContent:'space-between'}}>  
    <Card.Title style={{marginTop:5}}>Card Title</Card.Title>  
    
    <Link to={'/editor'}>

    <Button style={{backgroundColor:'pink', border:'none'}} variant="primary">select</Button>  
    </Link>
  </Card.Body>  
</Card>  
    </Col>  
  <Col md="3">  
  <Card>  
  <Card.Img variant="top" style={{width:'100%',height:150}} src={gallery03} />  
  <Card.Body style={{display:'flex',justifyContent:'space-between'}}>  
    <Card.Title style={{marginTop:5}}>Card Title</Card.Title>  
    
    <Link to={'/editor'}>

    <Button style={{backgroundColor:'pink', border:'none'}} variant="primary">select</Button>  
    </Link>
  </Card.Body>  
</Card>  
    </Col>  
</Container>  
    </div> 


    </>
  )
}

export default Template