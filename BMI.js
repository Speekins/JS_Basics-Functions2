/*Create a function that calculates a person's body mass index (BMI).
It should take two parameters: someone's height (in cm) and weight (in kg).
The formula for calculating the BMI is as follows:*/

//bmi = weightInKilograms / heightInMeters**2;

function bmi(kg, cm) {
  return kg / cm / cm * 10000;
}

console.log(bmi(88, 180));