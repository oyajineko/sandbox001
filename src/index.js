/**
 * const, let
//  */

// var val1 = "var変数";
// console.log(val1);

// var val1 = "変数を再宣言";
// console.log(val1);
// const name = "おやじ猫";
// const age = 28;
// const message1 = `私の名前は${name}です。`;

// console.log(message1);

// const func2 = (str) => {
//   return str;
// };

// console.log(func2("おやじ猫参上！"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(4, 5));

const myProfile = {
  name: "おやじ猫",
  favorit: "neko",
  age: 49
};

const { favorit, age } = myProfile;

const message2 = `名前は${favorit}です。年齢は${age}です。`;
console.log(message2);
