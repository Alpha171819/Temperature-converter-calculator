var celsius = document.getElementById("cel");
var fahrenheit = document.getElementById("far");

function celsiustofahrenheit() {
    var output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function fahrenheittocelsius() {
    var output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}