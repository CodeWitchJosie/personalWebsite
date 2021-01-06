import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Only use stateless functional components for leaf nodes.  Contact form will have state

interface State {
  email: string; // hopefully obfuscating email while still providing a nice ux
}
export default class Connect extends React.Component<{}, State> {
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
              <p className='details'>
                <a href={`mailto:${this.state.email}`}>Email Me</a>
              </p>
              <p className='title'>Location</p>
              <div className='details'>
                <div>Ellicott City </div>
                <p className='details'>Maryland, USA</p>
              </div>
              <p className='title'>Follow Me</p>
              <p className='details social'>
                <a href='https://twitter.com/CodeWitchJosie' target='_blank'>
                  <span className='fa-stack fa-2x'>
                    <i className='fas fa-circle fa-stack-2x' />
                    <i className='fab fa-twitter fa-stack-1x fa-inverse' />
                  </span>
                </a>
                <a href='https://www.linkedin.com/in/codewitchjosie/' target='_blank'>
                  <span className='fa-stack fa-2x'>
                    <i className='fas fa-circle fa-stack-2x' />
                    <i className='fab fa-linkedin fa-stack-1x fa-inverse' />
                  </span>
                </a>
                <a href='https://github.com/codewitchjosie/' target='_blank'>
                  <span className='fa-stack fa-2x'>
                    <i className='fas fa-circle fa-stack-2x' />
                    <i className='fab fa-github fa-stack-1x fa-inverse' />
                  </span>
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
