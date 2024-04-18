// import {  } from './one/file.ts';
const button: HTMLButtonElement = document.querySelector("button");
const inputBox: HTMLInputElement = document.querySelector("input");
const div = document.getElementById("test");
button.addEventListener("click", function () {
    test(inputBox.value);
});
console.log('Всё сработало');

function test(src: string) {
    div.innerHTML = src;
}
// const firstName: string = "Max";
// const text1: string = `Hello ${firstName}. How are you?`;
// document.querySelector("button").value;
// document.getElementById("test").innerHTML = text1;