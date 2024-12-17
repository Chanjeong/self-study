const star6 = (n) => {
    for (let i = n - 1; i >= 0; i--) {
        console.log(' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1));
    }
};

star6(5);
/*
 *********
 *******
 *****
 ***
 *
 */
