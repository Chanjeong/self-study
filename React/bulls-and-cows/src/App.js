import './App.css';
import Game from './Game';
import GameProvider from './helper/GameProvider';

const App = () => {
    return (
        <GameProvider>
            <Game />
        </GameProvider>
    );
};

export default App;
