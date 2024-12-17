const star5 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(' '.repeat(n - 1 - i) + '*'.repeat(2 * i + 1));
    }
};

star5(5);
/*
 *
 ***
 *****
 *******
 *********
 */
