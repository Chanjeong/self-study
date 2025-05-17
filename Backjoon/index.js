let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [monthStr, dayStr, year, timeStr] = input[0].split(' ');
const [hour, minute] = timeStr.split(':').map(Number);
const day = parseInt(dayStr.replace(',', ''), 10);
console.log(hour, minute);
// 월 이름 → 숫자 매핑
const monthMap = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12
};

const month = monthMap[monthStr];

const isLeap = y => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
const totalDays = isLeap(+year) ? 366 : 365;

const inputMonth = String(month).padStart(2, '0');
const inputDay = String(day).padStart(2, '0');
const inputHour = String(hour).padStart(2, '0');
const inputMinute = String(minute).padStart(2, '0');

const now = new Date(
  `${year}-${inputMonth}-${inputDay}T${inputHour}:${inputMinute}:00`
);
const startOfYear = new Date(`${year}-01-01T00:00:00`);

// 밀리초 차이 → 초 → 비율
const passedSeconds = (now - startOfYear) / 1000;
const totalSeconds = totalDays * 24 * 60 * 60;

const percentage = (passedSeconds / totalSeconds) * 100;

console.log(percentage.toPrecision(17));
