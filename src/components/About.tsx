import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        headshot: file(relativePath: { eq: "headshotFront.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data: any) => {
      const headshotFluid = data.headshot.childImageSharp.fluid;
      return (
        <div id={`about`}>
          <Container>
            <Row>
              <div className='col-lg-2 offset-lg-1'>
                <h5 className='text-uppercase'>About</h5>
              </div>
              <div className='col-lg-6'>
                <p>
                  I am a software engineer with over twelve years of experience. I am passionate about solving
                  human-centric problems. That includes developing intuitive user interfaces as well as improving
                  development processes, following clean code practices so that others are able to maintain my code, and
                  creating collaborative team cultures where people enjoy coming to work.
                </p>
                <p>
                  I have a breadth of experience developing rapid prototypes, maturing prototypes to production
                  software, improving and maintaining existing production systems. as well as experience leading agile
                  teams under tight deadlines
                </p>
                <p>
                  I am well versed in Lean product development, agile software development practices, requirements
                  gathering, and generating mockups. I enjoy working with Typescript and React and am very interested in
                  learning Vue.js.
                </p>
                <p>
                  I am interested in giving technical talks to our local community. Please reach out with a when, where,
                  and general topic if you are interested in inviting me to your event.
                </p>
                <p>
                  Please note that this website is still a work in progress.
                </p>
                <p className='headshot'>
                  <Img fluid={headshotFluid} className={'rounded-circle'} />
                </p>
              </div>
              <div className='col-lg-3'>
                <p className='download'>
                  <a href='../assets/Resume.pdf' download={true}>
                    <i className='fas fa-download' /> &ensp;
                    <span className='text-uppercase'>Download Resume</span>
                  </a>
                </p>
              </div>
            </Row>
          </Container>
        </div>
      );
    }}
  />
);
export default About;
