import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

interface Org {
  details: string;
  img: string;
  title: string;
  url: string;
}

const Local = () => {
  const orgs: Org[] = [
    {
      details: 'a place',
      img: 'something',
      title: 'Org 1',
      url: 'https://jocelynirwin.com',
    },
    {
      details: 'a place',
      img: 'something',
      title: 'Org 2',
      url: 'https://jocelynirwin.com',
    },
  ];
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
                <div className={`col-lg-6`}>
                  <img className='img-responsive' src='../images/icon.svg' />
                </div>
                <div className='col-lg-3'>
                  <p className='text-uppercase'>{item.title}</p>
                  <p className='details'>{item.details}</p>
                  <p>
                    <a href={item.url} target='_blank'>
                      item.url
                    </a>
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
