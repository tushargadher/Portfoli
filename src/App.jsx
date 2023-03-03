import React from 'react';
// import LoadingBar from 'react-top-loading-bar';
import Navbar from './Componet/Navbar';
// import Home from './Componet/Home';
// import About from './Componet/About';
// import Contect from './Componet/Contect';
// import Portfolio from './Componet/Portfolio';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {

  return (

    <>
      {/* <Router> */}
       
          <Navbar myname="Tushar Gadher" />
          {/* <Routes> */}
            {/* <Route path='/PortFolioVersion2' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Porject' element={<Portfolio />} />
            <Route path='/Contact' element={<Contect />} /> */}
          {/* </Routes> */}
      
      {/* </Router> */}

    </>
  );
}
export default App;