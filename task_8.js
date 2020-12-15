

function to_hours_minutes(num){
    var hr_or_hrs = "";
    var min_or_mins = "";

    var hours = Math.floor(num / 60);
    if (hours > 1 || hours === 0){
        hr_or_hrs = "hours";
    } else {
        hr_or_hrs = "hour";
    }
    
    var minutes = num % 60;
    if (minutes > 1 || minutes === 0){
        min_or_mins = "minutes";
    } else {
        min_or_mins = "minute";
    }

    console.log(hours + " " + hr_or_hrs + ", " + minutes + " " + min_or_mins);
}
