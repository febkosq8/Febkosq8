import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
const Febkosq8 = lazy(() => import("./Pages/Febkosq8"));
const Jappan = lazy(() => import("./Pages/Jappan"));
const ShortURL = lazy(() => import("./Pages/ShortURL"));
const Fail = lazy(() => import("./components/Fail"));
function App() {
  useEffect(() => {
    document.title = "Febkosq8";
  }, []);
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Febkosq8 />} />
          <Route path="/Jappan" element={<Jappan />} />
          <Route path="/ShortURL" element={<ShortURL />} />
          <Route path="/ShortURL/:redirectUrl" element={<ShortURL />} />
          <Route path="/Loading" element={<Loading />} />
          <Route path="/404" element={<Fail />} />
          <Route path="*" element={<Fail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
