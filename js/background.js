const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenimg = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.className = "background";
bgimage.src = `img/${chosenimg}`;

document.body.appendChild(bgimage);
