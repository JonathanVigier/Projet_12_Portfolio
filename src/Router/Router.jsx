import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../containers/Section/Header/Header";

import Home from "../pages/Home";
import ProjectPage from "../pages/projectPage/projectPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
