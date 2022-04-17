import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
