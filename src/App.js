import './App.css';
import { useState, useEffect } from "react"
import Form from './components/Form';
import ShowDogImage from './components/ShowDogImage';

function App() {

  const [randomDogPic, setRandomDogPic] = useState("dog");

  const getRandomDogPic = async () => {
  const response = await fetch(
    "https://dog.ceo/api/breeds/image/random"
  )
  const data = await response.json();
  setRandomDogPic(data);
  };

  const randomURL = "https://dog.ceo/api/breeds/image/random"

  useEffect(() => {
    getRandomDogPic()}, []);


  return (
    <div className="App">
      <Form getRandomDogPic={getRandomDogPic}/>
      <ShowDogImage randomDogPic={randomDogPic}/>
    </div>
  );
};

export default App;
