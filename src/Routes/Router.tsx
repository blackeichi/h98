import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Loading } from "./Loading";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
