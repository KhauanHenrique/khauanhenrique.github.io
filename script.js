// const lamp = document.getElementById("lamp");
// const clickArea = document.getElementById("click-area");

// clickArea.addEventListener("click", function () {
//     if (lamp.src.endsWith("/desligado.jpg")) {
//         lamp.src = "/acesa.jpeg";
//     } else {
//         lamp.src = "/desligado.jpg";
//     }
// });

const lamp = document.getElementById("lamp");
const clickArea = document.getElementById("click-area");
const images = ["desligado.jpg", "acesa.jpeg","desligado.jpg", "prof2.png", "desligado.jpg", "prof3.png", "desligado.jpg", "prof4.png", "desligado.jpg", "prof5.png", "desligado.jpg", "prof-bravo.png"];

let currentImageIndex = 0;

clickArea.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lamp.src = images[currentImageIndex];
});
