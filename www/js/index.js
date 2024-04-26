document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var isFirstTime = localStorage.getItem("firstTime");
    if (!isFirstTime) {
        document.getElementById("initialPage").style.display = "block";
        localStorage.setItem("firstTime", "false");
        // avigator.notification.alert("Let's start", alertCallback, "MM", ["OK", "Cancel"]);
    } else {
        window.location.href = "main.html";
    }
    var images = ["img/Splash_Screen_01.png", "img/Splash_Screen_02.png", "img/Splash_Screen_03.png"];
    var choose = ["Choose your favorite", "Find the best", "Your food is ready to"];
    var menu = ["menu", "price", "delivered"];
    var desc = ["This app is lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "This app is lorem ipsum dolor sit amet, consectetur adipiscing elitt",
                "This app is lorem ipsum dolor sit amet, consectetur adipiscing elitt"];
    var index = 0;
    document.getElementById("incrementButton").addEventListener("click", function() {
        index++;
        if (index >= images.length) {
            window.location.href = "main.html";
        } else {
            document.getElementById("image").src = images[index];
            document.getElementById("choose").textContent = choose[index];
            document.getElementById("menu").textContent = menu[index];
            document.getElementById("desc").textContent = desc[index];
        }
    });
}
