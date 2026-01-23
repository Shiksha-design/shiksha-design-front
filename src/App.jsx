import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import GuestRoute from './Components/Guards/GuestRoute';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      {/* Wrapper to ensure Footer stays at bottom if content is short */}
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />

        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            {/* Routes that don't need authentication (Public) */}
            <Route path="/" element={<Home />} />


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
