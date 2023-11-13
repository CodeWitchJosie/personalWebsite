import * as React from 'react';
import Header from '../components/Header';
import Cover from '../components/Cover';
import About from '../components/About';
import Work from '../components/Work';
import Skills from '../components/Skills';
import Local from '../components/Local';
import Connect from '../components/Connect';
import Seo from '../components/Seo';

const IndexPage = () => {
  return (
    <div>
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
};

export const Head = () => <Seo title='Home' />;
export default IndexPage;
