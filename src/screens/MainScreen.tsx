import React, { useContext, useEffect, useState } from "react";

import { PokemonCard } from "../components/PokemonCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { getPokemons } from "../helpers/pokeApiProvider";
import { Pokemon } from "../interfaces/PokeApiResponse";
import { FilterContent } from "../FilterContent";

// https://pokeapi.co/api/v2/pokemon?limit=15
// https://app.quicktype.io

export const MainScreen: React.FC = () => {
  const filterContent = useContext(FilterContent);
  const [pokemonData, setPokemonData] = useState<Pokemon[] | undefined>(
    undefined
  );

  let body;

  const getCard = (pokemon: Pokemon, filter: string) => {
    if (pokemon.name.includes(filter))
      return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
  };

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemonData(data);
    });
  }, []);

  if (pokemonData) {
    body = (
      <div
        id="pokemonContainer"
        className="mt-2 container animate__animated animate__fadeIn"
      >
        {pokemonData.map((pd) => {
          return getCard(pd, filterContent.filter);
        })}
      </div>
    );
  } else {
    body = <LoadingSpinner />;
  }

  return body;
};
