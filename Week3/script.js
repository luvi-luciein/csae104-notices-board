const tittle = document.querySelector("h1");
var count = 0;

var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2"); 


btn.addEventListener("click", function () {
    count++;

    btn.textContent = "Clicked " + count +
        (count === 1 ? " time" : " times");

    console.log("count is now", count);
});

btn1.addEventListener("click", function () {
    alert("Hello, World!");
});

btn.addEventListener("click", function () {
    document.body.style.background = "#10ac18";alert("Change to color green");
    tittle.textContent = "Pinili mo ang green";
});

btn1.addEventListener("click", function () {
    document.body.style.background = "#222acd";alert("Change to color blue");
    tittle.textContent = "Pinili mo ang blue";
});

btn2.addEventListener("click", function () {
    document.body.style.background = "#c73423";alert("Change to color red");
    tittle.textContent = "Pinili mo ang red";
});