import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./Home";
import { Loading } from "./Loading";

const Router = () => {
  const [exist, setExist] = useState() as any;
  const username = window.localStorage.getItem("h98-username");
  useEffect(() => {
    setExist(username);
  }, [username]);
  return (
    <HashRouter>
      <Routes>
        {exist === null ? (
          <Route path="/" element={<Loading />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </HashRouter>
  );
};

export default Router;
