import React, { useState } from 'react';
import TotalScore from '../TotalScore';
import NuberSelector from './NuberSelector';
import { styled } from 'styled-components';
import RoleDice from './RoleDice';
import { Button, OutLineButton } from '../styled/Button';
import Rules from './Rules';

const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState(false);
    const [showRules, setShowRules] = useState();

    const generateRandomNumber = (min, max) => {
        if (!selectedNumber) {
            setError('You Have Not Selected Any Number')
            return
        }

        let DiceNumber = Math.floor(Math.random() * (max - min) + min)
        setCurrentDice(DiceNumber)
        console.log(DiceNumber);

        if (selectedNumber === DiceNumber) {
            setScore((pre) => pre + DiceNumber)
        } else {
            setScore((pre) => pre - 2)
        }
        setSelectedNumber(undefined)
    }

    const resetScore = () => {
        setScore(0)
    }
    return (
        <GamePlayContainer>
            <div className="top_section">
                <TotalScore score={score} />
                <NuberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setEroor={setError} />
            </div>
            <RoleDice currentDice={currentDice} setCurrentDice={setCurrentDice} generateRandomNumber={generateRandomNumber} />
            <div className="btns">
                <OutLineButton onClick={resetScore}>Reset Score</OutLineButton>
                <Button onClick={()=> setShowRules(pre => !pre)}>{showRules ? 'Hide' : 'Show' } Rules</Button>
            </div>
            {showRules && <Rules />}
        </GamePlayContainer>
    );
};

export default GamePlay;

const GamePlayContainer = styled.main`

padding-top:60px;

.top_section{
    display:flex;
    justify-content: space-around;
    align-items: end;
}
.btns{
    display:flex;
    flex-direction:column;
    align-items: center; 
    justify-content: center;
    gap:18px;
    margin:10px 100px 0 0;
}
`