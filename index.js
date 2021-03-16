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

// for video control
// window.onload = function () {
//     var element = document.getElementById('video-con');
//     element.muted = "muted";
// }



// select id for allCarDiv

let FirstCarDiv = document.getElementById('first-car-group');
let SecondCarDiv = document.getElementById('second-car-group');
let ThirdCarDiv = document.getElementById('third-car-group');
let fourthCarDiv = document.getElementById('fourth-car-group');
let fifthCarDiv = document.getElementById('fifth-car-group');
let SixthCarDiv = document.getElementById('sixth-car-group');
let SeventhCarDiv = document.getElementById('seventh-car-group');

// select id for first individual car

let fCar1 = document.getElementById('car1');
let fCar2 = document.getElementById('car2');
let fCar3 = document.getElementById('car3');
let fCar4 = document.getElementById('car4');

// select id for second individual car

let fCar5 = document.getElementById('car5');
let fCar6 = document.getElementById('car6');
let fCar7 = document.getElementById('car7');
let fCar8 = document.getElementById('car8');

// select id for third individual car

let fCar9 = document.getElementById('car9');
let fCar10 = document.getElementById('car10');
let fCar11 = document.getElementById('car11');
let fCar12 = document.getElementById('car12');

// select id for fourth individual car

let fCar13 = document.getElementById('car13');
let fCar14 = document.getElementById('car14');
let fCar15 = document.getElementById('car15');
let fCar16 = document.getElementById('car16');

// select id for fifth individual car

let fCar17 = document.getElementById('car17');
let fCar18 = document.getElementById('car18');
let fCar19 = document.getElementById('car19');
let fCar20 = document.getElementById('car20');

// select id for sixth individual car

let fCar21 = document.getElementById('car21');
let fCar22 = document.getElementById('car22');
let fCar23 = document.getElementById('car23');
let fCar24 = document.getElementById('car24');

// select id for seventh individual car

let fCar25 = document.getElementById('car25');
let fCar26 = document.getElementById('car26');
let fCar27 = document.getElementById('car27');
let fCar28 = document.getElementById('car28');

// select id for individual title

let CarTitle1 = document.getElementById("title-1");
let CarTitle2 = document.getElementById("title-2");
let CarTitle3 = document.getElementById("title-3");
let CarTitle4 = document.getElementById("title-4");
let CarTitle5 = document.getElementById("title-5");
let CarTitle6 = document.getElementById("title-6");
let CarTitle7 = document.getElementById("title-7");

// select id for individual color button

let CButton1 = document.getElementById("color-btn1");
let CButton2 = document.getElementById("color-btn2");
let CButton3 = document.getElementById("color-btn3");
let CButton4 = document.getElementById("color-btn4");
let CButton5 = document.getElementById("color-btn5");
let CButton6 = document.getElementById("color-btn6");
let CButton7 = document.getElementById("color-btn7");

// Color Button Style
CButton1.style.cssText = "border: 1px solid #c00; color:white";
CButton2.style.cssText = "border: none; color:transparent";
CButton3.style.cssText = "border: none; color:transparent";
CButton4.style.cssText = "border: none; color:transparent";
CButton5.style.cssText = "border: none; color:transparent";
CButton6.style.cssText = "border: none; color:transparent";
CButton7.style.cssText = "border: none; color:transparent";

let carRotatePosition = 1;




// now i will set behavior

