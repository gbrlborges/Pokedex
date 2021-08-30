import axios from "axios"

const getPokemon = async (number) => {

  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${number}`
  );
  return data;
};

export default getPokemon;