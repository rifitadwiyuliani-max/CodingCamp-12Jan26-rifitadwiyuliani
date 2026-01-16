console.log("To Be My Hero X website loaded successfully");

/* PREVIEW IMAGE ROTATOR */
const previewBox = document.querySelector(".preview-box");

/* LIST OF IMAGE LINKS */
const merchImages = [
    "https://i0.hdslb.com/bfs/mall/mall/ef/dc/efdcb247c68839e7580c650855be3e99.png@800w_800h", /* Can Badge */
    "https://sakami.info/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/b/i/bilibiligoods_x_hero_show_-2.png", /* Keychain*/
    "https://i0.hdslb.com/bfs/mall/mall/4d/78/c683c7d39f9c714920762378d4aa763b.jpg@800w_800h", /* Acrylic Standee */
];

let currentIndex = 0;

/* SET INITIAL IMAGE */
previewBox.style.backgroundImage = `url(${merchImages[currentIndex]})`;

/* CHANGE IMAGE EVERY 4 SECONDS */
setInterval(() => {
    currentIndex = (currentIndex + 1) % merchImages.length;
    previewBox.style.backgroundImage = `url(${merchImages[currentIndex]})`;
}, 4000);

/* FORM SUBMIT */
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you! Your pre-order data has been sent. We will contact you soon.");
});

/* Call Us Simulation */
document.getElementById("callBtn").addEventListener("click", function () {
    alert(
        "📞 Connecting you to To Be My Hero X...\n\n" +
        "Phone: (123) 456-7890\n" +
        "Email: info@tobemyhero.com"
    );
});