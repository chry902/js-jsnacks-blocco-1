let odd_numbers = []


for (let i = 0; i < 6; i++) {
    const user_number = parseInt(prompt(`type a number`));



    if (user_number % 2 !== 0) {
        odd_numbers.push(user_number)
    }


}
console.log(odd_numbers);