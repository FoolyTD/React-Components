import React, { useState } from "react";
import "./App.css";

const imageSrc =
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg";
function WelcomeBack({name = "valued customer"}) {
  return <p>Welcome back, {name}!</p>
}
function DisplayImage() {
  return <img src={imageSrc} alt="yeet"/>
}

const handleClick = (e) => console.log(e.target);

const button = <button onClick={handleClick}>Click Me!</button>

/* function App() {
  return (
    <>
    <WelcomeBack name="Jordan" />
    <WelcomeBack name="Jose" />
    <DisplayImage />
    {button}
    </>
      );
} */
function App() {
  const [lazy, setLazy] = useState(true);
  console.log("Are you lazy?:",lazy)
  return (
    <section>
      <p>Are you lazy?</p>
      <button onClick={() => {
        setLazy(!lazy); 
        console.log(lazy)
        }}>{lazy ? "You LAZY" : "You Not Lazy"}</button>
    </section>
  )
}

export default App;