CButton1.addEventListener("click", function () {

    FirstCarDiv.style.display = "block";
    SecondCarDiv.style.display = "none";
    ThirdCarDiv.style.display = "none";
    fourthCarDiv.style.display = "none";
    fifthCarDiv.style.display = "none";
    SixthCarDiv.style.display = "none";
    SeventhCarDiv.style.display = "none";

    fCar1.style.display = 'block';
    fCar2.style.display = 'none';
    fCar3.style.display = 'none';
    fCar4.style.display = 'none';

    CarTitle1.style.display = "block";
    CarTitle2.style.display = "none";
    CarTitle3.style.display = "none";
    CarTitle4.style.display = "none";
    CarTitle5.style.display = "none";
    CarTitle6.style.display = "none";
    CarTitle7.style.display = "none";

    CButton1.style.cssText = "border: 1px solid #c00; color:white";
    CButton2.style.cssText = "border: none; color:transparent";
    CButton3.style.cssText = "border: none; color:transparent";
    CButton4.style.cssText = "border: none; color:transparent";
    CButton5.style.cssText = "border: none; color:transparent";
    CButton6.style.cssText = "border: none; color:transparent";
    CButton7.style.cssText = "border: none; color:transparent";

    carRotatePosition = 1;
})
CButton2.addEventListener("click", function () {

    FirstCarDiv.style.display = "none";
    SecondCarDiv.style.display = "block";
    ThirdCarDiv.style.display = "none";
    fourthCarDiv.style.display = "none";
    fifthCarDiv.style.display = "none";
    SixthCarDiv.style.display = "none";
    SeventhCarDiv.style.display = "none";

    fCar5.style.display = 'block';
    fCar6.style.display = 'none';
    fCar7.style.display = 'none';
    fCar8.style.display = 'none';

    CarTitle1.style.display = "none";
    CarTitle2.style.display = "block";
    CarTitle3.style.display = "none";
    CarTitle4.style.display = "none";
    CarTitle5.style.display = "none";
    CarTitle6.style.display = "none";
    CarTitle7.style.display = "none";

    CButton1.style.cssText = "border: none; color:transparent";
    CButton2.style.cssText = "border: 1px solid #c00; color:black";
    CButton3.style.cssText = "border: none; color:transparent";
    CButton4.style.cssText = "border: none; color:transparent";
    CButton5.style.cssText = "border: none; color:transparent";
    CButton6.style.cssText = "border: none; color:transparent";
    CButton7.style.cssText = "border: none; color:transparent";

    carRotatePosition = 1;
})

