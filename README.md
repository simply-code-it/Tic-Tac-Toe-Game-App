# Tic-Tac-Toe Game

This is a simple implementation of the classic Tic-Tac-Toe game built using ReactJS, TypeScript, and CSS.

# Deployment Link: https://tic-tac-toe-game-app-five.vercel.app/

## Technologies Used

- **ReactJS:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **CSS:** Styling the components.

## Game Design

The Tic-Tac-Toe game consists of a 3x3 grid where two players take turns marking a cell in the grid with their respective markers (typically 'X' and 'O'). The first player to place three of their markers in a horizontal, vertical, or diagonal row wins the game.

### Components

The game is designed using the following main components:

1. **Board:** The main game board that holds the state of the game and renders the squares.
2. **Square:** Represents each cell in the game grid. It is a clickable button that displays the current marker ('X' or 'O').
3. **Game:** The main container that holds the board and manages the game's state, including the current player and the game's status (win/lose/draw).

### Game Logic

- **State Management:** The game's state is managed using React's `useState` hook.
- **Turn Management:** The game alternates turns between two players.
- **Win Condition:** The game checks for winning conditions after each move by inspecting rows, columns, and diagonals.
- **Draw Condition:** If all cells are filled and no player has won, the game is a draw.

### How to Play

1. Clone the repository to your local machine.
2. Install the dependencies using `npm install`.
3. Start the application using `npm run dev`.
4. Open your browser and navigate to `http://localhost:5173`.
5. Click on any square to make a move. The game will alternate turns between 'X' and 'O'.
6. The game will display the winner once a player has aligned three of their markers in a row, column, or diagonal. If all squares are filled and there is no winner, the game will declare a draw.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by the classic Tic-Tac-Toe game.
- Built using ReactJS and TypeScript for a modern web development experience.
