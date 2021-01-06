import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { JsonQueryEdge } from '../utils/graphQlUtils';
import ReactMarkdown from 'react-markdown';

enum ExpType {
  Job = 'JOB',
  Education = 'EDUCATION',
}
interface Experience {
  title: string;
  type: ExpType;
  subtitle?: string;
  details: string[];
  date: string;
}

const Work = () => {
  return (
    <StaticQuery
      query={graphql`
        query getExperience {
          allWorkJson {
            edges {
              node {
                type
                title
                subtitle
                details
                date
              }
            }
          }
        }
      `}
      render={results => {
        const data: Experience[] = results.allWorkJson.edges.map((item: JsonQueryEdge) => item.node);

        const edRows = data.filter((item: Experience) => {
          return item.type === ExpType.Education;
        });
        const jobRows = data.filter((item: Experience) => {
          return item.type === ExpType.Job;
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
                  <Row key={index} className={`no-gutters col-lg-9${index > 0 ? ' offset-lg-3' : ''}`}>
                    <div className='col-lg-8'>
                      <p className='title'>
                        {item.title}
                        <div className='subtitle'>{item.subtitle}</div>
                      </p>
                      {item.details.map((bullet: string, index: number) => (
                        <div className='details font-italic'>
                          <ReactMarkdown>{bullet}</ReactMarkdown>
                        </div>
                      ))}
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
      }}
    />
  );
};
export default Work;
