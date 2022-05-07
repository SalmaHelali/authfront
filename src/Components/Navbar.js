import React from 'react';
import { Nav , Navbar , Container , NavDropdown , Button , Form , FormControl} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { GetAnimals } from '../redux/actions/AnimalAction';

import {useDispatch} from 'react-redux' ;
import authReducer from '../redux/reducers/authReducer';
import { useSelector } from 'react-redux';
import { logout } from '../redux/actions/authAction';

function HomePage () {
  const auth = useSelector((state) => state.authReducer.auth ) ; 
  const Navigate = useNavigate();
  const dispatch =useDispatch()

  return <div>


<Navbar bg="light" expand="lg" style={{marginLeft:"15%"}}>
  <Container fluid>
    <Navbar.Brand href="HomePage"  as={Link} to='/' onClick={()=> dispatch(GetAnimals())}>TeamManimo</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      <NavDropdown title="Identification " id="navbarScrollingDropdown">

          {auth ? (  
                <NavDropdown.Item href="Logout" as={Link} to='/' onClick={()=>dispatch(logout(Navigate))} > Logout </NavDropdown.Item> 
               ):  
               <div> 
                 <NavDropdown.Item href="#signin"  as={Link} to='/Signin' >Sign In</NavDropdown.Item>
                <NavDropdown.Item href="#signup"    as={Link} to='/Signup'>Sign Up</NavDropdown.Item> 

          </div>}

          <NavDropdown.Divider />
        </NavDropdown> 
        <NavDropdown title="I want to adopt  " id="navbarScrollingDropdown">
      <NavDropdown.Item href="#adults"  >Our adults</NavDropdown.Item>
       <NavDropdown.Item href="#cats"   > Our Cats </NavDropdown.Item>
      <NavDropdown.Item href="#dogs"    > Our Dogs </NavDropdown.Item>

          <NavDropdown.Divider />
        </NavDropdown>


        <Nav.Link href="#" disabled> Our Advices
      </Nav.Link> 

      </Nav>
    
    </Navbar.Collapse>
  </Container>
</Navbar>

  </div>;
}

export default HomePage;
