var button = document.querySelector("button");
var inputBox = document.querySelector("input");
var div = document.getElementById("test");
button.addEventListener("click", function () {
    test(inputBox.value);
});
console.log('Всё сработало');
function test(src) {
    div.innerHTML = src;
}
//# sourceMappingURL=app.js.map