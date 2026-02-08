import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import GuestRoute from "./Components/Guards/GuestRoute";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import AllCourses from "./Pages/AllCourses/AllCourses";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import AppBreadcrumbs from "./Components/Common/AppBreadcrumbs";
import { Box } from "@mui/material";
import RefundPolicy from "./Pages/RefundPolicy/RefundPolicy";
import Blog from "./Pages/Blog/Blog";
import { colors } from "./Config/theme";
import BlogInsight from "./Pages/Blog/BlogInsight";
import Career from "./Pages/Career/Career";
import CareerDetails from "./Pages/Career/CareerDetails";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AdminRoute from "./Components/Guards/AdminRoute";
import AdminLayout from "./Components/Layout/AdminLayout";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import TopFeatures from "./Pages/Admin/TopFeatures/TopFeatures";
import Category from "./Pages/Admin/Category/Category";
import Program from "./Pages/Admin/Program/Program";
import StaticPage from "./Pages/Admin/StaticPage/StaticPage";

function App() {
  return (
    <BrowserRouter>
      {/* Wrapper to ensure Footer stays at bottom if content is short */}
      {/* Note: Admin Layout should probably NOT have the main Header/Footer if it has its own sidebar. 
          However, the current structure wraps everything in Header/Footer. 
          We might need to adjust this if Admin pages should be standalone.
          For now, I'll put Admin routes OUTSIDE the main Box wrapper if possible, or inside.
          Let's keep it simple: Admin pages will render INSIDE the main Box but AdminLayout will handle its own structure. 
          Actually, usually Admin apps don't share the public Header/Footer.
      */}

      <Routes>
        {/* Admin Routes - Standalone Layout */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="top-features" element={<TopFeatures />} />
            <Route path="category" element={<Category />} />
            <Route path="program" element={<Program />} />
            <Route path="static-pages" element={<StaticPage />} />{" "}
            {/* Placeholder */}
            <Route path="career" element={<AdminDashboard />} />{" "}
            {/* Placeholder */}
            <Route path="faq" element={<AdminDashboard />} />{" "}
            {/* Placeholder */}
            <Route path="contact-us" element={<AdminDashboard />} />{" "}
            {/* Placeholder */}
            <Route path="company" element={<AdminDashboard />} />{" "}
            {/* Placeholder */}
            <Route path="team-member" element={<AdminDashboard />} />{" "}
            {/* Placeholder */}
            {/* Redirect /admin to /admin/dashboard */}
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Route>

        {/* Public Routes - With Header/Footer */}
        <Route
          path="*"
          element={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                backgroundColor: colors.mainBg,
              }}
            >
              <Header />

              <Box component="main" sx={{ flexGrow: 1 }}>
                <Routes>
                  {/* Routes that don't need authentication (Public) */}
                  <Route path="/" element={<Home />} />
                  <Route path="/all-courses" element={<AllCourses />} />
                  <Route path="/course/:id" element={<CourseDetails />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog-insight" element={<BlogInsight />} />
                  <Route path="/career" element={<Career />} />
                  <Route
                    path="/career-details/:id"
                    element={<CareerDetails />}
                  />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/about-us" element={<AboutUs />} />

                  {/* Catch all */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Box>

              <Footer />
            </Box>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
