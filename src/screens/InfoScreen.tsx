import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { getSinglePokemon } from "../helpers/pokeApiProvider";
import { Pokemon } from "../interfaces/PokeApiResponse";

export const InfoScreen: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<any>();

  console.log(location);

  useEffect(() => {
    console.log("kachigga");
    setLoading(true);
    getSinglePokemon(id).then((data) => {
      setPokemon(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!pokemon) {
    return <h1 className="m-auto">Este Pokémon no existe.</h1>;
  }

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center animate__animated animate__fadeIn">
        <div className="card bg-dark text-white mt-4 p-4">
          <h1 className="card-header">
            {pokemon.id}. {pokemon.name.toUpperCase()}
          </h1>
          <img
            className="card-body"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="Imágen del Pokémon."
          />
        </div>
        <div className="card bg-dark text-white mt-4">
          <div className="d-flex">
            {Object.keys(pokemon.types).map((i) => {
              const typeName = pokemon.types[i].type.name;

              return <h1 className="mx-5 my-2">{typeName.toUpperCase()}</h1>;
            })}
          </div>
        </div>

        <div className="card bg-dark text-white mt-4">
          <h1 className="card-header">Movimientos</h1>
          <table className="table table-hover table-dark">
            <tbody>
              {Object.keys(pokemon.moves).map((i) => {
                return (
                  <tr>
                    <td>{pokemon.moves[i].move.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

//https://es.reactjs.org/docs/hooks-effect.html
