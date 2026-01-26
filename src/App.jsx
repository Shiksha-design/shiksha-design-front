import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import GuestRoute from './Components/Guards/GuestRoute';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import AllCourses from './Pages/AllCourses/AllCourses';
import CourseDetails from './Pages/CourseDetails/CourseDetails';
import AppBreadcrumbs from './Components/Common/AppBreadcrumbs';
import { Box } from '@mui/material';
import RefundPolicy from './Pages/RefundPolicy/RefundPolicy';
import Blog from './Pages/Blog/Blog';
import { colors } from './Config/theme';

function App() {
  return (
    <BrowserRouter>
      {/* Wrapper to ensure Footer stays at bottom if content is short */}
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: colors.mainBg }}>
        <Header />

        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            {/* Routes that don't need authentication (Public) */}
            <Route path="/" element={<Home />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/blog" element={<Blog />} />


            {/* Catch all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
