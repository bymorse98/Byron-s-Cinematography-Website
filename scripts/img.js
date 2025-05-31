const enlargeImg = (this) => {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("fullPicture");

    modalImg.src = this.getAttribute("src");
}