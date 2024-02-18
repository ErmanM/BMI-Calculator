function calculateBmi() {

    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height * height) * 703 )

    document.getElementById('heading').innerHTML = 'Your BMI is : '
    document.getElementById('bmi-output').innerHTML = bmi

    if (bmi <= 24.9) {
        document.getElementById('message').innerHTML = 'You are underwaight'
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('message').innerHTML = 'You are healthy'
    } else {
        document.getElementById('messege').innerHTML = 'You are overweight'
    }


}