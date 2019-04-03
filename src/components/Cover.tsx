import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

// , duotone: { highlight: "#283246", shadow: "#283246", opacity: 70 }

const Cover = () => (
  <StaticQuery
    query={graphql`
      query {
        coverImg: file(relativePath: { eq: "books-dark.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160, duotone: { highlight: "#283246", shadow: "#283246", opacity: 70 }) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.coverImg.childImageSharp.fluid;
      return (
        <div id='cover'>
          <BackgroundImage classId='cover' Tag='section' fluid={imageData} backgroundColor={`#111111`}>
            <Container>
              <Row className='text-center'>
                <div className='col-lg-12'>
                  <h1>Jocelyn Irwin</h1>
                  <h3>JavaScript Architect | CodeWitch@JocelynIrwin.com</h3>
                </div>
              </Row>
            </Container>
          </BackgroundImage>
        </div>
      );
    }}
  />
);
export default Cover;
