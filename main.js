document.querySelector("#convertTemp").addEventListener("click", convertTemp);
function convertTemp() {
    let category = document.getElementById("category").value;
    let temp = Number(document.getElementById("tempInput").value);
    let fromTemp = document.getElementById("fromTemp").value;
    let toTemp = document.getElementById("toTemp").value;

    if (fromTemp === "celsius" && toTemp === "fahrenheit") {
        temp = temp * 1.8 + 32; + 32;
    }
    else if (fromTemp === 'fahrenheit' && toTemp === 'celsius') {
        temp = (temp - 32) * 5 / 9;
    } else {
        temp = "Invalid conversion";
    }
    document.getElementById("tempResultHere").innerText = temp;
}