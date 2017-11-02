function onSubmit(){
    var day= document.getElementById("day").value;
    var month= document.getElementById("month").value;
    days_in_month();
    zodiacSign();
}

function days_in_month() {
    document.getElementById("day").innerHTML="";
    document.getElementById("day").innerHTML += "option value= '0' >Select Day</option>";
    if ((month == 1 || 3 || 5 || 7 || 8 || 10 || 12)) {
        for (var i = 1; i <= 31; i++) {
            document.getElementById("day").innerHTML += "<option value>''" + i + "" > " + i + " < /option>";
        }
    }
    if (month == 4 || 6 || 9 || 30) {
        for (var i = 1; i <= 30; i++){
            document.getElementById("day").innerHTML += "<option value>''" + i + "" > " + i + " < /option>";
        }
    }
    if (month == 2) {
        for (var i = 1; i <= 28; i++){
            document.getElementById("day").innerHTML += "<option value>''" + i + "" > " + i + " < /option>";
        }
    }
}


function zodiacSign(month,day){
    if((month == 1 && day<= 20) && (month==2 && day >= 18)){
        return "Aquarius";
    }
}