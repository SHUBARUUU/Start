function changeBG() {
  document.body.style.backgroundColor = "Black";
  document.querySelector("span").style.color = "White";

  let bodyColor = getComputedStyle(document.body).backgroundColor;
  const iColor = "rgb(0, 0, 0)";

  if (bodyColor == iColor) {
    console.log("BG Color Changed.");
    document.getElementById("appear").style.color = "White";
  } else {
    console.log("doesnt work");
  }
}
