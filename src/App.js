/* eslint-disable no-global-assign */
/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const [img, setImage] = useState();
  const [number, setNumber] = useState(1);

  URL = `https://pokeapi.co/api/v2/pokemon/${number}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        setName(response.data.name);
        setWeight(response.data.weight);
        setImage(response.data.sprites.other.dream_world.front_default);
      })
      .catch((err) => {
        window.alert(err);
      });
  }, [URL]);

  // const show = () => {

  // };

  return (
    <div className="App">
      <h1>Pokemon for Graphql</h1>

      <input
        placeholder="Enter no."
        type={"number"}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button>show</button>
      <h2>Name: {name}</h2>
      <h2>Weight: {weight}</h2>
      <img src={data ? img : "<p>Loading..</p>"} />
      <p>
        <b>My Abilities</b>
      </p>
      {data
        ? data.abilities.map((value, key) => {
            return <div key={key}>{value.ability.name}</div>;
          })
        : ""}
      <p></p>
    </div>
  );
}

export default App;
