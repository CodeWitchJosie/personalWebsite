import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

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
      icon: 'screwdriver',
      label: 'Skills',
      slug: 'skills',
    },
    {
      icon: 'users',
      label: 'Local',
      slug: 'community',
    },
    {
      icon: 'envelope',
      label: 'Connect',
      slug: 'connect',
    },
  ];
  const breakpoint = true;

  const animate = () => {
    const el = document.getElementById('skills');
    const isVisible = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    };
    if (el && isVisible(el)) {
      const list = el.getElementsByClassName('skill-chart');

      Array.from(list, item => {
        item.classList.add('animate');
      });
    }
  };
  return (
    <Navbar id={'header'} collapseOnSelect={true} fixed={'top'} expand={breakpoint} bg='slate' variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mx-auto text-center'>
            {tabs.map((tab: Tab, index: number) => {
              return (
                <Link
                  key={tab.slug}
                  title={tab.label}
                  activeClass='active'
                  to={tab.slug}
                  spy={true}
                  smooth={'easeOutQuad'}
                  offset={-88}
                  duration={500}
                  delay={0}
                  onSetActive={animate}
                >
                  <i className={`fas fa-${tab.icon}`} />
                  <div>{tab.label}</div>
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
