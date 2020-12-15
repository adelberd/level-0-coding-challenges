function has_three(num_1, num_2){
    var sum = num_1 + num_2;
    if ((num_1 == 3 || num_2 == 3) && sum.toString().includes("3")){
         return true;
     }
    return false;
}
