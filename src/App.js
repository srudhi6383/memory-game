import React, { useState, useEffect } from 'react';
import Card from './Card';
import { Button, MenuItem, Select, Typography, Container, Grid as Grid2, Box } from '@mui/material';
import './App.css';

const difficulties = {
  easy: 4,
  medium: 6,
  hard: 8,
};


const symbols = ['★', '♠', '♣', '♦', '♥', '☀', '☂', '♬', '✿', '⚽', '♕', '⚓', '☕', '✈', '✪', '✌'];

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [difficulty, setDifficulty] = useState(difficulties.easy);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      startGame();
    }
  }, [difficulty, gameStarted]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime(prev => prev + 1), 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const shuffleCards = () => {
    const numPairs = (difficulty * difficulty) / 2;
    const selectedSymbols = symbols.slice(0, numPairs);
    const shuffledCards = [...selectedSymbols, ...selectedSymbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, i) => ({
        id: i,
        symbol,
        isFlipped: false,
        isMatched: false,
      }));
    return shuffledCards;
  };

  const startGame = () => {
    setCards(shuffleCards());
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setTime(0);
    setIsRunning(true);
  };

  const handleStartClick = () => {
    setGameStarted(true);
    setIsRunning(true);
  };

  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || flippedCards.some(card => card.id === id)) return;

    const updatedCards = cards.map(card =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(updatedCards);

    const clickedCard = updatedCards.find(card => card.id === id);
    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      if (newFlippedCards[0].symbol === newFlippedCards[1].symbol) {
        setMatchedPairs(matchedPairs + 1);
        setCards(prevCards =>
          prevCards.map(card =>
            newFlippedCards.some(flippedCard => flippedCard.id === card.id)
              ? { ...card, isMatched: true }
              : card
          )
        );
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              newFlippedCards.some(flippedCard => flippedCard.id === card.id)
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const handleRestart = () => {
    setGameStarted(false);
    setIsRunning(false);
    startGame();
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(difficulties[event.target.value]);
  };

  useEffect(() => {
    if (matchedPairs === (difficulty * difficulty) / 2) {
      setIsRunning(false);
    }
  }, [matchedPairs, difficulty]);

  return (
    <Container className="App" maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>Memory Game</Typography>
      
      {!gameStarted ? (
        <Button variant="contained" color="primary" onClick={handleStartClick}>Start Game</Button>
      ) : (
        <>
          <Box className="button-container">
            <div>
              <Typography variant="h6">Difficulty:</Typography>
              <Select value={Object.keys(difficulties).find(key => difficulties[key] === difficulty)} onChange={handleDifficultyChange}>
                {Object.keys(difficulties).map(level => (
                  <MenuItem key={level} value={level}>{level.charAt(0).toUpperCase() + level.slice(1)}</MenuItem>
                ))}
              </Select>
            </div>
            <Button variant="contained" color="primary" onClick={handleRestart}>Restart</Button>
          </Box>
          <Box className="info-bar">
            <Typography variant="body1">Moves: {moves}</Typography>
            <Typography variant="body1">Time: {time}s</Typography>
            <Typography variant="body1">Matches: {matchedPairs}</Typography>
          </Box>
          <Grid2 container spacing={2} justifyContent="center" style={{ gridTemplateColumns: `repeat(${difficulty}, 1fr)` }}>
            {cards.map(card => (
              <Grid2 item xs={12 / difficulty} key={card.id}>
                <Card card={card} onClick={() => handleCardClick(card.id)} />
              </Grid2>
            ))}
          </Grid2>
        </>
      )}

      {gameStarted && matchedPairs === (difficulty * difficulty) / 2 && (
        <Typography variant="h5" color="secondary" mt={4}>
          Congratulations! You completed the game in {moves} moves and {time} seconds.
        </Typography>
      )}
    </Container>
  );
}

export default App;
