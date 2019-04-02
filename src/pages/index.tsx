import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImageProps, default as Img } from 'gatsby-image';
import { Helmet } from 'react-helmet';
import Header from '../components/Header'

interface IndexPageProps {
  data: {
    fedoraImg: {
      childImageSharp: GatsbyImageProps;
    };
    site: {
      siteMetadata: {
        title: string;
        description: string;
        canonical: string;
        keywords: string
      };
    };
  };
}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <div>
        <Helmet htmlAttributes={{lang: 'en'}}>
          <meta charSet='utf-8' />
          <title>{this.props.data.site.siteMetadata.title}</title>
          <link rel='canonical' href={this.props.data.site.siteMetadata.canonical} />
          <meta name='description' content={this.props.data.site.siteMetadata.description} />
          <meta name='keywords' content={this.props.data.site.siteMetadata.keywords} />
        </Helmet>
        <Header />
        <div style={{backgroundColor: 'pink'}}>
          content
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
        keywords
      }
    }
  }
`;
