function showOrHide() {
    var x = document.getElementById("morePhotos");
    var button = document.getElementById("morePhotosButton");
    if (x.style.display === "none") {
        x.style.display = "block";
        button.style.display = "none";
    } else {
        x.style.display = "none";
    }
}
