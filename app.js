let buttons = document.querySelectorAll('button');

let btn0 = document.getElementById('btn0');
btn0.addEventListener("click", () => {
    console.log("button 0 was clicked");
});

let btn1 = document.getElementById('btn1');
btn1.addEventListener("click", () => {
    console.log("button 1 was clicked");
});

let btn2 = document.getElementById('btn2');
btn2.addEventListener("click", () => {
    console.log("button 2 was clicked");
});

let btn3 = document.getElementById('btn3');
btn3.addEventListener("click", () => {
    console.log("button 3 was clicked");
});

let btn4 = document.getElementById('btn4');
btn4.addEventListener("click", () => {
    console.log("button 4 was clicked");
});

let btn5 = document.getElementById('btn5');
btn5.addEventListener("click", () => {
    console.log("button 5 was clicked");
});

let btn6 = document.getElementById('btn6');
btn6.addEventListener("click", () => {
    console.log("button 6 was clicked");
});

let btn7 = document.getElementById('btn7');
btn7.addEventListener("click", () => {
    console.log("button 7 was clicked");
});


let btn8 = document.getElementById('btn8');
btn8.addEventListener("click", () => {
    console.log("button 8 was clicked");
});

let btn9 = document.getElementById('btn9');
btn9.addEventListener("click", () => {
    console.log("button 9 was clicked");
});

let btn00 = document.getElementById('btn00');
btn00.addEventListener("click", () => {
    console.log("button 00 was clicked");
});

let btnAC = document.getElementById('btnAC');
btnAC.addEventListener("click", () => {
    console.log("button AC was clicked");
});

let btnDEL = document.getElementById('btnDEL');
btnDEL.addEventListener("click", () => {
    console.log("button DEL was clicked");
});

let btnPERCENT = document.getElementById('btnPERCENT');
btnPERCENT.addEventListener("click", () => {
    console.log("button % was clicked");
});

let btnDIVIDE = document.getElementById('btnDIVIDE');
btnDIVIDE.addEventListener("click", () => {
    console.log("button / was clicked");
});

let btnMULTIPLY = document.getElementById('btnMULTIPLY');
btnMULTIPLY.addEventListener("click", () => {
    console.log("button * was clicked");
});

let btnSUBTRACT = document.getElementById('btnSUBTRACT');
btnSUBTRACT.addEventListener("click", () => {
    console.log("button - was clicked");
});

let btnADD = document.getElementById('btnADD');
btnADD.addEventListener("click", () => {
    console.log("button + was clicked");
});

let btnDECIMAL = document.getElementById('btnDECIMAL');
btnDECIMAL.addEventListener("click", () => {
    console.log("button . was clicked");
});

let btnEQUAL = document.getElementById('btnEQUAL');
btnEQUAL.addEventListener("click", () => {
    console.log("button = was clicked");
});



let display = document.getElementById("display");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
       let value = button.innerText;

     if (value === "AC") {
            display.value = "";
        } else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            display.value = eval(display.value);
        } else {
            display.value += value;
        }
    });
});



















































































































































