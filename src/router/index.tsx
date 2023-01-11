import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import SideBar from "../components/layout/sidebar";
import Edit from "../pages/edit";
import Home from "../pages/home";
import GlobalStyle from "../styles/global";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="*" element={<SideBar />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
