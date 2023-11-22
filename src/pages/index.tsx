import * as React from 'react';
import Header from '../components/portfolio/Header';
import Cover from '../components/portfolio/Cover';
import About from '../components/portfolio/About';
import Work from '../components/portfolio/Work';
import Skills from '../components/portfolio/Skills';
import Local from '../components/portfolio/Local';
import Connect from '../components/portfolio/Connect';
import Seo from '../components/common/Seo';

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
