import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


const Header = () =>{
  const labels = {
    about: "About",
    community: "Community Involvement",
    contact: "Contact Me",
    experience: "Experience",
  }
  return (
    <Navbar id={'header'} collapseOnSelect={true} fixed={'top'} expand={'sm'} variant="dark">
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#about" title={labels.about}><i className='fas fa-user'/><span className='hide-expanded'>{labels.about}</span></Nav.Link>
          <Nav.Link href="#experience" title={labels.experience}><i className='fas fa-briefcase'/></Nav.Link>
          <Nav.Link href="#community" title={labels.community}><i className='fas fa-users'/></Nav.Link>
          <Nav.Link href="#contact" title={labels.contact}><i className='fas fa-envelope'/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;