CButton3.addEventListener("click", function () {

    FirstCarDiv.style.display = "none";
    SecondCarDiv.style.display = "none";
    ThirdCarDiv.style.display = "block";
    fourthCarDiv.style.display = "none";
    fifthCarDiv.style.display = "none";
    SixthCarDiv.style.display = "none";
    SeventhCarDiv.style.display = "none";

    fCar9.style.display = 'block';
    fCar10.style.display = 'none';
    fCar11.style.display = 'none';
    fCar12.style.display = 'none';

    CarTitle1.style.display = "none";
    CarTitle2.style.display = "none";
    CarTitle3.style.display = "block";
    CarTitle4.style.display = "none";
    CarTitle5.style.display = "none";
    CarTitle6.style.display = "none";
    CarTitle7.style.display = "none";

    CButton1.style.cssText = "border: none; color:transparent";
    CButton2.style.cssText = "border: none; color:transparent";
    CButton3.style.cssText = "border: 1px solid #c00; color:white";
    CButton4.style.cssText = "border: none; color:transparent";
    CButton5.style.cssText = "border: none; color:transparent";
    CButton6.style.cssText = "border: none; color:transparent";
    CButton7.style.cssText = "border: none; color:transparent";

    carRotatePosition = 1;
})
CButton4.addEventListener("click", function () {

    FirstCarDiv.style.display = "none";
    SecondCarDiv.style.display = "none";
    ThirdCarDiv.style.display = "none";
    fourthCarDiv.style.display = "block";
    fifthCarDiv.style.display = "none";
    SixthCarDiv.style.display = "none";
    SeventhCarDiv.style.display = "none";

    fCar13.style.display = 'block';
    fCar14.style.display = 'none';
    fCar15.style.display = 'none';
    fCar16.style.display = 'none';

    CarTitle1.style.display = "none";
    CarTitle2.style.display = "none";
    CarTitle3.style.display = "none";
    CarTitle4.style.display = "block";
    CarTitle5.style.display = "none";
    CarTitle6.style.display = "none";
    CarTitle7.style.display = "none";

    CButton1.style.cssText = "border: none; color:transparent";
    CButton2.style.cssText = "border: none; color:transparent";
    CButton3.style.cssText = "border: none; color:transparent";
    CButton4.style.cssText = "border: 1px solid #c00; color:white";
    CButton5.style.cssText = "border: none; color:transparent";
    CButton6.style.cssText = "border: none; color:transparent";
    CButton7.style.cssText = "border: none; color:transparent";

    carRotatePosition = 1;
})
CButton5.addEventListener("click", function () {

    FirstCarDiv.style.display = "none";
    SecondCarDiv.style.display = "none";
    ThirdCarDiv.style.display = "none";
    fourthCarDiv.style.display = "none";
    fifthCarDiv.style.display = "block";
    SixthCarDiv.style.display = "none";
    SeventhCarDiv.style.display = "none";

    fCar17.style.display = 'block';
    fCar18.style.display = 'none';
    fCar19.style.display = 'none';
    fCar20.style.display = 'none';

    CarTitle1.style.display = "none";
    CarTitle2.style.display = "none";
    CarTitle3.style.display = "none";
    CarTitle4.style.display = "none";
    CarTitle5.style.display = "block";
    CarTitle6.style.display = "none";
    CarTitle7.style.display = "none";

    CButton1.style.cssText = "border: none; color:transparent";
    CButton2.style.cssText = "border: none; color:transparent";
    CButton3.style.cssText = "border: none; color:transparent";
    CButton4.style.cssText = "border: none; color:transparent";
    CButton5.style.cssText = "border: 1px solid #c00; color:black";
    CButton6.style.cssText = "border: none; color:transparent";
    CButton7.style.cssText = "border: none; color:transparent";

    carRotatePosition = 1;
})
CButton6.addEventListener("click", function () {

    FirstCarDiv.style.display = "none";
    SecondCarDiv.style.display = "none";
    ThirdCarDiv.style.display = "none";
    fourthCarDiv.style.display = "none";
    fifthCarDiv.style.display = "none";
    SixthCarDiv.style.display = "block";
    SeventhCarDiv.style.display = "none";

    fCar21.style.display = 'block';
    fCar22.style.display = 'none';
    fCar23.style.display = 'none';
    fCar24.style.display = 'none';

    CarTitle1.style.display = "none";
    CarTitle2.style.display = "none";
    CarTitle3.style.display = "none";
    CarTitle4.style.display = "none";
    CarTitle5.style.display = "none";
    CarTitle6.style.display = "block";
    CarTitle7.style.display = "none";

    CButton1.style.cssText = "border: none; color:transparent";
    CButton2.style.cssText = "border: none; color:transparent";
    CButton3.style.cssText = "border: none; color:transparent";
    CButton4.style.cssText = "border: none; color:transparent";
    CButton5.style.cssText = "border: none; color:transparent";
    CButton6.style.cssText = "border: 1px solid #c00; color:black";
    CButton7.style.cssText = "border: none; color:transparent";

    carRotatePosition = 1;
})
CButton7.addEventListener("click", function () {

    FirstCarDiv.style.display = "none";
    SecondCarDiv.style.display = "none";
    ThirdCarDiv.style.display = "none";
    fourthCarDiv.style.display = "none";
    fifthCarDiv.style.display = "none";
    SixthCarDiv.style.display = "none";
    SeventhCarDiv.style.display = "block";

    fCar25.style.display = 'block';
    fCar26.style.display = 'none';
    fCar27.style.display = 'none';
    fCar28.style.display = 'none';

    CarTitle1.style.display = "none";
    CarTitle2.style.display = "none";
    CarTitle3.style.display = "none";
    CarTitle4.style.display = "none";
    CarTitle5.style.display = "none";
    CarTitle6.style.display = "none";
    CarTitle7.style.display = "block";

    CButton1.style.cssText = "border: none; color:transparent";
    CButton2.style.cssText = "border: none; color:transparent";
    CButton3.style.cssText = "border: none; color:transparent";
    CButton4.style.cssText = "border: none; color:transparent";
    CButton5.style.cssText = "border: none; color:transparent";
    CButton6.style.cssText = "border: none; color:transparent";
    CButton7.style.cssText = "border: 1px solid #c00; color:white";

    carRotatePosition = 1;
})

