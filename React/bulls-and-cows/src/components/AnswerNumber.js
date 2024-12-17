import { useGame } from '../helper/GameProvider';

const AnswerNumber = () => {
    const { isSuccess, number } = useGame();
    return (
        <header style={{ marginBottom: '16px' }}>
            <span>{isSuccess ? number : '----'}</span>
        </header>
    );
};

export default AnswerNumber;
