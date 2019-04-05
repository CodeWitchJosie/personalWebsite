import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Only use stateless functional components for leaf nodes.  Contact form will have state

interface State {
  email: string; // hopefully obfuscating email while still providing a nice ux
}
export default class Countdown extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
    };
  }
  componentDidMount() {
    this.setState({ email: 'CodeWitch' + '@' + 'JocelynIrwin.com' });
  }
  render() {
    return (
      <div id='connect'>
        <Container>
          <Row>
            <div className='col-lg-2 offset-lg-1'>
              <h5 className='text-uppercase'>Connect</h5>
            </div>
            <div className='col-lg-4'>
              <p className='title'>Email</p>
              <p className="details">
                <a href={`mailto:${this.state.email}`}>Email Me</a>
              </p>
              <p className='title'>Location</p>
              <p className="details">
              <div>Ellicott City </div>
              <div>Maryland, USA</div>
              </p>
              <p className='title'>Follow Me</p>
              <p className="details">
              <a href='#'>
                <i className='fab fa-dribbble' />
              </a>
              <a href='#'>
                <i className='fab fa-twitter' />
              </a>
              <a href='#'>
                <i className='fab fa-facebook' />
              </a>
              <a href='#'>
                <i className='fab fa-linkedin' />
              </a>
              <a href='#'>
                <i className='fab fa-apple' />
              </a>
              </p>
            </div>
            <div className='col-lg-5'>Contact form goes here</div>
          </Row>
        </Container>
      </div>
    );
  }
}
