let readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
    // terminal: false
});

readline.question("Enter the numbers : ", str_num => {
    let un_num = [...new Set(str_num.split(",").map(Number))];
    let num = un_num.sort((a, b) => a - b);
    num.push(Infinity);
    // console.log(num);
    let start_val = num[0],
        prev_val = num[0],
        incrementer = num[0];
    let final_array = [];
    num.forEach((x, index) => {
        if (x == incrementer) {
            prev_val = x
        } else {
            if (start_val !== num[index - 1]) {
                final_array.push(`${start_val}-${num[index - 1]}`);
                // console.log(`${start_val}-${num[index-1]}`)
            } else {
                final_array.push(start_val);
                // console.log(start_val)
            }
            start_val = x;
            incrementer = x;
        }
        incrementer++;
    });
    console.log(`Number range : ${final_array.join(",")}`);
    readline.close();
});

