function celsius_to_fahrenheit(celsius){

    var fahrenheit = celsius / 5 * 9 + 32;
    fahrenheit = Math.round(fahrenheit  * 100) / 100; 
    return fahrenheit;
}


function fahrenheit_to_celsius(fahrenheit){
    var celsius = (fahrenheit - 32) * 5 / 9;
    celsius = Math.round(celsius * 100) / 100; 
    return celsius;
}

