import React, { Fragment } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Counter />
      <Footer />
    </Fragment>
  );
}

export default App;
