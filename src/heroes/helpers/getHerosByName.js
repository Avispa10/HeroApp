import heroes from "../data/heroes";

export const getHerosByName = (name) => {
  name = name.trim();
  if (name.length === 0) {
    return [];
  }

  name.toLocaleLowerCase();
  const heroArray = heroes.filter((hero) => {
    return hero.superhero.toLocaleLowerCase().includes(name);
  });
  console.log("getHerosByName called");
  return heroArray;
};