// handle rotate button

let rightRotate = document.getElementById('right-rotate-btn');
let leftRotate = document.getElementById('left-rotate-btn');



carPosition = 0;
rightRotate.addEventListener("click", defaultShowCar);
function defaultShowCar() {
    if (carPosition === 0) {
        fCar1.style.display = 'block';
        fCar2.style.display = 'none';
        fCar3.style.display = 'none';
        fCar4.style.display = 'none';
        carPosition = carPosition + 1;
    }
    else if (carPosition === 1) {
        fCar1.style.display = 'none';
        fCar2.style.display = 'block';
        fCar3.style.display = 'none';
        fCar4.style.display = 'none';
        carPosition = carPosition + 1;
    }
    else if (carPosition === 2) {
        fCar1.style.display = 'none';
        fCar2.style.display = 'none';
        fCar3.style.display = 'block';
        fCar4.style.display = 'none';
        carPosition = carPosition + 1;
    }
    else if (carPosition === 3) {
        fCar1.style.display = 'none';
        fCar2.style.display = 'none';
        fCar3.style.display = 'none';
        fCar4.style.display = 'block';
        carPosition = carPosition + 1;
    }
    else {
        fCar1.style.display = 'block';
        fCar2.style.display = 'none';
        fCar3.style.display = 'none';
        fCar4.style.display = 'none';
        carPosition = 0;
    }
}



leftRotate.addEventListener("click",defaultBackCar);
function defaultBackCar() {
    if (carPosition === 0) {
        fCar1.style.display = 'none';
        fCar2.style.display = 'none';
        fCar3.style.display = 'none';
        fCar4.style.display = 'block';
        carPosition = carPosition + 1;
    }
    else if (carPosition === 1) {
        fCar1.style.display = 'none';
        fCar2.style.display = 'none';
        fCar3.style.display = 'block';
        fCar4.style.display = 'none';
        carPosition = carPosition + 1;
    }
    else if (carPosition === 2) {
        fCar1.style.display = 'none';
        fCar2.style.display = 'block';
        fCar3.style.display = 'none';
        fCar4.style.display = 'none';
        carPosition = carPosition + 1;
    }
    else if (carPosition === 3) {
        fCar1.style.display = 'block';
        fCar2.style.display = 'none';
        fCar3.style.display = 'none';
        fCar4.style.display = 'none';
        carPosition = carPosition + 1;
    }
    else {
        fCar1.style.display = 'none';
        fCar2.style.display = 'none';
        fCar3.style.display = 'none';
        fCar4.style.display = 'block';
        carPosition = 0;
    }
}



