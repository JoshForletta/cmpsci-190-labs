const banners = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];

function main() {
    setInterval(cycle, 2000);
}

function cycle() {
    document.getElementById("banner").src = banners[Math.floor(Math.random() * 3)];
}
