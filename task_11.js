/*
Output common letters between two strings.
*/
var all_com_letters = "";

function common_letters(str_1, str_2){

    for (var i = 0; i < str_2.length; i++){
        if (str_1.includes(str_2[i]) && !all_com_letters.includes(str_2[i])){
            all_com_letters += " " + str_2[i] + ",";
        }
    }

    console.log("'Common letters:" + all_com_letters.slice(0, -1) + "'");
}
