import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { graphql, useStaticQuery } from 'gatsby';
import { JsonQueryEdge } from '../utils/graphQlUtils';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

export interface Org {
  details: string;
  involvement: string;
  img: {
    childImageSharp: IGatsbyImageData;
  };
  title: string;
  url: string;
}
const Local = () => {
  const data = useStaticQuery(graphql`
    query {
      allLocalJson {
        edges {
          node {
            details
            involvement
            img {
              childImageSharp {
                gatsbyImageData(height: 64, layout: FULL_WIDTH)
              }
            }
            title
            url
          }
        }
      }
    }
  `);
  const orgs: Org[] = data.allLocalJson.edges.map((item: JsonQueryEdge) => item.node);
  return (
    <div id={`local`}>
      <Container>
        <Row className={'exp-type'}>
          <div className='col-lg-2 offset-lg-1'>
            <h5 className='text-uppercase'>Local Involvement</h5>
          </div>
          {orgs.map((item: Org, index: number) => {
            return (
              <Row key={index} className={`no-gutters col-lg-9${index > 0 ? ' offset-lg-3' : ''}`}>
                <div className={`col-lg-3`}>
                  <div className={'bg-dark mx-4'}>
                    <GatsbyImage image={getImage(item.img.childImageSharp)!} className={'m-2'} alt={'TODO: alt text'} />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <p className='text-uppercase'>{item.title}</p>
                  <p className='details'>{item.details}</p>
                  <p className='details'>{item.involvement}</p>
                  <p>
                    <OutboundLink href={item.url} target='_blank'>
                      {item.url}
                    </OutboundLink>
                  </p>
                </div>
              </Row>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default Local;
