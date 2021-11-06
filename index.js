// task1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y,,...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// task2
let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// task3
function mul(...rest) {
   let filtredArr = rest.filter(item => (typeof item === 'number') && ( item !== 0));
   let result;
   if (filtredArr.length !== 0) result = filtredArr.reduce((a, b) => a * b);
   else result = 0;
   return result;
};

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
console.log(mul(1, "str", 2, 3, true, 0)); // 0

// task4
let server = {
   data: 0,
   convertToString: function (callback) {
      callback(() => this.data + "");
   }
};

let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return ((callback) => this.result = callback());
   }
};

client.calc(123);

console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//task5
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

function mapBuilder(keysArray, valuesArrays){
   let newMap = new Map();
   for (let i = 0; i < keysArray.length; i++) {
      newMap.set(keysArray[i], valuesArrays[i]);
   };
   return newMap;
};

console.log(map.size); // 4
console.log(map.get(2)); // "span"
