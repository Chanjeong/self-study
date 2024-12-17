/* 출석 체크 */

function Dictionary(items = {}) {
    this.items = items;
}

Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key);
};

Dictionary.prototype.set = function (key, value) {
    this.items[key] = value;
};

/* user code */
function answer(class_1, class_2) {
    let result = [];

    let dic = new Dictionary();

    for (let i = 0; i < class_1.length; i++) {
        dic[class_1[i]] = (dic[class_1[i]] || 0) + 1;
    }

    for (let i = 0; i < class_2.length; i++) {
        dic[class_2[i]] = (dic[class_2[i]] || 0) + 1;
    }

    return Object.keys(dic).filter((el) => dic[el] === 2);
}

/* main code */
let input = [
    // TC: 1
    [
        ['Kali', 'Oliver', 'Naomi'],
        ['Oliver', 'Naomi', 'Maya'],
    ],

    // TC: 2
    [
        ['Roxy', 'Olga', 'Kara', 'Nana'],
        ['Oliver', 'Roxy', 'Kara', 'Nana', 'Maya'],
    ],

    // TC: 3
    [
        ['Roxy', 'Ravi', 'Nana', 'Rei', 'Karis', 'Mana', 'Naomi'],
        ['Olga', 'Nana', 'Rei', 'Naomi', 'Kali', 'Ravi', 'Kara'],
    ],
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1]));
}
