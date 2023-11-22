import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Divider from './Divider';

const Cover = () => {
  const data = useStaticQuery(graphql`
    {
      coverImg: file(relativePath: { eq: "cover-crystal.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100
            layout: FULL_WIDTH
            transformOptions: { duotone: { highlight: "283246", shadow: "283246", opacity: 70 } }
          )
        }
      }
    }
  `);
  // transformOptions: { duotone: { highlight: "#283246", shadow: "#283246", opacity: 70 } }
  const imageData = getImage(data.coverImg)!;
  return (
    <div id='cover'>
      <Container className='backgroundImageSection'>
        <Row className='text-center'>
          <div className='col-12'>
            <h1>Jocelyn Irwin</h1>
            <p>
              <Divider />
            </p>
            <h3>Code Witch</h3>
          </div>
        </Row>
      </Container>
      <GatsbyImage
        className='backgroundImageSection'
        image={imageData}
        alt={'TODO: alt text'}
        backgroundColor={'#111111'}
      />
    </div>
  );
};
export default Cover;
