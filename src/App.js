import "./utils/install-xhr-intercept";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hello from "./pages/hello";
import Home from "./pages/home";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hello" element={<Hello />}></Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
