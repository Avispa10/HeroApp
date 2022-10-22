import { Link } from "react-router-dom";

export const HeroCard = (hero) => {
  const heroImgUrl = `src/heroes/assets/heroes/${hero.id}.jpg`;

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div
            className="col-5
          "
          >
            <img src={heroImgUrl} className="card-img" alt={hero.superhero} />
          </div>
          <div
            className="col-7
           card-body"
          >
            <div className="col-8">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className="card-text">{hero.alterEgo}</p>
              {hero.alterEgo !== hero.characters && <p>{hero.characters}</p>}
              <p className="card-text">
                <small className="text-muted">{hero.firstAppearance}</small>
              </p>

              <Link to={`/hero/${hero.id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