// this is rightRotate button handle
rightRotate.addEventListener("click", function () {
    if (FirstCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar1.style.display = 'none';
            fCar2.style.display = 'block';
            fCar3.style.display = 'none';
            fCar4.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar1.style.display = 'none';
            fCar2.style.display = 'none';
            fCar3.style.display = 'block';
            fCar4.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar1.style.display = 'none';
            fCar2.style.display = 'none';
            fCar3.style.display = 'none';
            fCar4.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar1.style.display = 'block';
            fCar2.style.display = 'none';
            fCar3.style.display = 'none';
            fCar4.style.display = 'none';
            carRotatePosition = 1;
        }
    }
    else if (SecondCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar5.style.display = 'none';
            fCar6.style.display = 'block';
            fCar7.style.display = 'none';
            fCar8.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar5.style.display = 'none';
            fCar6.style.display = 'none';
            fCar7.style.display = 'block';
            fCar8.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar5.style.display = 'none';
            fCar6.style.display = 'none';
            fCar7.style.display = 'none';
            fCar8.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar5.style.display = 'block';
            fCar6.style.display = 'none';
            fCar7.style.display = 'none';
            fCar8.style.display = 'none';
            carRotatePosition = 1;
        }
    }
    else if (ThirdCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar9.style.display = 'none';
            fCar10.style.display = 'block';
            fCar11.style.display = 'none';
            fCar12.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar9.style.display = 'none';
            fCar10.style.display = 'none';
            fCar11.style.display = 'block';
            fCar12.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar9.style.display = 'none';
            fCar10.style.display = 'none';
            fCar11.style.display = 'none';
            fCar12.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar9.style.display = 'block';
            fCar10.style.display = 'none';
            fCar11.style.display = 'none';
            fCar12.style.display = 'none';
            carRotatePosition = 1;
        }
    }
    else if (fourthCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar13.style.display = 'none';
            fCar14.style.display = 'block';
            fCar15.style.display = 'none';
            fCar16.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar13.style.display = 'none';
            fCar14.style.display = 'none';
            fCar15.style.display = 'block';
            fCar16.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar13.style.display = 'none';
            fCar14.style.display = 'none';
            fCar15.style.display = 'none';
            fCar16.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar13.style.display = 'block';
            fCar14.style.display = 'none';
            fCar15.style.display = 'none';
            fCar16.style.display = 'none';
            carRotatePosition = 1;
        }
    }
    else if (fifthCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar17.style.display = 'none';
            fCar18.style.display = 'block';
            fCar19.style.display = 'none';
            fCar20.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar17.style.display = 'none';
            fCar18.style.display = 'none';
            fCar19.style.display = 'block';
            fCar20.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar17.style.display = 'none';
            fCar18.style.display = 'none';
            fCar19.style.display = 'none';
            fCar20.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar17.style.display = 'block';
            fCar18.style.display = 'none';
            fCar19.style.display = 'none';
            fCar20.style.display = 'none';
            carRotatePosition = 1;
        }
    }
    else if (SixthCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar21.style.display = 'none';
            fCar22.style.display = 'block';
            fCar23.style.display = 'none';
            fCar24.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar21.style.display = 'none';
            fCar22.style.display = 'none';
            fCar23.style.display = 'block';
            fCar24.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar21.style.display = 'none';
            fCar22.style.display = 'none';
            fCar23.style.display = 'none';
            fCar24.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar21.style.display = 'block';
            fCar22.style.display = 'none';
            fCar23.style.display = 'none';
            fCar24.style.display = 'none';
            carRotatePosition = 1;
        }
    }
    else if (SeventhCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar25.style.display = 'none';
            fCar26.style.display = 'block';
            fCar27.style.display = 'none';
            fCar28.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar25.style.display = 'none';
            fCar26.style.display = 'none';
            fCar27.style.display = 'block';
            fCar28.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar25.style.display = 'none';
            fCar26.style.display = 'none';
            fCar27.style.display = 'none';
            fCar28.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar25.style.display = 'block';
            fCar26.style.display = 'none';
            fCar27.style.display = 'none';
            fCar28.style.display = 'none';
            carRotatePosition = 1;
        }
    }
})

