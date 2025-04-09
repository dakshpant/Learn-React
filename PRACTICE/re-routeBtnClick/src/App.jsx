import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Btn from "./components/Btn.jsx"
function App() {
  return (
    <div>
      <BrowserRouter><Routes>
        <Route
          path="/"
          element={<Btn />}></Route>
        <Route
          path="/page1"
          element={<Page1 />} />
        <Route
          path="/page2"
          element={<Page2 />} />
        <Route
          path="/page3"
          element={<Page3 />} />
        <Route
          path="/page4"
          element={<Page4 />} />
      </Routes></BrowserRouter>
    </div>

  );
}

export default App;
