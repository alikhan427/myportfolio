import React from 'react';
import AppRouting from './routing/AppRouting.jsx';  
import Footer from './component/footer/Footer.jsx'; 
const App = () => {
  return (
    <div className="app">
      <AppRouting />
      <Footer />
    </div>
  );
};

export default App;