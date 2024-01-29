//===============Tricky JS ===============//
//...........1............
// (function () {
//   console.log(1);//first output
//   setTimeout(function () {
//     console.log(2);//fourth
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);//third
//   }, 0);
//   console.log(4);//second
// })();

// var arr1 = "john".split("");
// var arr2 = arr1.reverse();
// var arr3 = "jones".split("");

// arr2.push(arr3);

//console.log("array 1 length= " + arr1.length + " last=" + arr1.slice(-1));

//.............2...........
// console.log("start");

// setTimeout(() => {
//   console.log("Timeout 1");
//   Promise.resolve().then(function () {
//     console.log(console.log("Promise 1"));
//   });
// }, 0);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 200);

// Promise.resolve().then(function () {
//   console.log("Promise 2");
// });

// console.log("end");

//..............3..............
// var length = 10;
// function fn() {
//   console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function (fn) {
//     fn();
//     arguments[0]();
//   },
// };

// obj.method(fn, 1);

//...............4.............
// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1,
//       y = 2;
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

//................5.................
// var x = 21;
// var func = function () {
//   console.log(x);
//   var x = 20;
// };

// func();

//..............6..............
// var a = [1, 2, 3];
// a[10] = 99;
// console.log(a[10]);

//............7...........

// console.log(typeof undefined == typeof NULL);// in javascript null is valid not NULL

//...........8...........
// (function () {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   }, 1000);
//   setTimeout(() => {
//     console.log(3);
//   }, 0);
//   console.log(4);
// })();

//..............9.............
// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - "B" + 2);

//..........10..............
// var a = {};
// b = { key: "b" };
// c = { key: "c" };
// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

//............11..............
// let bar = null;
// console.log(
//   bar !== null && (typeof bar === "object" || typeof bar === "function")
// );

//...........12...........
// (function () {
//   var a = (b = 2);
// })();

// console.log(typeof a !== undefined);
// console.log(typeof b !== "undefined");

//.........13.............
var myObj = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log(this.foo);
    console.log(self.foo);

    (function () {
      console.log(this.foo);
      console.log(self.foo);
    })();

    (() => {
      console.log(this.foo);
      console.log(self.foo);
    })();
  },
};
myObj.func();

//..........14..............
// const resOne = function fool() {
//   return {
//     bar: "hello",
//   };
// };

// const resTwo = function fool1() {
//   return {
//     bar: "hello",
//   };
// };

// console.log(resOne === resTwo);
// console.log(resOne == resTwo);
