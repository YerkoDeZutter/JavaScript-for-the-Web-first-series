// ----- OPDRACHT 1 -----

// let collers = document.querySelectorAll(".collers");
// let collorArr = [];
//
// collers.forEach(collor => {
//   collor.addEventListener("click", op1s1);
//   collorArr.push(collor.className.slice(8));
// })
//
// function op1s1(evt) {
//   collorArr.forEach(collor => {
//     if (evt.currentTarget.className.slice(8) == collor) {
//       colorChange.style.background = collor;
//     }
//   })
// }




// ----- OPDRACHT 2 -----

// let calculs = document.querySelectorAll(".calcul");

// calculs.forEach(calcul => {
//   calcul.addEventListener("click", op2s1);
// })
//
// function op2s1(evt) {
//   calX2 = parseInt(calX.value);
//   calY2 = parseInt(calY.value);
//
//   if (evt.currentTarget.textContent == "+") {
//     alert(calX2 + calY2);
//   } else if (evt.currentTarget.textContent == "-") {
//     alert(calX2 - calY2);
//   } else if (evt.currentTarget.textContent == "*") {
//     alert(calX2 * calY2);
//   } else if (evt.currentTarget.textContent == "/") {
//     alert(calX2 / calY2);
//   }
// }




// ----- OPDRACHT 3 -----

let result = document.getElementsByTagName("h1");
console.log(result);

function op3s1() {
  result[0].innerHTML = "the villen: " + Vname.value + " whit the " + power.value + " power. wants to take over the world because " + motivation.value;
  Vname.value = "";
  power.value = "";
  motivation.value = "";
}

function op3s2() {
  Vname.value = "";
  power.value = "";
  motivation.value = "";
}




// ----- OPDRACHT 4 -----

// function op4s1(birth_day, birth_month, birth_year) {
//   today_date = new Date();
//   today_year = today_date.getFullYear();
//   today_month = today_date.getMonth();
//   today_day = today_date.getDate();
//   age = today_year - birth_year;
//
//   if (today_month < (birth_month - 1)) {
//     age--;
//   }
//   if (((birth_month - 1) == today_month) && (today_day < birth_day)) {
//     age--;
//   }
//   alert(age);
// }




// ----- OPDRACHT 5 -----

// let i5 = 1;
//
// function op5s1() {
//   if (i5 == 11) {
//     i5 = 1;
//   } else {
//     i5++
//   }
//   cirImg.src = "img/cat-" + i5 + ".jpg";
//   console.log(i5);
//   setTimeout(op5s1, 1000);
// }
//
// setTimeout(op5s1, 1000);




// ----- OPDRACHT 6 -----

// function op6s1() {
//   let catNum = Math.floor(Math.random() * 9) + 1;
//   ranImg.src = "img/cat-" + catNum + ".jpg";
// }




// ----- OPDRACHT 7 -----
// function op7s1() {
//
//   let Bw = Math.floor(Math.random() * window.innerWidth);
//   let Bh = Math.floor(Math.random() * window.innerHeight);
//
//   Tbutton.style.marginTop = Bh + "px";
//   Tbutton.style.marginLeft = Bw + "px";
//
// }




// ----- OPDRACHT 2/1 -----
