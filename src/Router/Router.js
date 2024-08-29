// components/Router.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootLayout from '@/app/layout';
import AboutUs from "@/app/pages/Aboutus"


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route  element={<RootLayout />} >
        <Route path="/pages/Abs" element={<AboutUs />} />
      
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
