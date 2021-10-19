let sum = 0;
const four_digit_number = prompt(`type a for digit number`);
for (let i = 0; i < four_digit_number.length; i++) {
    const numb = Number(four_digit_number[i])
    sum += numb

}
console.log(sum);