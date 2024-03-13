import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Doctor from './Doctor';
import Patient from './Patient';
import Navigation from './Navigation';
import EditPatient from './EditPatient';
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/patient" element={<Patient/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;