const btnOperators = ["-", "+", "*", "/", "%"];

const buttons = [];
console.log("hello");
for (let i = 0; i < btnOperators.length; i++) {
  let obj = {};
  obj.name = btnOperators[i];
  obj.id = "operator";
  buttons.push(obj);
}
console.log(buttons);
