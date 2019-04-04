import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

interface Tab {
  icon: string;
  label: string;
  slug: string;
}

const Header = () => {
  // TODO: move to /data and make a query

  const tabs: Tab[] = [
    {
      icon: 'user',
      label: 'About',
      slug: 'about',
    },
    {
      icon: 'briefcase',
      label: 'Work',
      slug: 'work',
    },
    {
      icon: 'users',
      label: 'Local',
      slug: 'community',
    },
    {
      icon: 'envelope',
      label: 'Contact',
      slug: 'contact',
    },
  ];
  const breakpoint = true;
  return (
    <Navbar id={'header'} collapseOnSelect={true} fixed={'top'} expand={breakpoint} bg='slate' variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mx-auto text-center'>
            {tabs.map((tab: Tab, index: number) => {
              return (
                <Nav.Link key={tab.slug} href={`#${tab.slug}`} title={tab.label}>
                  <i className={`fas fa-${tab.icon}`} />
                  <div className='hide-expanded'>{tab.label}</div>
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
