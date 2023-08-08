import { useState } from 'react';
import './App.css';
import StartDicePage from './Components/StartDicePage';
import GamePlay from './Components/GamePlay';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleButton = () => {
    setIsGameStarted((pre) => !pre)
  }

  return (
    <>
      {
        isGameStarted ? <GamePlay /> : <StartDicePage toggle={toggleButton} />
      }

    </>
  );
}

export default App;
