import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Category from './pages/category/Category';
import DesktopNav from './components/desktopnav/DesktopNav';
import Home from './pages/home/Home';
import MobileNav from './components/mobilenav/MobileNav';
import React from 'react';

function App() {

  return (
    <BrowserRouter>
      <div className="relative min-h-screen md:flex">
        <MobileNav />
        <DesktopNav />
        
        <div className="flex-1 p-10 text-md font-bold bg-gray-100 w-[85%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
