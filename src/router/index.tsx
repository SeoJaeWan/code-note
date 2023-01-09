import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Edit from "../pages/edit";
import Home from "../pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
