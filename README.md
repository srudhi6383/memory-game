# Memory Game

A classic memory-matching game built with React and Material UI. This game allows players to test their memory skills by matching pairs of cards within a set grid size. It also tracks the time taken, moves, and number of matched pairs.

## Features

- **Adjustable Difficulty**: Choose easy, medium, or hard levels to set the grid size and card pairs.
- **Start and Restart Options**: Start the game with a dedicated button that begins the timer, or restart at any time to reset the board and timer.
- **Move Counter and Timer**: Track the number of moves and elapsed time while playing.
- **Win Screen**: Get feedback on your performance with a summary of moves and time taken when you complete the game.


## Installation

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

### Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/srudhi6383/memory-game.git
   ```
2. **Navigate to the Project Directory**:
    ```bash
      cd memory-game
    ```
3. **Install Dependencies: Use npm**:
      ```bash
        npm install
      ```
     Or, if you prefer yarn:

     ```bash
      yarn install
     ```
4. **Start the Development Server**:
     ```bash
       npm start
     ```
      Or with yarn:
      ```bash
      yarn start
      ```
5. **Open the Application**: Open your browser and go to ```http://localhost:3000``` to play the game.

### Dependencies
- **React**: JavaScript library for building the user interface.
- **Material UI**: For styling components with a modern UI design.
- **@emotion/react** and **@emotion/styled**: Required by Material UI for styling support.
- **react-dom**: Provides DOM-specific methods used at the application's entry point.

To install all dependencies, run:
```bash
npm install
```
or
```bash
yarn install
```

### How to Play
1. **Select Difficulty**: Choose a difficulty level (Easy, Medium, Hard) that sets the grid size.
2. **Click Start**: Press the "Start Game" button to begin and start the timer.
3. **Match Cards**: Click on two cards to flip them. If they match, they stay flipped. If not, they flip back after a short delay.
4. **Track Your Progress**: The number of moves and time elapsed are shown on the screen.
5. **Win the Game**: Once all pairs are matched, a message displays the final time and moves taken.

### Additional Information
- **Responsive Design**: The app layout adjusts to various screen sizes.
- **Restart Button**: Allows players to reset the game at any time.
- **End Game Summary**: Shows your final time and move count when you complete the game.
Difficulty Level Adjustment: Adjusts the number of pairs to match, making it suitable for various skill levels.
