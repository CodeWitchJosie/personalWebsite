import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImageProps, default as Img } from 'gatsby-image';
import Countdown from '../components/Countdown';
import * as moment from 'moment';
import { Helmet } from 'react-helmet';

interface CountdownPageProps {
  data: {
    fedoraImg: {
      childImageSharp: GatsbyImageProps;
    };
    site: {
      siteMetadata: {
        title: string;
        description: string;
        canonical: string;
      };
    };
  };
}

export default class CountdownPage extends React.Component<CountdownPageProps, {}> {
  public render() {
    return (
      <div className={'container-fluid'}>
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet='utf-8' />
          <title>{this.props.data.site.siteMetadata.title} - Poodle Countdown</title>
          <link rel='canonical' href={this.props.data.site.siteMetadata.canonical} />
          <meta name='description' content={this.props.data.site.siteMetadata.description} />
        </Helmet>
        <div className={`row justify-content-center`}>
          <h1>Poodle Puppy Countdown!!</h1>
        </div>
        <div className={`row justify-content-center`}>
          <div className={'text-center'}>
            <Countdown targetDate={moment('03-31-2024', 'MM-DD-YYYY')} />
          </div>
        </div>
        <div className={`row justify-content-center`}>
          <div className={`col-4`}>
            <Img fluid={this.props.data.fedoraImg.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query {
    fedoraImg: file(relativePath: { eq: "fedora.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site: site {
      siteMetadata {
        title
        description
        canonical
      }
    }
  }
`;
