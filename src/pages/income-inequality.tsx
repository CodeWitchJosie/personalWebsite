import * as React from 'react';
import { graphql } from 'gatsby';
import * as moment from 'moment';
import { Helmet } from 'react-helmet';

interface IncomeInequalityPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        canonical: string;
      };
    };
  };
}

export default class IncomeInequalityPage extends React.Component<IncomeInequalityPageProps, {}> {
  public render() {
    return (
      <div className={'container-fluid'}>
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet='utf-8' />
          <title>{this.props.data.site.siteMetadata.title} - Income Inequality</title>
          <link rel='canonical' href={this.props.data.site.siteMetadata.canonical} />
          <meta name='description' content={this.props.data.site.siteMetadata.description} />
        </Helmet>
        <div className={`row justify-content-center`}>
          <h1>Income Inequality Infographic</h1>
          <p>Coming Soon</p>
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
      }
    }
  }
`;
