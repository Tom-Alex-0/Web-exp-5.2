function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let heightCm = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        alert("Please enter valid values!");
        return;
    }

    let heightM = heightCm / 100; // convert cm to meters
    let bmi = weight / (heightM * heightM);
    bmi = bmi.toFixed(1);

    let status = "";
    if (bmi < 18) {
        status = "Underweight";
    } else if (bmi >= 18 && bmi < 25) {
        status = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    document.getElementById("bmi-value").textContent = bmi;
    document.getElementById("bmi-status").textContent = status + " BMI";
}
