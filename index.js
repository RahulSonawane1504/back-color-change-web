// const buttons = document.querySelectorAll(".button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const color = button.id;

//     if (color === "orange") {
//       document.body.style.backgroundColor = "orange";
//     } else if (color === "yellow") {
//       document.body.style.backgroundColor = "yellow";
//     } else if (color === "blue") {
//       document.body.style.backgroundColor = "blue";
//     } else if (color === "pink") {
//       document.body.style.backgroundColor = "pink";
//     }
//   });
// });

// const buttons = document.querySelectorAll(".button");
// buttons.forEach(function (btn) {
//   btn.addEventListener("click", () => {
//     const color = btn.id;

//     if (color === "orange") {
//       document.body.style.backgroundColor = "orange";
//     } else if (color === "yellow") {
//       document.body.style.backgroundColor = "yellow";
//     } else if (color === "blue") {
//       document.body.style.backgroundColor = "blue";
//     } else {
//       document.body.style.backgroundColor = "pink";
//     }
//   });
// });

const buttons = document.querySelectorAll(".button");
buttons.forEach(function (btn) {
  btn.addEventListener("click", () => {
    const color = btn.id;

    if (color === "orange") {
      document.body.style.backgroundColor = "orange";
    } else if (color === "yellow") {
      document.body.style.backgroundColor = "yellow";
    } else if (color === "blue") {
      document.body.style.backgroundColor = "blue";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  });
});
