// 구구단을 출력하는 함수를 구현한다.

const printMultiplicationTable = () => {
    for (let i = 2; i < 10; i++) {
        console.log(`=== ${i}단 ===`);
        for (let j = 1; j < 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
};

printMultiplicationTable();
