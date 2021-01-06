import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { graphql, StaticQuery } from 'gatsby';
import { JsonQueryEdge } from '../utils/graphQlUtils';
import Img, { GatsbyImageProps } from 'gatsby-image';
import {OutboundLink} from "gatsby-plugin-google-gtag";

export interface Org {
  details: string;
  involvement: string;
  img: {
    childImageSharp: GatsbyImageProps;
  };
  title: string;
  url: string;
}

const Local = () => {
  return (
    <StaticQuery
      query={graphql`
        query getLocalOrgs {
          allLocalJson {
            edges {
              node {
                details
                involvement
                img {
                  childImageSharp {
                    fluid(maxHeight: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                title
                url
              }
            }
          }
        }
      `}
      render={results => {
        const orgs: Org[] = results.allLocalJson.edges.map((item: JsonQueryEdge) => item.node);
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
                          <Img fluid={item.img.childImageSharp.fluid} className={'m-2'} />
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
      }}
    />
  );
};
export default Local;
