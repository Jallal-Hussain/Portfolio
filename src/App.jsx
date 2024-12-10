// import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop.js";

import "./App.css";

function App() {
  console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/blog" exact element={<BlogPage />} />
          <Route path="/projects" exact element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />{" "}
          {/*Catch-all route for unmatched paths */}
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
