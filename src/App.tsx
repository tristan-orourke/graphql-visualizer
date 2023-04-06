import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GraphVisualizer from './components/GraphVisualizer';

function App() {

  return (
    <div className="App">
      <GraphVisualizer graphqlEndpoint="https://talent.canada.ca/graphql" />
    </div>
  );
}

export default App

