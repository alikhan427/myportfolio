import React from 'react';
import AppRouting from './routing/AppRouting';
import Footer from '../src/component/footer/footer';

const App = () => {
  return (
    <div className="app">
      <AppRouting />
      <Footer />
    </div>
  );
};

export default App;