function fade(pageToLoad) {
    var cover = document.getElementById("cover");
    cover.style.animation = "fadeInAnimation 0.2s ease-in-out";
    setTimeout(() => {
        cover.style.opacity = 1;
        window.location = pageToLoad;
    }, 200);
}