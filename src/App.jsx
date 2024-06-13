import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import Preloader from './Components/Preloader/Preloader';
import FinincalHilight from './Pages/Finincal-Hilights/FinincalHilight';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Pages/Home/LandingPage';
import ExcelTable from './Components/ExcelData/ExcelData';
function App() {
  // Check if content has already been loaded
  const [isLoaded, setIsLoaded] = useState(
    localStorage.getItem('isLoaded') === 'true'
  );

  // Function to handle content loading
  const loadContent = () => {
    // Your content loading logic here

    // Set isLoaded to true and store it in localStorage
    setIsLoaded(true);
    localStorage.setItem('isLoaded', 'true');
  };

  useEffect(() => {
    // Check if content has already been loaded
    if (!isLoaded) {
      // If not loaded, load content
      loadContent();
    }
  }, [isLoaded]);

  // Render the preloader if content is not loaded
  if (!isLoaded) {
    return <Preloader />;
  }

  // Render the app content once loaded
  return (
    <div className='app-parent'>
      <BrowserRouter>
      <Navbar />
     
<Routes>

<Route  path='/' element={<LandingPage/>}/>   
      <Route path='/'  element={<LandingPage/>}/>
      <Route path='/finincial-highlights' element={<FinincalHilight/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
