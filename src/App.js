import React from 'react';
import { useState, useEffect } from "react";
import './App.css';
import getPokemon from "./getPokemon";

function App() {
const [PokemonID, setPokemonID] = useState(1)
const [Pokemon, setPokemon] = useState()


useEffect(() => {
  const getPokemons = async () => {
    try {
      const response = await getPokemon(PokemonID);
      setPokemon(response);
    } catch (error) {
      console.log(error);
    }
  };

  getPokemons();
}, [PokemonID]);

const HandleClick = (Button_event) => {
  if (Button_event === "Direita"){
      if(PokemonID < 898){
        setPokemonID(PokemonID+1)
      }else{
        setPokemonID(1)
      }}else{
        if(PokemonID >= 2){
          setPokemonID(PokemonID-1)
        }else{
          setPokemonID(898)
        }}
}

console.log(PokemonID);

  return (
    <main>
    <div className="poke--card">
      
      <div className="Name-type--div">
        {Pokemon && (
          <h2 className="Name">
            {Pokemon.name}
          </h2>
        )}
        
        {Pokemon && (
          <div className="Type--div">
          <h2 className="Type1">
            {Pokemon?.types?.[0]?.type?.name}
          </h2>
          <h2> </h2>
          <h2 className="Type2">
            {Pokemon?.types?.[1]?.type?.name}
          </h2>
          </div>
        )}

      </div>

      <div className="Info--div">
        {Pokemon && (
          <img
          alt="pokemon" 
          className="Pokemon"
          src={Pokemon?.sprites?.other["official-artwork"].front_default}/>
        )}

        {Pokemon &&(
          <div className="Description">
            <h2>
              hp: {Pokemon?.stats?.[0]?.base_stat}
            </h2>

            <h2>
              height: {Pokemon?.height}
            </h2>

            <h2>
              weight: {Pokemon?.weight}
            </h2>
          </div>
        )}

          {Pokemon && (
          <div className="Abilities--div">
            <h2 className="Abilities">
              {Pokemon?.abilities?.[0]?.ability?.name}
            </h2>

            <h2 className="Abilities">
              {Pokemon?.abilities?.[1]?.ability?.name}
            </h2>
          </div>
        )}
      </div>

      <div className="Number-button--div">

        <button
        id="left-button"
        value={"Esquerda"}
        className="Preview--button"
        onClick={() => HandleClick('Esquerda')}></button>

        <p className="Number"> {PokemonID} </p>
        <button
        id="right-button"
        value={"Direita"}
        className="Next--button"
        onClick={() => HandleClick('Direita')}></button>

      </div>
    </div>
    </main>
  );
}

export default App;
