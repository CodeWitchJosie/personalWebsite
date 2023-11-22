import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const Connect = () => {
  const [email, setEmail] = useState('');
  useEffect(() => {
    setEmail(['CodeWitch', '@', 'JocelynIrwin.com'].join(''));
  }, []);
  return (
    <div id='connect' className='dark-bg'>
      <Container>
        <Row>
          <div className='col-lg-2 offset-lg-1'>
            <h5 className='text-uppercase'>Connect</h5>
          </div>
          <div className='col-lg-4'>
            <p className='title'>Email</p>
            <p className='details'>
              <a href={`mailto:${email}`}>Email Me</a>
            </p>
            <p className='title'>Location</p>
            <div className='details'>
              <div>Ellicott City </div>
              <p className='details'>Maryland, USA</p>
            </div>
            <p className='title'>Follow Me</p>
            <p className='details social'>
              <OutboundLink href='https://twitter.com/CodeWitchJosie' target='_blank'>
                <span className='fa-stack fa-2x'>
                  <i className='fas fa-circle fa-stack-2x' />
                  <i className='fab fa-twitter fa-stack-1x fa-inverse' />
                </span>
              </OutboundLink>
              <OutboundLink href='https://www.linkedin.com/in/codewitchjosie/' target='_blank'>
                <span className='fa-stack fa-2x'>
                  <i className='fas fa-circle fa-stack-2x' />
                  <i className='fab fa-linkedin fa-stack-1x fa-inverse' />
                </span>
              </OutboundLink>
              <OutboundLink href='https://github.com/codewitchjosie/' target='_blank'>
                <span className='fa-stack fa-2x'>
                  <i className='fas fa-circle fa-stack-2x' />
                  <i className='fab fa-github fa-stack-1x fa-inverse' />
                </span>
              </OutboundLink>
            </p>
          </div>
          <div className='col-lg-5'>Contact form goes here</div>
        </Row>
      </Container>
    </div>
  );
};
export default Connect;
