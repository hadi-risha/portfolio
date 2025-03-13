import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import CopyRight from "./components/CopyRight";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <div className="pt-10 w-full h-auto bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <CopyRight />
      </div>
    </Router>
  );
}

export default App;

{
  /* <p className="font-[Inter] font-light">This is Inter Light</p>
    <p className="font-[Inter] font-semibold">This is Inter SemiBold</p>
    <p className="font-[Inter] font-bold">This is Inter Bold</p> */
}

{
  /* <p className="poppins-light">This is Light</p>
<p className="poppins-regular">This is Regular</p>
<p className="poppins-bold">This is Bold</p> */
}

{
  /* <p className="font-playfair text-black">Done Projects</p> */
}
