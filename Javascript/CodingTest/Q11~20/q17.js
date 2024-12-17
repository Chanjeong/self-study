const star3 = (n) => {
    for (let i = n; i >= 1; i--) {
        console.log(' '.repeat(n - i) + '*'.repeat(i));
    }
};

star3(5);
// *****
//  ****
//   ***
//    **
//     *
