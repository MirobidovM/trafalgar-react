import './normalize.css';
import './index.css';

import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Services } from './components/Services';
import { Leading } from './components/Leading';
import { Download } from './components/Download';
import { What } from './components/What';
import { WhatArow } from './components/WhatArow';
import { Check } from './components/Check';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <Leading />
      <Download />
      <What />
      <WhatArow />
      <Check />
      <Footer />
    </>
  );
};
