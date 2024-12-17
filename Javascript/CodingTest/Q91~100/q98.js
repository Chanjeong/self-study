// i번째 날의 주식 가격을 나타내는 prices 배열이 주어진다. 수익을 극대화할 수 있는 날 주식을 사고 팔아서 얻을 수 있는 최대 수익을 반환한다. 수익을 얻을 수 없으면 0을 반환한다.
const maxProfit = (prices) => {
    let largest = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > largest) largest = prices[j] - prices[i];
        }
    }
    return largest;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
