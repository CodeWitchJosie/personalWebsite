import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

enum ExpType {
  Job,
  Education,
}
interface Experience {
  title: string;
  type: ExpType;
  subtitle?: string;
  details?: string;
  date: string;
}

const Work = () => {
  const experience: Experience[] = [
    {
      type: ExpType.Education,
      title: 'Bachelors in Computer Science',
      subtitle: 'Virginia Tech',
      details: 'Minor in Mathematics',
      date: 'May 2008',
    },
    {
      type: ExpType.Job,
      title: 'Stuff',
      subtitle: 'Virginia Tech',
      details: 'Minor in Mathematics',
      date: 'May 2008',
    },
  ];
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
                <p className='details font-italic'>{item.details}</p>
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
  const edRows = experience.filter((item: Experience) => {
    return item.type === ExpType.Education;
  });
  const jobRows = experience.filter((item: Experience) => {
    return item.type === ExpType.Job;
  });
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
