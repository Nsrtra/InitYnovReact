import React from 'react';
import Header from './layout/header';
import Footer from './layout/Footer';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="myapp__container">
          <Routes />
        </div>
          <Footer />
        </div>
  );
}
    
export default App;
