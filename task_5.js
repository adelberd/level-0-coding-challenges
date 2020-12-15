function area_of_a_triangle(num_1, num_2, num_3){

    var semiperimeter = 1 / 2 * (num_1 + num_2 + num_3); 
    var area = Math.sqrt(semiperimeter * (semiperimeter - num_1) * (semiperimeter - num_2) * (semiperimeter - num_3));

    return area;
}

