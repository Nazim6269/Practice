const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//first
wait(1000).then((data) => {
  console.log("1000 ms");
});

//second
wait(2000).then((data) => {
  console.log("2000 ms");
});

//third
wait(3000).then((data) => {
  console.log("3000 ms");
});
