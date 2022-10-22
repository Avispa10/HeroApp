import React from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";

import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../hooks/useForm";
import { getHerosByName } from "../helpers/getHerosByName";

export const SearchHero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  console.log(" SearchPage renders again");

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHerosByName(q);

  const showSearch = q === "";
  const showError = heroes.length === 0 && q > 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    /* if (searchText.trim().length < 1) {
      return;
    } */
    console.log(
      "Inside Submit fn,  Navigate function activates to search text"
    );
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="" onSubmit={onSearchSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                aria-describedby="basic-addon2"
                value={searchText}
                onChange={onInputChange}
              />
              <span className="input-group-text" id="basic-addon2">
                <button className="btn btn-primary" onClick={onSearchSubmit}>
                  Search
                </button>
              </span>
            </div>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {q === "" ? (
            <div className="alert alert-primary">Search a Hero</div>
          ) : (
            heroes.length === 0 && (
              
            )
          )} */}

          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a Hero
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          {
            <div className="row row-cols-1 g-3 ">
              {heroes.map((hero) => {
                return <HeroCard key={hero.id} {...hero} />;
              })}
            </div>
          }
        </div>
      </div>
    </>
  );
};