// this is leftRotate handle
leftRotate.addEventListener("click", function () {
    if (FirstCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar1.style.display = 'none';
            fCar2.style.display = 'none';
            fCar3.style.display = 'none';
            fCar4.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar1.style.display = 'none';
            fCar2.style.display = 'none';
            fCar3.style.display = 'block';
            fCar4.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar1.style.display = 'none';
            fCar2.style.display = 'block';
            fCar3.style.display = 'none';
            fCar4.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar1.style.display = 'block';
            fCar2.style.display = 'none';
            fCar3.style.display = 'none';
            fCar4.style.display = 'none';
            carRotatePosition = 1;
        }
    }
    else if (SecondCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar5.style.display = 'none';
            fCar6.style.display = 'none';
            fCar7.style.display = 'none';
            fCar8.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar5.style.display = 'none';
            fCar6.style.display = 'none';
            fCar7.style.display = 'block';
            fCar8.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar5.style.display = 'none';
            fCar6.style.display = 'block';
            fCar7.style.display = 'none';
            fCar8.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar5.style.display = 'block';
            fCar6.style.display = 'none';
            fCar7.style.display = 'none';
            fCar8.style.display = 'none';
            carRotatePosition = 1;
        }
    }
    else if (ThirdCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar9.style.display = 'none';
            fCar10.style.display = 'none';
            fCar11.style.display = 'none';
            fCar12.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar9.style.display = 'none';
            fCar10.style.display = 'none';
            fCar11.style.display = 'block';
            fCar12.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar9.style.display = 'none';
            fCar10.style.display = 'block';
            fCar11.style.display = 'none';
            fCar12.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar9.style.display = 'block';
            fCar10.style.display = 'none';
            fCar11.style.display = 'none';
            fCar12.style.display = 'none';
            carRotatePosition = 1;
        }
    }
    else if (fourthCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar13.style.display = 'none';
            fCar14.style.display = 'none';
            fCar15.style.display = 'none';
            fCar16.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar13.style.display = 'none';
            fCar14.style.display = 'none';
            fCar15.style.display = 'block';
            fCar16.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar13.style.display = 'none';
            fCar14.style.display = 'block';
            fCar15.style.display = 'none';
            fCar16.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar13.style.display = 'block';
            fCar14.style.display = 'none';
            fCar15.style.display = 'none';
            fCar16.style.display = 'none';
            carRotatePosition = 1;
        }
    }
    else if (fifthCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar17.style.display = 'none';
            fCar18.style.display = 'none';
            fCar19.style.display = 'none';
            fCar20.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar17.style.display = 'none';
            fCar18.style.display = 'none';
            fCar19.style.display = 'block';
            fCar20.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar17.style.display = 'none';
            fCar18.style.display = 'block';
            fCar19.style.display = 'none';
            fCar20.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar17.style.display = 'block';
            fCar18.style.display = 'none';
            fCar19.style.display = 'none';
            fCar20.style.display = 'none';
            carRotatePosition = 1;
        }
    }
    else if (SixthCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar21.style.display = 'none';
            fCar22.style.display = 'none';
            fCar23.style.display = 'none';
            fCar24.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar21.style.display = 'none';
            fCar22.style.display = 'none';
            fCar23.style.display = 'block';
            fCar24.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar21.style.display = 'none';
            fCar22.style.display = 'block';
            fCar23.style.display = 'none';
            fCar24.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar21.style.display = 'block';
            fCar22.style.display = 'none';
            fCar23.style.display = 'none';
            fCar24.style.display = 'none';
            carRotatePosition = 1;
        }
    }
    else if (SeventhCarDiv.style.display === "block") {
        if (carRotatePosition === 1) {
            fCar25.style.display = 'none';
            fCar26.style.display = 'none';
            fCar27.style.display = 'none';
            fCar28.style.display = 'block';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 2) {
            fCar25.style.display = 'none';
            fCar26.style.display = 'none';
            fCar27.style.display = 'block';
            fCar28.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else if (carRotatePosition === 3) {
            fCar25.style.display = 'none';
            fCar26.style.display = 'block';
            fCar27.style.display = 'none';
            fCar28.style.display = 'none';
            carRotatePosition = carRotatePosition + 1;
        }
        else {
            fCar25.style.display = 'block';
            fCar26.style.display = 'none';
            fCar27.style.display = 'none';
            fCar28.style.display = 'none';
            carRotatePosition = 1;
        }
    }
})



