import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = () => {
  const labels = {
    about: 'About',
    community: 'Community',
    contact: 'Contact',
    experience: 'Experience',
  };
  const breakpoint = true;
  return (
    <Navbar id={'header'} collapseOnSelect={true} fixed={'top'} expand={breakpoint} variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mx-auto text-center'>
            <Nav.Link href='#about' title={labels.about}>
              <i className='fas fa-user' />
              <div className='hide-expanded'>{labels.about}</div>
            </Nav.Link>
            <Nav.Link href='#experience' title={labels.experience}>
              <i className='fas fa-briefcase' />
              <div className='hide-expanded'>{labels.experience}</div>
            </Nav.Link>
            <Nav.Link href='#community' title={labels.community}>
              <i className='fas fa-users' />
              <div className='hide-expanded'>{labels.community}</div>
            </Nav.Link>
            <Nav.Link href='#contact' title={labels.contact}>
              <i className='fas fa-envelope' />
              <div className='hide-expanded'>{labels.contact}</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
