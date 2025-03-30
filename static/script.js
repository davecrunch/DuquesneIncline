window.onload = function () {
    displaySlide(slideIndex);
};

let slideIndex = 1;
displaySlide(slideIndex);
 
function moveSlides(n) {
    displaySlide(slideIndex += n);
}
 
function activeSlide(n) {
    displaySlide(slideIndex = n);
}
 
function displaySlide(n) {
    let i;
    let totalslides =
        document.getElementsByClassName("slide");
    let totaldots =
        document.getElementsByClassName("footerdot");
 
    if (n > totalslides.length) {
        slideIndex = 1;
    }
 
    if (n < 1) {
        slideIndex = totalslides.length;
    }
    for (i = 0; i < totalslides.length; i++) {
        totalslides[i].style.display = "none";
    }
    for (i = 0; i < totaldots.length; i++) {
        totaldots[i].className =
            totaldots[i].className.replace(" active", "");
    }
    totalslides[slideIndex - 1].style.display = "block";
    totaldots[slideIndex - 1].className += " active";
}


//Consulted the below website on how to use carousels:
//https://www.geeksforgeeks.org/how-to-design-image-slider-using-jquery/