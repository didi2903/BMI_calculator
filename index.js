document.getElementById("submit").onclick = function () {
    let visina = parseInt(document.getElementById("visina").value);
    let tezina = parseInt(document.getElementById("tezina").value);
    let visina2 = visina * visina;
    let bmi = (tezina / visina2) * 10000;
    bmi = bmi.toFixed(2);
    

    document.getElementById("display").innerHTML = "Vaš BMI je " + bmi;


    
    if (bmi < 20) {
        document.getElementById("i3").style.backgroundColor = "red";
        document.getElementById("i4").style.backgroundColor = "red";
    }
    if (bmi >= 20 && bmi <= 24.9) {
        document.getElementById("i5").style.backgroundColor = "green"
        document.getElementById("i6").style.backgroundColor = "green"
    }
    if (bmi >= 25 && bmi <= 30) {
        document.getElementById("i7").style.backgroundColor = "yellow"
        document.getElementById("i8").style.backgroundColor = "yellow"
    }
    if (bmi > 30) {
        document.getElementById("i9").style.backgroundColor = "red"
        document.getElementById("i10").style.backgroundColor = "red"
    }
}