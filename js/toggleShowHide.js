let showMorePictures = true;
function showOrHide() {
    const showButton = document.getElementById('morePhotosButton');
    const hideButton = document.getElementById('lessPhotosButton');

    showMorePictures = !showMorePictures;
    showButton.hidden = showMorePictures;
    hideButton.hidden = !showMorePictures;

}
