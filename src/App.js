import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Emanet from './components/Emanet'
import PlanBi from './components/PlanBi'


function App() {
  return (<>
  <Navbar></Navbar>
  <Header></Header>
  <Routes>
        <Route path="/" element={<Emanet></Emanet>} />
        <Route path="/planBi" element={<PlanBi></PlanBi>} />
        <Route path="/emanet" element={<Emanet></Emanet>} />
      </Routes>
  <Footer>
    </Footer>  
  </>    
  );
}

export default App;
