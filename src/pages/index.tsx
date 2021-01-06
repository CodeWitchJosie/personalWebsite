import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImageProps, default as Img } from 'gatsby-image';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Cover from '../components/Cover';
import About from '../components/About';
import Work from '../components/Work';
import Skills from '../components/Skills';
import Local from '../components/Local';
import Connect from '../components/Connect';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        canonical: string;
        keywords: string;
      };
    };
  };
}
export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <div>
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet='utf-8' />
          <title>{this.props.data.site.siteMetadata.title}</title>
          <link rel='canonical' href={this.props.data.site.siteMetadata.canonical} />
          <meta name='description' content={this.props.data.site.siteMetadata.description} />
          <meta name='keywords' content={this.props.data.site.siteMetadata.keywords} />
        </Helmet>
        <Header />
        <div>
          <Cover />
          <About />
          <Work />
          <Skills />
          <Local />
          <Connect />
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query {
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
