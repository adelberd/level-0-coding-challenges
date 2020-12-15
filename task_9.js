var sum_of_multiples = 0;

for (var i = 1; i < 1000; i++){
    var mult_of_three = i * 3;
    if (mult_of_three < 1000){
        sum_of_multiples += mult_of_three;
    }
}
for (var i = 1; i < 1000; i++){
    var mult_of_five = i * 5;
    if (mult_of_five < 1000){
        sum_of_multiples += mult_of_five;
    }
}

console.log(sum_of_multiples);

