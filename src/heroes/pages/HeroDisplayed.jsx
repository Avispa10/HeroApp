import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroDisplayed = () => {
  const { heroId } = useParams();

  const hero = useMemo(() => {
    console.log("useMemo");
    return getHeroById(heroId);
  }, [heroId]);
  console.log(hero);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  const navigate = useNavigate();

  const onNavigateBack = () => {
    if (hero.publisher === "DC Comics") {
      navigate(-1);
    } else navigate("/marvel");
  };
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../src/heroes/assets/heroes/${heroId}.jpg`}
          alt={hero.alterEgo}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="">
          <li className="list-group-item">
            <b> Alterego:</b>
            {hero.alterEgo}
          </li>
          <li className="list-group-item">
            <b> Publisher:</b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b> First appearance</b>
            {hero.firstAppearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
