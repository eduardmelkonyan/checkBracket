const Stack = require("./analiser");

const stack = new Stack();
const arr1 = stack.arr;

class Check {
  constructor() {}
  arr1 = [];
  bracket(string) {
    for (let i = 0; i < string.length; ++i) {
      if (string[i] == "(" || string[i] == "{" || string[i] == "[") {
        this.arr1.push(string[i]);
      }
      if (
        (this.arr1[this.arr1.length - 1] == "(" && string[i] == ")") ||
        (this.arr1[this.arr1.length - 1] == "{" && string[i] == "}") ||
        (this.arr1[this.arr1.length - 1] == "[" && string[i] == "]")
      ) {
        this.arr1.pop();
      }
    }
    if (this.arr1.length == 0) {
      console.log(true);
    } else {
      throw new Error("Something wrong!");
    }
  }
}

try {
  const check = new Check();
  check.bracket("[{()}]");
} catch (e) {
  console.log(e.message, e);
}
