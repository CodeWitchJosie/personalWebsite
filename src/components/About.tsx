import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About = () => {
  return (
    <div id={`about`}>
      <Container>
        <Row>
          <div className='col-lg-2 offset-lg-1'>
            <h5 className='text-uppercase'>About</h5>
          </div>
          <div className='col-lg-6'>
            <p>
              I am a software engineer with over twelve years of experience. I am passionate about developing intuitive
              user interfaces that are easy to maintain and update.
            </p>
            <p>
              I have a breadth of experience developing rapid prototypes, maturing prototypes to production software,
              improving and maintaining existing production systems. as well as experience leading agile teams under
              tight deadlines
            </p>
            <p>
              I am well versed in Lean product development, agile software development practices, requirements
              gathering, and generating mockups.
            </p>
          </div>
          <div className='col-lg-3'>
            <p className='download'>
              <a href='../assets/resume.pdf' download={true}>
                <i className='fas fa-download' /> &ensp;
                <span className='text-uppercase'>Download Resume</span>
              </a>
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default About;
