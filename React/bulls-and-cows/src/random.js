export function generateRandomNumber() {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 1 ~ 9까지 숫자를 이용할 거에요.
  const pickedNumbers = shuffle(candidates).splice(0, 4); // 앞에서부터 4자리를 잘라서 반환
  return pickedNumbers;
}

function shuffle(array) {
  // random 값은 0 ~ 1 사이의 값으로 -0.5를 더해주면 범위는 -0.5 ~ 0.5 사이로 무작위로 음수, 양수가 번갈아나타나고
  // 정렬을 할 때 값을 바꾸기도 하고 안바꾸기도 하면서 랜덤하게 array 값을 섞게 됩니다.
  return array.sort(() => Math.random() - 0.5);
}