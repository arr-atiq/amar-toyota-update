document.getElementById('icon-t').addEventListener("click", function () {
    document.getElementById("all-items").style.display = 'block';
    document.getElementById('icon-t').style.display = 'none';
    document.getElementById('icon-x').style.display = 'block';
})

document.getElementById('icon-x').addEventListener("click", function(){
    document.getElementById("all-items").style.display = 'none';
    document.getElementById('icon-x').style.display = 'none';
    document.getElementById('icon-t').style.display = 'block';
})

// for las navbar

document.getElementById('arrow-simple').addEventListener('click', function(){
    document.getElementById('last-items').style.display = 'block';
    document.getElementById('arrow-simple').style.display = 'none';
    document.getElementById('arrow-down').style.display = 'block';
})

document.getElementById('arrow-down').addEventListener('click', function(){
    document.getElementById('last-items').style.display = 'none';
    document.getElementById('arrow-simple').style.display = 'block';
    document.getElementById('arrow-down').style.display = 'none';
})



document.querySelector(".prevBtn").addEventListener("click", () => {
  changeSlides(-1);
});
document.querySelector(".nextBtn").addEventListener("click", () => {
  changeSlides(1);
});
var slideIndex = 1;
showSlides(slideIndex);
function changeSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slide");
  var dots = document.getElementsByClassName("Navdot");
  if (n > slides.length) {
     slideIndex = 1;
  }
  if (n < 1) {
     slideIndex = slides.length;
  }
  Array.from(slides).forEach(item => (item.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
}

// slider2

document.querySelector(".prevBtn2").addEventListener("click", () => {
  changeNewSlides(-1);
});
document.querySelector(".nextBtn2").addEventListener("click", () => {
  changeNewSlides(1);
});
var newSlideIndex = 1;
showNewSlides(newSlideIndex);
function changeNewSlides(n) {
  showNewSlides((newSlideIndex += n));
}
function currentSlide(n) {
  showNewSlides((newSlideIndex = n));
}
function showNewSlides(n) {
  var i;
  var newSlides = document.getElementsByClassName("Slide2");
  if (n > newSlides.length) {
     newSlideIndex = 1;
  }
  if (n < 1) {
    newSlideIndex = slides.length;
  }
  Array.from(newSlides).forEach(item => (item.style.display = "none"));
  newSlides[newSlideIndex - 1].style.display = "block";
}