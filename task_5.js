function area_of_a_triangle(num_1, num_2, num_3){

    var s = 1 / 2 * (num_1 + num_2 + num_3); //semiperimeter
    var area = Math.sqrt(s * (s - num_1) * (s - num_2) * (s - num_3));

    return area;
}

