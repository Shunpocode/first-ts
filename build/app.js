var firstName = "Max";
var text1 = "Hello ".concat(firstName, ". How are you?");
document.getElementById("test").innerHTML = text1;
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "greeen";
    Color["Blue"] = "blueew";
})(Color || (Color = {}));
console.log(typeof (Color));
//# sourceMappingURL=app.js.map