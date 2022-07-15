import { themeChange } from "theme-change";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import {
  Navbar,
  Home,
  Login,
  Footer,
  Register,
  Courses,
  Instructors,
  Forums,
  Dashboard,
  TextCourse,
  VideoCourse,
  CoursePage
} from "./components";
import { RoutePaths } from "./utilities/routes";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <BrowserRouter>
        <div class="flex flex-col min-h-screen">
          <Navbar isLoggedIn={true} />
          <main class="flex-grow">
            <Routes>
              <Route path={RoutePaths.Home} element={<Home />} />
              <Route path={RoutePaths.Login} element={<Login />} />
              <Route path={RoutePaths.Register} element={<Register />} />
              <Route path={RoutePaths.Courses} element={<Courses />} />
              <Route path={RoutePaths.Instructors} element={<Instructors />} />
              <Route path={RoutePaths.Forums} element={<Forums />} />
              <Route path={RoutePaths.Dashboard} element={<Dashboard />} />
              <Route path={RoutePaths.Text} element={<TextCourse />} />
              <Route path={RoutePaths.Video} element={<VideoCourse />} />
              <Route path={RoutePaths.CoursePage} element={<CoursePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
