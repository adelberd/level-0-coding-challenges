function max_num(){
    var maxi = 0;
    
    for (var i = 0; i < arguments.length; i++){
        if (arguments[i] >= maxi){
            maxi = arguments[i];
        }
    }

    return maxi;
}

