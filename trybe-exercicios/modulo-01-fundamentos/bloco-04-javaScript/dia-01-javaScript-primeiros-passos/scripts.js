// 1-
const a = 2;
const b = 3;
console.log("1-"," a+b ", a+b, " a - b ", a-b, " a * b ", a*b , " a / b ", a/b, " a % b ", a%b)
// 2- 
if (a > b){
    console.log("2- " + a + " maior que " + b);
} else if (b > a){
    console.log("2- " + b + " maior que " + a);
} else {
    console.log("2- " + a + " é igual a " + b);
}
// 3-
const c = 4;
let array = [a,b,c]
let anotherArray = array.sort();
console.log( "3- array = " +array+ " Maior numero: " + anotherArray[anotherArray.length - 1])
// 4-
if (a > 0) {
    console.log("4- " + "positive");
} else if (a < 0) {
    console.log("4- " + "negative");
} else {
    console.log("4- " + "zero");
}
// 5- 
const a1 = 50;
const a2 = 50;
const a3 = 80;
if (a1 <= 0 || a2 <= 0 || a3 <= 0){
    console.log("5- " + "error!")
} else {
    if ((a1 + a2 + a3) == 180) {
        console.log("5- " + "true");
    } else {
        console.log("5- " + "false");
    }
}
// 6-
let partName = "bispo"
switch(partName.toLowerCase()) {
    case "peão":
        console.log("6- " + "um pra frente");
        break;
    case "peao":
        console.log("6- " + "um pra frente");
        break;
    case "cavalo":
        console.log("6- " + "em 'L'");  
        break;
    case "bispo":
        console.log("6- " + "na diagonal"); 
        break;   
    case "torre":
        console.log("6- " + "na vertical e horizontal");  
        break;
    case "rainha":
        console.log("6- " + "na vertical, horizontal e diagonal"); 
        break;
    case "rei":
      console.log("6- " + "uma casa na vertical, horizontal e diagonal");  
      break;
}   
// 7-
let percent = 100
if ( percent > 100 || percent < 0) {
    console.log("7- " + "error!")

}else if ( percent >= 90){
    console.log("7- " + "A")
    
}else if ( percent >= 80){
    console.log("7- " + "B")

}else if ( percent >= 70){
    console.log("7- " + "C")
    
}else if ( percent >= 60){
    console.log("7- " + "D")
    
}else if ( percent >= 50){
    console.log("7- " + "E")
    
}else if ( percent < 50){
    console.log("7- " + "F")
  
}
// 8-
const num1 = 1;
const num2 = 2;
const num3 = 3;
if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
    console.log("8- " + "true")
} else {
    console.log("8- " + "false")
}
// 9-

if ((num1 % 2) != 0 || (num2 % 2) != 0 || (num3 % 2) != 0){
    console.log("8- " + "true")
} else {
    console.log("8- " + "false")
}
// 10-
const productCost = 5;
const productSalePrice = 10;
const productSales = 1000;  
let tax = 1.2;
let profit = (productSalePrice - (productCost * tax));
let totalProfit = profit * productSales;

if (productCost < 0 || productSalePrice < 0) {
    console.log("10- " + "error!");
} else {
    console.log("10- " + totalProfit)
}
// 11-
let grossSalary = 1500;
let netSalary;
let baseSalary;
let INSS;
let IR;

if (grossSalary <= 1556.94) {
    INSS = (grossSalary * 0.08);
} 
else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    INSS = (grossSalary * 0.09);
} 
else if (grossSalary >= 2.594, 93 && grossSalary >= 5189.82) {
    INSS = (grossSalary * 0.11);
} 
else if (grossSalary <= 5189.82) {
    INSS = 570.88;
}
baseSalary = grossSalary - INSS;


if (baseSalary <= 1.903,98) {
    netSalary = baseSalary;
}
else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
    netSalary = (baseSalary * 0.075) - 142.80;
}
else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
    netSalary = (baseSalary * 0.15) - 354.80;
}
else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
    netSalary = (baseSalary * 0.225) - 636.13;
}
else if (baseSalary > 4664.68) {
    netSalary = (baseSalary * 0.275) - 869.36;
}

console.log("11- " + netSalary);



