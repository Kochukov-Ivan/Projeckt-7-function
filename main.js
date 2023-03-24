//ЗАДАНИЕ 1. Напишите функцию именную, которая при нажатии кнопки выводит в блок див на странице значения из переменной A.
// let a;
// let btn = document.querySelector(".btn");
// let outpt = document.querySelector(".outpt");
// btn.addEventListener("click", show);

// function show(a) {
//   a = 125;
//   console.log(a);
//   outpt.innerHTML = a;
// }
// //ЗАДАНИЕ 2. НАПИСАТЬ ПРОСТОЙ КАЛЬКУЛЯТОР ИЗ 4 ВЫРАЖЕНИЙ
let a; //создаю три переменные в них будут значения из инпутов
let b;
let c;

let buttonsum = document.getElementById("sum"); //создаю переменные для каждого математического действия
let buttonsubs = document.getElementById("subs");
let buttondevide = document.getElementById("devide");
let buttonmultiplay = document.getElementById("multiplay");
let exit = document.querySelector("output");

function sum(a, b, c) {
  //функция для сложения
  a = document.getElementById("1").value;
  b = document.getElementById("2").value;
  c = Number(a) + Number(b);
  document.getElementById("output").value = c;
  console.log(a);
  console.log(b);
  console.log(c);
}

function substaction(a, b, c) {
  //функция для вычетания
  a = document.getElementById("1").value;
  b = document.getElementById("2").value;
  c = Number(a) - Number(b);
  document.getElementById("output").value = c;
  console.log(a);
  console.log(b);
  console.log(c);
}

function devide(a, b, c) {
  //функция для деления
  a = document.getElementById("1").value;
  b = document.getElementById("2").value;
  c = Number(a) / Number(b);
  document.getElementById("output").value = c;
  console.log(a);
  console.log(b);
  console.log(c);
}

function multiplay(a, b, c) {
  // функция для умножения
  a = document.getElementById("1").value;
  b = document.getElementById("2").value;
  c = Number(a) * Number(b);
  document.getElementById("output").value = c;
  console.log(a);
  console.log(b);
  console.log(c);
}

buttonsum.addEventListener("click", sum); // задаю что бы по клику срабатывало одно из математических действий
buttonsubs.addEventListener("click", substaction);
buttondevide.addEventListener("click", devide);
buttonmultiplay.addEventListener("click", multiplay);
