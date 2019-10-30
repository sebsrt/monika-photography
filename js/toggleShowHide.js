function showOrHide() {
    let photo = document.getElementsByClassName("morePhotos");
    let button = document.getElementById("morePhotosButton");

    for (let x = 0; x < photo.length; x++) {
        if (photo[x].style.display === "none") {
            photo[x].style.display = "flex";
            button.style.display = "none";
        } else {
            photo[x].style.display = "none";
        }
    }

}
