/*
Output common letters between two strings.
*/


function common_letters(str_1, str_2){
    var all_com_letters = "";

    for (var i = 0; i < str_2.length; i++){
        if (str_1.includes(str_2[i]) && !all_com_letters.includes(str_2[i])){
            all_com_letters += " " + str_2[i] + ",";
        }
    }

    console.log("'Common letters:" + all_com_letters.slice(0, -1) + "'");
}

common_letters("house", "computers")