import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

interface Experience {
  title: string;
  subtitle?: string;
  html: string;
  date: string;
}

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      education: allFile(filter: { relativeDirectory: { eq: "education" } }) {
        nodes {
          childMarkdownRemark {
            html
            frontmatter {
              degree
              institution
              date
            }
          }
        }
      }
      experience: allFile(filter: { relativeDirectory: { eq: "experience" } }) {
        nodes {
          childMarkdownRemark {
            html
            frontmatter {
              role
              employer
              date
            }
          }
        }
      }
    }
  `);
  const edRows = data.education.nodes.map((node: any) => {
    return {
      title: node.childMarkdownRemark.frontmatter.degree,
      subtitle: node.childMarkdownRemark.frontmatter.institution,
      html: node.childMarkdownRemark.html,
      date: node.childMarkdownRemark.frontmatter.date,
    };
  });
  const jobRows = data.experience.nodes.map((node: any) => {
    return {
      title: node.childMarkdownRemark.frontmatter.role,
      subtitle: node.childMarkdownRemark.frontmatter.employer,
      html: node.childMarkdownRemark.html,
      date: node.childMarkdownRemark.frontmatter.date,
    };
  });

  const renderSection = (rows: Experience[], label: string) => {
    if (rows.length === 0) {
      return null;
    }
    return (
      <Row className={'exp-type'}>
        <div className='col-lg-2 offset-lg-1'>
          <h5 className='text-uppercase'>{label}</h5>
        </div>
        {rows.map((item: Experience, index: number) => {
          return (
            <Row key={index} className={`g-0 col-lg-9${index > 0 ? ' offset-lg-3' : ''}`}>
              <div className='col-lg-8'>
                <p className='title'>
                  {item.title}
                  <div className='subtitle'>{item.subtitle}</div>
                </p>
                <div className='details fst-italic' dangerouslySetInnerHTML={{ __html: item.html }} />
              </div>
              <div className='col-lg-4'>
                <h5 className='date text-uppercase'>{item.date}</h5>
              </div>
            </Row>
          );
        })}
      </Row>
    );
  };
  return (
    <div id={`work`}>
      <Container>
        {renderSection(edRows, 'Education')}
        {edRows.length && jobRows.length ? <hr /> : null}
        {renderSection(jobRows, 'Work')}
      </Container>
    </div>
  );
};
export default Work;
