import { useGame } from '../helper/GameProvider';

const AttemptLogs = () => {
    const { logs } = useGame();
    return (
        <>
            <h2>기록</h2>
            <ol>
                {logs.map((item, index) => {
                    return <li key={`${item}_${index}`}>{item.toString()}</li>;
                })}
            </ol>
        </>
    );
};

export default AttemptLogs;
