let numbers = [ 5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers;
let sum;
let finalNumb;
let lastMaxNumb;
let lastMinNumb;
let score;

// 1-
for( let numb of numbers) {
    console.log("1- " + numb);
}
// 2-
sum = 0;
for( let numb of numbers) {
    sum += numb;
    
}
console.log("2- " + sum);
// 3-
sum = 0;
finalNumb = 0;
for( let numb of numbers) {    
    sum += numb;
}
finalNumb = sum / numbers.length;
console.log("3- " + finalNumb);
// 4-
if (finalNumb > 20) {
    console.log("4- " + "valor maior que 20");
} else {
    console.log("4- " + "valor menor ou igual a 20");
}
// 5-
lastMaxNumb = null;
for( let numb of numbers){
    if ( lastMaxNumb == null ){
        lastMaxNumb = numb;
    } else {
        if (numb > lastMaxNumb){
            lastMaxNumb = numb;
        } 
    }

}
console.log("5- " + lastMaxNumb);
// 6-
score = 0;
for( let numb of numbers){
    if ( numb % 2 != 0){
        score += 1;
    } 
}
if ( score > 0) {
    console.log("6- " + score)
} else {
    console.log("6- " + "nenhum valor ímpar encontrado");
}
// 7-
lastMinNumb = null;
for( let numb of numbers){
    if ( lastMinNumb == null ){
        lastMinNumb = numb;
    } else {
        if (numb < lastMinNumb){
            lastMinNumb = numb;
        } 
    }
}
console.log("7- " + lastMinNumb);
// 8-
newNumbers = [];
for(let i = 1;i < 26; i += 1) {
    newNumbers.push(i);  
}
console.log("8- " + newNumbers);
// 9-
for( let num of newNumbers) {
    console.log("9- " + (num / 2));
}
// 10-
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log("1-bonus " + numbers);
// 11-
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log("2-bonus " + numbers);
// 12-
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let otherNumbers = [];
for ( let i = 0; i < numbers.length; i += 1){
    if( i > numbers.length - 2){
        otherNumbers.push(numbers[i] * 2)
    } else {
        otherNumbers.push(numbers[i] * numbers[i + 1])
    }
}
console.log("3-bonus " + otherNumbers);