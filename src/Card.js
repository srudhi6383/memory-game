import React from 'react';
import { Card as MUICard, CardContent, Typography } from '@mui/material';
import './Card.css';

const Card = ({ card, onClick }) => (
  <MUICard onClick={onClick} className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}>
    <CardContent className="card-content">
      <Typography variant="h5" component="div">
        {card.isFlipped || card.isMatched ? card.symbol : ''}
      </Typography>
    </CardContent>
  </MUICard>
);

export default Card;