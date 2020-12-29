import React from "react";
import { useHistory } from "react-router-dom";
import { Pokemon } from "../interfaces/PokeApiResponse";

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }, props) => {
  const history = useHistory();

  return (
    <div
      id="customCard"
      className="card bg-dark text-white my-3 mx-3"
      onClick={() => history.push(`/${pokemon.id}`)}
    >
      <div className="card-header">
        <h5>{pokemon.id + ". " + pokemon.name}</h5>
      </div>
      <div className="card-body d-flex justify-content-center align-items-center">
        <img src={pokemon.sprites["front_default"]} alt="Pokemon" />
      </div>
    </div>
  );
};
