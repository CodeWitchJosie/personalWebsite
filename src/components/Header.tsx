import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-scroll';
import { graphql, StaticQuery } from 'gatsby';
import { JsonQueryEdge } from '../utils/graphQlUtils';

interface Tab {
  icon: string;
  label: string;
  slug: string;
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query getLinks {
          allNavLinksJson {
            edges {
              node {
                icon
                label
                slug
              }
            }
          }
        }
      `}
      render={results => {
        const tabs: Tab[] = results.allNavLinksJson.edges.map((item: JsonQueryEdge) => item.node);
        const breakpoint = 'sm';

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
          <Navbar id={'header'} collapseOnSelect fixed={'top'} expand={breakpoint} bg='slate' variant='dark'>
            <Container>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' className='mx-auto' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mx-auto text-center'>
                  {tabs.map((tab: Tab, index: number) => {
                    return (
                      <Nav.Link
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
                      </Nav.Link>
                    );
                  })}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }}
    />
  );
};
export default Header;
