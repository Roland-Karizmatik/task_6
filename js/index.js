var a = prompt("Enter variable a");
var b = prompt("Enter variable b");
var c = prompt("Enter variable c");
var message = squareEquation(a,b,c);
function squareEquation(a,b,c) {
  var d = b * b - 4 * a * c;
    if ( d < 0 ) {
        return "no real roots of equation";
    } 
    if ( d > 0) {
        var x1 = (-b+Math.sqrt(d))/(2*a);
        var x2 = (-b-Math.sqrt(d))/(2*a);
        return ("x1= " + x1) + (", x2= " + x2);
    }
    if (d == 0) {
        var x = -b/(2*a);
        return " x1 = x2= " + x;
    }
}

console.log(message);

