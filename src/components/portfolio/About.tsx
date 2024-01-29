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
      aboutMd: file(relativePath: { eq: "about.md" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);
  const headshotFluid = getImage(data.headshot)!;
  const aboutHtml = data.aboutMd.childMarkdownRemark.html;
  console.log(data);
  return (
    <div id={`about`} className='dark-bg'>
      <Container>
        <Row>
          <div className='col-lg-2 offset-lg-1'>
            <h5 className='text-uppercase'>About</h5>
          </div>
          <div className='col-lg-6'>
            <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
            <div className={'headshot'}>
              <GatsbyImage
                className={'rounded-circle'}
                image={headshotFluid}
                alt={
                  'Professional head and shoulders shot of a woman in a maroon floral blouse, with long brown hair, looking directly at the camera'
                }
                backgroundColor={'#111111'}
              />
            </div>
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
