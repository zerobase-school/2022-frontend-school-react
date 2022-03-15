import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import TechPage from "./components/TechPage";
import BlogPage from "./components/BlogPage";
import JavascriptPage from "./components/JavascriptPage";
import ReactPage from "./components/ReactPage";
import ReactDocPage from "./components/ReactDocPage";

function App() {
  // root url : main page component
  // tech url : tech page component
  // blog url : blog page component

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"tech"} element={<TechPage />}>
            <Route path="javascript" element={<JavascriptPage />} />
            <Route path="react" element={<ReactPage />} />
            <Route path="react/:docId" element={<ReactDocPage />} />
          </Route>
          <Route path={"blog"} element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
