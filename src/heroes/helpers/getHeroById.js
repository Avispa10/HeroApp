import React from "react";
import heroes from "../data/heroes";

export const getHeroById = (id) => {
  const res = heroes.find((hero) => hero.id === id);
  //console.log(res);

  return res;
};
