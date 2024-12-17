// 정수 배열 nums와 정수 target이 주어지면 nums의 두 요소의 합이 target과 같은 두 요소의 인덱스를 반환한다. 각 입력에는 정확히 하나의 해만 있으며 같은 요소를 두 번 사용할 수 없다.

// 어떤 순서로든 답을 반환할 수 있다.

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
