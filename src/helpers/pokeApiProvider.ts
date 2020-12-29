import Axios from "axios";
import {
  PokeAPIResponse,
  Pokemon,
  Result
} from "../interfaces/PokeApiResponse";

export const getPokemonData = async (poke: Result[]) => {
  const list = [];

  try {
    for (let p of poke) {
      const { data } = await Axios.get<Pokemon>(p.url);
      list.push(data);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }

  return list;
};

export const getSinglePokemon = async (id: string) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const { data } = await Axios.get<Pokemon>(url);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemons = async (limit = 151) => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=" + limit;

  try {
    const { data } = await Axios.get<PokeAPIResponse>(url);

    const axiosReponses = await Promise.all(
      data.results.map((result) => Axios.get<Pokemon>(result.url))
    );
    const pokemons = axiosReponses.map((ar) => ar.data);

    return pokemons;
  } catch (error) {
    console.log(error);
  }
};
