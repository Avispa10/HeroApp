import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";

import { HerosRoutes } from "../heroes/routes/HerosRoutes";

import { NavBar } from "../UI/components/NavBar";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HerosRoutes />} />
      </Routes>
    </>
  );
};
