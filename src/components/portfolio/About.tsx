import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import resumePDF from '../../assets/Resume.pdf';

const About = () => {
  const data = useStaticQuery(graphql`
    {
      headshot: file(relativePath: { eq: "headshotFront.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: CONSTRAINED, aspectRatio: 1)
        }
      }
    }
  `);
  const headshotFluid = getImage(data.headshot)!;
  return (
    <div id={`about`} className='dark-bg'>
      <Container>
        <Row>
          <div className='col-lg-2 offset-lg-1'>
            <h5 className='text-uppercase'>About</h5>
          </div>
          <div className='col-lg-6'>
            <p>
              I am Jocelyn Irwin and I have been in the industry since 2007. My passion lies in solving human-centric
              problems, from creating user-friendly interfaces to streamlining development processes to writing clean,
              maintainable code. I thrive on fostering collaborative team cultures where work is not just a task but an
              enjoyable experience.
            </p>
            <p>
              Over the years, I've handled the full software development cycle—building rapid prototypes, transforming
              them into production-ready software, and maintaining existing systems. I've led agile teams in fast-paced
              environments, ensuring efficiency under tight deadlines.
            </p>
            <p>
              Experienced in Lean product development and agile practices, I excel in requirements gathering and
              translating ideas into practical software. My technical toolkit is focused in TypeScript and React, but
              I'm very interested in exploring Vue.js. While I've explored mobile app development using NativeScript, my
              heart remains in web development.
            </p>
            <p>
              I am always eager to share my experiences and lessons learned. I'm open to technical talks within our
              local community. If you're organizing an event, reach out with the details—let's discuss the when, where,
              and the topic. I'm here to connect, share knowledge, and contribute to our collective growth!
            </p>
            <p className='headshot'>
              <GatsbyImage image={headshotFluid} className={'rounded-circle'} alt={'TODO: alt text'} />
            </p>
          </div>
          <div className='col-lg-3'>
            <p className='download'>
              <a href={resumePDF} download>
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
