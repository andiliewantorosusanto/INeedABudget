import React from 'react';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import DesktopNav from './components/desktopnav/DesktopNav';
import MobileNav from './components/mobilenav/MobileNav';
import Category from './pages/category/Category';
import Home from './pages/home/Home';

function App() {

  return (
    <BrowserRouter>
      <div className="relative min-h-screen md:flex">
        <MobileNav />
        <DesktopNav />

        <div className="flex-1 p-10 text-2xl font-bold">
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
