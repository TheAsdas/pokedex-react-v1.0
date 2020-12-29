import React, { useEffect, useState } from "react";

import { PokemonCard } from "../components/PokemonCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { getPokemons } from "../helpers/pokeApiProvider";
import { Pokemon } from "../interfaces/PokeApiResponse";
import { RootState } from "../redux/reducers/rootReducer";
import { IFilterState } from "../redux/reducers/filterReducer";
import { useSelector } from "react-redux";

// https://pokeapi.co/api/v2/pokemon?limit=15
// https://app.quicktype.io

export const MainScreen: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[] | undefined>(
    undefined
  );

  const { filter } = useSelector<RootState, IFilterState>(
    (state) => state.filter
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
          return getCard(pd, filter);
        })}
      </div>
    );
  } else {
    body = <LoadingSpinner />;
  }

  return body;
};
