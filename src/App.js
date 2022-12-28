import './App.css';
import { playableClasses, playableRazes, playlist } from "./resources.js"

function App() {
  console.log(playableClasses, playableRazes, playlist)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pathfinder Cosmos Quest</h1>
      </header>
    </div>
  );
}

export { App }
