function compute() {  
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Please enter a positive number for the amount!");
        principal.focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var amount = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerText="If you deposit "+principal+",\nat an interest rate of "+rate+"%\nYou will receive an amount of "+amount+",\nin the year "+year+"\n"
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        