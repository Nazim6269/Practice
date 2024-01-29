// const obj = {
//   name: "nazim",
//   skills: [1, 2, 3],

//   practice() {
//     this.skills.forEach(function (skill) {
//       console.log(skill);
//       console.log(this.name);
//     });
//   },
// };

// const obj2 = {
//   name: "nazim",
// practice() {
//   console.log("1", this.name);
// },
// func: (() => {
//   console.log("2", this); //window obj
// })(),
// func2: () => {
//   console.log("3", this);//window obj
// },
// };
//obj2.practice();
//obj2.func2();

// var myObj = {
//   func: () => {
//     // console.log("1", this); //func

//     (() => {
//       console.log("2", this); //window
//     })();

//     // (() => {
//     //   console.log("3", this); //func
//     // })();
//   },
// };
// myObj.func();

// const obj3 = {
//   name: "nazim",
//   skills: [1, 2, 3],
//   func: () => {
//     return () => {
//       console.log("2", this);
//     };
//   },

//   // practice() {
//   //   this.skills.forEach(function (skill) {
//   //     console.log("1", this);
//   //   });
//   // },
// };
// obj3.func()();
