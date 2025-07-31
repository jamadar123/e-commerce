const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/dbd07c8f0d822f95.jpg?q=80",
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/5b309e98775e22e4.jpg?q=80",
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/751b87f2ba1e9a00.jpeg?q=80",
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/180a6b2d0708f53f.jpeg?q=80",
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=80"
];
let index = 0;

function showImage(){
    document.getElementById("slider").src = images[index]
}
function nextImage(){
    index = (index + 1) % images.length;
    showImage();
}
function prevImage(){
    index = (index - 1) % images.length;
    showImage();
}
setInterval(nextImage,3000);