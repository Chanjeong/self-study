// 주어진 배열 nums의 누계 합(running sum)을 runningSum[i] = sum(nums[0]...nums[i])으로 정의합니다. nums의 누계 합을 반환합니다.
const runningSum = (nums) => {
    // return nums.map((num, index) => (num = nums.slice(0, index + 1).reduce((sum, num) => (sum += num), 0)));
    let sum = 0;
    return nums.map((n) => {
        sum += n;
        return sum;
    });
};

console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]
