import React, { useMemo } from "react";
import { getHerosByPublishers } from "../helpers/getHerosbyPublishers";
import { HeroCard } from "./HeroCard";

export const HerosList = ({ publisher }) => {
  const heroes = useMemo(() => {
    return getHerosByPublishers(publisher);
  }, [publisher]);
  return (
    <div className="row row-cols-3 g-3 ">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};
