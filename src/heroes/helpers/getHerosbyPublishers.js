import heroes from "../data/heroes";

export const getHerosByPublishers = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error("No Publisher match with this list");
  } else {
    return heroes.filter((hero) => hero.publisher === publisher);
  }
};
