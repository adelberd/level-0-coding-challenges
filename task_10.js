var all_vowels_in_str = "";

function vowels_in_string(str){
    var vowels = "AEIOUaeiou";
    for (var i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            all_vowels_in_str += str[i];
        }
    }
}
