const x = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("end of timeout");
      resolve();
    }, 3000);
  });
};
console.log("firing");

let y = async () => {
  console.log("we in y");
  await x();
  await console.log("this should be last");
};

y();
