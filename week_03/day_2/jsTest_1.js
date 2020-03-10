var a = true && true || false && false
console.log("a is " + a);
var b = true == false || false == false;
console.log("b is " + b);
var c = 9932494354545 % 2 != 1;
console.log("c is " + c);
var d = 190 + 20 >= 100 && 50 <= 50;
console.log("d is " + d);
var A = true
var B = true 
var e = !(A || B) == !A && !B;
console.log("e is " + e);
var f = !true || !true || true && true && !true;
console.log("f is " + f);
var A = true 
var B = false
var C = false 
var D = true
var g = ((A || B) && (C || D)) == ((A || B) && C) || ((A || B) && D);
console.log("g is " + g);
var x = false
var y = false 
var z = false
var h = x && z || !x && y || z || y == x && z || !x && y;
console.log("h is " + h);
var a = 50
var b = a + a
var c = b * b + 1
var d = c % 2
console.log("d is " + d);
console.time("check");
var marks = 1977
marks = marks % 100
var grade
if(marks > 90){
  grade = 'A'
}
else if(marks > 80 && marks <= 90){
  grade = 'B'
}
else if(marks > 70 && marks <= 80){
  grade = 'C'
}
else if(marks > 60 && marks <= 70){
  grade = 'D'
}
else{
  grade = 'F'
}
console.log("grade is " + grade);
console.timeEnd("check");
var x = 12 
var y = 12 + "12"
console.log("y is " + y);