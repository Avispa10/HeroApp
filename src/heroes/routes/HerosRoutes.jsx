import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../../UI/components/NavBar";
import { DCPage } from "../pages/DCPage";
import { HeroDisplayed } from "../pages/HeroDisplayed";
import { MarvelPage } from "../pages/MarvelPage";
import { SearchHero } from "../pages/SearchHero";

export const HerosRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-2">
        <Routes>
          <Route path="dc" element={<DCPage />} />
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="search" element={<SearchHero />} />
          <Route path="hero/:heroId" element={<HeroDisplayed />} />
          <Route path="/*" element={<Navigate to="search" />} />
        </Routes>
      </div>
    </>
  );
};
