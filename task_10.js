

function vowels_in_string(str){
    var all_vowels_in_str = "";
    var vowels = "AEIOUaeiou";
    for (var i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            all_vowels_in_str += str[i];
        }
    }
    
    console.log(all_vowels_in_str);
}
