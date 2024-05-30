document.querySelector("#convert").addEventListener("click", convert);
function convert() {
    let category = document.getElementById("category").value;
    let temp = Number(document.getElementById("numInput").value);
    let convertFrom = document.getElementById("convertFrom").value;
    let convertTo = document.getElementById("convertTo").value;

    if (convertFrom === "celsius" && convertTo === "fahrenheit") {
        temp = temp * 1.8 + 32; + 32;
    }
    else if (convertFrom === "fahrenheit" && convertTo === "celsius") {
        temp = (temp - 32) * 5 / 9;
    } else {
        temp = "Invalid conversion";
    }
    document.getElementById("conversionResultHere").innerText = temp;
}

document.querySelector("#convert").addEventListener("click", convert);
function convert() {
    let category = document.getElementById("category").value;
    let weight = Number(document.getElementById("numInput").value);
    let convertFrom = document.getElementById("convertFrom").value;
    let convertTo = document.getElementById("convertTo").value;

    if (convertFrom === "pound" && convertTo === "kilogram") {
        weight = weight / 2.2046;
    }
    else if (convertFrom === "kilogram" && convertTo === "pound") {
        weight = weight * 2.2046;
    } else {
        weight = "Invalid conversion";
    }
    document.getElementById("conversionResultHere").innerText = weight;
}
