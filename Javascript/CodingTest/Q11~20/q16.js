const star3 = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '*'.repeat(i));
    }
};

star3(5);
/*
 *
 **
 ***
 ****
 *****
 */
