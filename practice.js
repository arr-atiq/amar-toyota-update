
//Search Button click on show search box
// document.getElementById('search-close-btn').style.display = 'none';


// document.getElementById("search-btn").addEventListener("click", function () {
//   const searchBox = document.getElementById("search-box");
//   document.getElementById('search-close-btn').style.display = 'block';
//   document.getElementById('search-btn').style.display = 'none';
//   searchBox.style.display = 'block';
// })

// document.getElementById("search-close-btn").addEventListener("click", function () {
//   const searchBox = document.getElementById("search-box");
//   document.getElementById('search-close-btn').style.display = 'none';
//   document.getElementById('search-btn').style.display = 'block';
//   searchBox.style.display = 'none';
// })


function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("show-btn").style.display = 'none';
    document.getElementById("hide-btn").style.display = 'block';
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("show-btn").style.display = 'block';
    document.getElementById("hide-btn").style.display = 'none';
  }
  
  
  
  
  //Sidebar menu show hide
  
  function vehicles() {
    let vehicle = document.getElementById("vehicles-menu");
    if (vehicle.style.display === 'none') {
      vehicle.style.display = 'block';
    } else {
      vehicle.style.display = 'none';
    }
  }
  
  function industrial() {
    let menu = document.getElementById("industrial-menu");
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }
  function corporate() {
    let menu = document.getElementById("corporate-menu");
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }
  
  function events() {
    let menu = document.getElementById("events-menu");
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
  
    } else {
      menu.style.display = 'none';
    }
  }
  
  
  
  function galeryShow() {
    let gelary = document.getElementById("galery-show");
    if (gelary.style.display === "none") {
      gelary.style.display = "block";
    } else {
      gelary.style.display = "none";
  
    }
  }
  
  
  
  function showSubMenu() {
    let subMenu = document.getElementById("sub-navbar-menu");
    let screenheight = 230;
  
    if (subMenu.style.display === 'none') {
      subMenu.style.display = "block";
      subMenu.style.height = `${screenheight}px`;
  
      document.getElementById("show-menu").classList.replace("menu-inactive", "menu-active");
  
    } else {
      subMenu.style.display = "none";
      subMenu.style.height = 0;
      document.getElementById("show-menu").classList.replace("menu-active", "menu-inactive");
  
  
    }
  }
  
  
  
  
  //360 degre Car rotation area
  
  
  let carRotatePosition = 1;
  
  //Car Swap
  //Car title
  let title1 = document.getElementById("title-1");
  let title2 = document.getElementById("title-2");
  let title3 = document.getElementById("title-3");
  let title4 = document.getElementById("title-4");
  let title5 = document.getElementById("title-5");
  let title6 = document.getElementById("title-6");
  let title7 = document.getElementById("title-7");
  // let title8 = document.getElementById("title-8");
  
  
  
  //Color Button
  let color1 = document.getElementById("color-1");
  let color2 = document.getElementById("color-2");
  let color3 = document.getElementById("color-3");
  let color4 = document.getElementById("color-4");
  let color5 = document.getElementById("color-5");
  let color6 = document.getElementById("color-6");
  let color7 = document.getElementById("color-7");
  // let color8 = document.getElementById("color-8");
  
  
  
  //Color Button Style
  color1.style.cssText = "border: 1px solid #c00; color:white";
  color2.style.cssText = "border: none; color:transparent";
  color3.style.cssText = "border: none; color:transparent";
  color4.style.cssText = "border: none; color:transparent";
  color5.style.cssText = "border: none; color:transparent";
  color6.style.cssText = "border: none; color:transparent";
  color7.style.cssText = "border: none; color:transparent";
  // color8.style.cssText = "border: none; color:transparent";
  
  
  
  //Car section div
  let firstCar = document.getElementById("car-1");
  let secondCar = document.getElementById("car-2");
  let thirdCar = document.getElementById("car-3");
  let fourthCar = document.getElementById("car-4");
  let fifthCar = document.getElementById("car-5");
  let sixCar = document.getElementById("car-6");
  let sevenCar = document.getElementById("car-7");
  // let eightCar = document.getElementById("car-8");
  
  
  //Car Image for swap car group1
  let firstCar11 = document.getElementById("car-11");
  let secondCar12 = document.getElementById("car-12");
  let thirdCar13 = document.getElementById("car-13");
  let fourthCar14 = document.getElementById("car-14");
  
  //Initial Car section block
  firstCar.style.display = "block";
  
  //First Car show
  firstCar11.style.display = "block";
  secondCar12.style.display = "none";
  thirdCar13.style.display = "none";
  fourthCar14.style.display = "none";
  
  
  
  title1.style.display = "block";
  title2.style.display = "none";
  title3.style.display = "none";
  title4.style.display = "none";
  title5.style.display = "none";
  title6.style.display = "none";
  title7.style.display = "none";
  // title8.style.display = "none";
  
  function colorFirst() {
  
    firstCar.style.display = "block";
    secondCar.style.display = "none";
    thirdCar.style.display = "none";
    fourthCar.style.display = "none";
    fifthCar.style.display = "none";
    sixCar.style.display = "none";
    sevenCar.style.display = "none";
    // eightCar.style.display = "none";
  
  
    color1.style.cssText = "border: 1px solid #c00; color:white";
    color2.style.cssText = "border: none; color:transparent";
    color3.style.cssText = "border: none; color:transparent";
    color4.style.cssText = "border: none; color:transparent";
    color5.style.cssText = "border: none; color:transparent";
    color6.style.cssText = "border: none; color:transparent";
    color7.style.cssText = "border: none; color:transparent";
    // color8.style.cssText = "border: none; color:transparent";
  
  
    title1.style.display = "block";
    title2.style.display = "none";
    title3.style.display = "none";
    title4.style.display = "none";
    title5.style.display = "none";
    title6.style.display = "none";
    title7.style.display = "none";
    // title8.style.display = "none";
  
  
    carRotatePosition = 1;
  
  
  }
  
  //Car Image for swap car group2
  let firstCar21 = document.getElementById("car-21");
  let secondCar22 = document.getElementById("car-22");
  let thirdCar23 = document.getElementById("car-23");
  let fourthCar24 = document.getElementById("car-24");
  
  function colorSecond() {
  
    firstCar.style.display = "none";
    secondCar.style.display = "block";
    thirdCar.style.display = "none";
    fourthCar.style.display = "none";
    fifthCar.style.display = "none";
    sixCar.style.display = "none";
    sevenCar.style.display = "none";
    // eightCar.style.display = "none";
  
  
    firstCar21.style.display = 'block';
    secondCar22.style.display = 'none';
    thirdCar23.style.display = 'none';
    fourthCar24.style.display = 'none';
  
  
    color1.style.cssText = "border: none; color:transparent";
    color2.style.cssText = "border: 1px solid #c00; color:black";
    color3.style.cssText = "border: none; color:transparent";
    color4.style.cssText = "border: none; color:transparent";
    color5.style.cssText = "border: none; color:transparent";
    color6.style.cssText = "border: none; color:transparent";
    color7.style.cssText = "border: none; color:transparent";
    // color8.style.cssText = "border: none; color:transparent";
  
  
    title1.style.display = "none";
    title2.style.display = "block";
    title3.style.display = "none";
    title4.style.display = "none";
    title5.style.display = "none";
    title6.style.display = "none";
    title7.style.display = "none";
    // title8.style.display = "none";
  
    carRotatePosition = 1;
  
  }
  
  
  //Car Image for swap car group3
  let firstCar31 = document.getElementById("car-31");
  let secondCar32 = document.getElementById("car-32");
  let thirdCar33 = document.getElementById("car-33");
  let fourthCar34 = document.getElementById("car-34");
  
  function colorThird() {
  
    firstCar.style.display = "none";
    secondCar.style.display = "none";
    thirdCar.style.display = "block";
    fourthCar.style.display = "none";
    fifthCar.style.display = "none";
    sixCar.style.display = "none";
    sevenCar.style.display = "none";
    // eightCar.style.display = "none";
  
  
    firstCar31.style.display = 'block';
    secondCar32.style.display = 'none';
    thirdCar33.style.display = 'none';
    fourthCar34.style.display = 'none';
  
  
    color1.style.cssText = "border: none; color:transparent";
    color2.style.cssText = "border: none; color:transparent";
    color3.style.cssText = "border: 1px solid #c00; color:white";
    color4.style.cssText = "border: none; color:transparent";
    color5.style.cssText = "border: none; color:transparent";
    color6.style.cssText = "border: none; color:transparent";
    color7.style.cssText = "border: none; color:transparent";
    // color8.style.cssText = "border: none; color:transparent";
  
  
    title1.style.display = "none";
    title2.style.display = "none";
    title3.style.display = "block";
    title4.style.display = "none";
    title5.style.display = "none";
    title6.style.display = "none";
    title7.style.display = "none";
    // title8.style.display = "none";
  
    carRotatePosition = 1;
  
  
  }
  
  //Car Image for swap car group4
  let firstCar41 = document.getElementById("car-41");
  let secondCar42 = document.getElementById("car-42");
  let thirdCar43 = document.getElementById("car-43");
  let fourthCar44 = document.getElementById("car-44");
  
  function colorFourth() {
  
    firstCar.style.display = "none";
    secondCar.style.display = "none";
    thirdCar.style.display = "none";
    fourthCar.style.display = "block";
    fifthCar.style.display = "none";
    sixCar.style.display = "none";
    sevenCar.style.display = "none";
    // eightCar.style.display = "none";
  
  
    firstCar41.style.display = 'block';
    secondCar42.style.display = 'none';
    thirdCar43.style.display = 'none';
    fourthCar44.style.display = 'none';
  
  
    color1.style.cssText = "border: none; color:transparent";
    color2.style.cssText = "border: none; color:transparent";
    color3.style.cssText = "border: none; color:transparent";
    color4.style.cssText = "border: 1px solid #c00; color:white";
    color5.style.cssText = "border: none; color:transparent";
    color6.style.cssText = "border: none; color:transparent";
    color7.style.cssText = "border: none; color:transparent";
    // color8.style.cssText = "border: none; color:transparent";
  
  
    title1.style.display = "none";
    title2.style.display = "none";
    title3.style.display = "none";
    title4.style.display = "block";
    title5.style.display = "none";
    title6.style.display = "none";
    title7.style.display = "none";
    // title8.style.display = "none";
  
  
    carRotatePosition = 1;
  
  
  }
  
  
  
  //Car Image for swap car group5
  let firstCar51 = document.getElementById("car-51");
  let secondCar52 = document.getElementById("car-52");
  let thirdCar53 = document.getElementById("car-53");
  let fourthCar54 = document.getElementById("car-54");
  
  function colorFifth() {
  
    firstCar.style.display = "none";
    secondCar.style.display = "none";
    thirdCar.style.display = "none";
    fourthCar.style.display = "none";
    fifthCar.style.display = "block";
    sixCar.style.display = "none";
    sevenCar.style.display = "none";
    // eightCar.style.display = "none";
  
  
    firstCar51.style.display = 'block';
    secondCar52.style.display = 'none';
    thirdCar53.style.display = 'none';
    fourthCar54.style.display = 'none';
  
  
    color1.style.cssText = "border: none; color:transparent";
    color2.style.cssText = "border: none; color:transparent";
    color3.style.cssText = "border: none; color:transparent";
    color4.style.cssText = "border: none; color:transparent";
    color5.style.cssText = "border: 1px solid #c00; color:black";
    color6.style.cssText = "border: none; color:transparent";
    color7.style.cssText = "border: none; color:transparent";
    // color8.style.cssText = "border: none; color:transparent";
  
  
    title1.style.display = "none";
    title2.style.display = "none";
    title3.style.display = "none";
    title4.style.display = "none";
    title5.style.display = "block";
    title6.style.display = "none";
    title7.style.display = "none";
    // title8.style.display = "none";
  
    carRotatePosition = 1;
  
  
  }
  
  
  //Car Image for swap car group6
  let firstCar61 = document.getElementById("car-61");
  let secondCar62 = document.getElementById("car-62");
  let thirdCar63 = document.getElementById("car-63");
  let fourthCar64 = document.getElementById("car-64");
  
  function colorSix() {
  
    firstCar.style.display = "none";
    secondCar.style.display = "none";
    thirdCar.style.display = "none";
    fourthCar.style.display = "none";
    fifthCar.style.display = "none";
    sixCar.style.display = "block";
    sevenCar.style.display = "none";
    // eightCar.style.display = "none";
  
  
    firstCar61.style.display = 'block';
    secondCar62.style.display = 'none';
    thirdCar63.style.display = 'none';
    fourthCar64.style.display = 'none';
  
  
    color1.style.cssText = "border: none; color:transparent";
    color2.style.cssText = "border: none; color:transparent";
    color3.style.cssText = "border: none; color:transparent";
    color4.style.cssText = "border: none; color:transparent";
    color5.style.cssText = "border: none; color:transparent";
    color6.style.cssText = "border: 1px solid #c00; color:black";
    color7.style.cssText = "border: none; color:transparent";
    // color8.style.cssText = "border: none; color:transparent";
  
  
    title1.style.display = "none";
    title2.style.display = "none";
    title3.style.display = "none";
    title4.style.display = "none";
    title5.style.display = "none";
    title6.style.display = "block";
    title7.style.display = "none";
    // title8.style.display = "none";
  
    carRotatePosition = 1;
  
  
  }
  
  
  //Car Image for swap car group7
  let firstCar71 = document.getElementById("car-71");
  let secondCar72 = document.getElementById("car-72");
  let thirdCar73 = document.getElementById("car-73");
  let fourthCar74 = document.getElementById("car-74");
  
  function colorSeven() {
  
    firstCar.style.display = "none";
    secondCar.style.display = "none";
    thirdCar.style.display = "none";
    fourthCar.style.display = "none";
    fifthCar.style.display = "none";
    sixCar.style.display = "none";
    sevenCar.style.display = "block";
    // eightCar.style.display = "none";
  
  
    firstCar71.style.display = 'block';
    secondCar72.style.display = 'none';
    thirdCar73.style.display = 'none';
    fourthCar74.style.display = 'none';
  
  
    color1.style.cssText = "border: none; color:transparent";
    color2.style.cssText = "border: none; color:transparent";
    color3.style.cssText = "border: none; color:transparent";
    color4.style.cssText = "border: none; color:transparent";
    color5.style.cssText = "border: none; color:transparent";
    color6.style.cssText = "border: none; color:transparent";
    color7.style.cssText = "border: 1px solid #c00; color:white";
    // color8.style.cssText = "border: none; color:transparent";
  
  
    title1.style.display = "none";
    title2.style.display = "none";
    title3.style.display = "none";
    title4.style.display = "none";
    title5.style.display = "none";
    title6.style.display = "none";
    title7.style.display = "block";
    // title8.style.display = "none";
  
  
  
    carRotatePosition = 1;
  
  
  }
  
  //Car Image for swap car group8
  let firstCar81 = document.getElementById("car-81");
  let secondCar82 = document.getElementById("car-82");
  let thirdCar83 = document.getElementById("car-83");
  let fourthCar84 = document.getElementById("car-84");
  
  function colorEight() {
  
    firstCar.style.display = "none";
    secondCar.style.display = "none";
    thirdCar.style.display = "none";
    fourthCar.style.display = "none";
    fifthCar.style.display = "none";
    sixCar.style.display = "none";
    sevenCar.style.display = "none";
    // eightCar.style.display = "block";
  
  
    firstCar81.style.display = 'block';
    secondCar82.style.display = 'none';
    thirdCar83.style.display = 'none';
    fourthCar84.style.display = 'none';
  
  
    color1.style.cssText = "border: none; color:transparent";
    color2.style.cssText = "border: none; color:transparent";
    color3.style.cssText = "border: none; color:transparent";
    color4.style.cssText = "border: none; color:transparent";
    color5.style.cssText = "border: none; color:transparent";
    color6.style.cssText = "border: none; color:transparent";
    color7.style.cssText = "border: none; color:transparent";
    // color8.style.cssText = "border: 1px solid #c00; color:white";
  
  
    title1.style.display = "none";
    title2.style.display = "none";
    title3.style.display = "none";
    title4.style.display = "none";
    title5.style.display = "none";
    title6.style.display = "none";
    title7.style.display = "none";
    // title8.style.display = "block";
  
  
    carRotatePosition = 1;
  
  
  }
  
  
  //Rotate car 360deg
  
  
  function rotateRight() {
  
    if (firstCar.style.display === "block") {
  
      if (carRotatePosition === 1) {
  
        firstCar11.style.display = "none";
        secondCar12.style.display = "block";
        thirdCar13.style.display = "none";
        fourthCar14.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 2) {
        firstCar11.style.display = "none";
        secondCar12.style.display = "none";
        thirdCar13.style.display = "block";
        fourthCar14.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 3) {
        firstCar11.style.display = "none";
        secondCar12.style.display = "none";
        thirdCar13.style.display = "none";
        fourthCar14.style.display = "block";
        carRotatePosition = carRotatePosition + 1;
      } else {
        firstCar11.style.display = "block";
        secondCar12.style.display = "none";
        thirdCar13.style.display = "none";
        fourthCar14.style.display = "none";
        carRotatePosition = 1;
      }
  
    } else if (secondCar.style.display === "block") {
  
      if (carRotatePosition === 1) {
  
        firstCar21.style.display = "none";
        secondCar22.style.display = "block";
        thirdCar23.style.display = "none";
        fourthCar24.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 2) {
        firstCar21.style.display = "none";
        secondCar22.style.display = "none";
        thirdCar23.style.display = "block";
        fourthCar24.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 3) {
        firstCar21.style.display = "none";
        secondCar22.style.display = "none";
        thirdCar23.style.display = "none";
        fourthCar24.style.display = "block";
        carRotatePosition = carRotatePosition + 1;
      } else {
        firstCar21.style.display = "block";
        secondCar22.style.display = "none";
        thirdCar23.style.display = "none";
        fourthCar24.style.display = "none";
        carRotatePosition = 1;
      }
  
    } else if (thirdCar.style.display === "block") {
  
      if (carRotatePosition === 1) {
  
        firstCar31.style.display = "none";
        secondCar32.style.display = "block";
        thirdCar33.style.display = "none";
        fourthCar34.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 2) {
        firstCar31.style.display = "none";
        secondCar32.style.display = "none";
        thirdCar33.style.display = "block";
        fourthCar34.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 3) {
        firstCar31.style.display = "none";
        secondCar32.style.display = "none";
        thirdCar33.style.display = "none";
        fourthCar34.style.display = "block";
        carRotatePosition = carRotatePosition + 1;
      } else {
        firstCar31.style.display = "block";
        secondCar32.style.display = "none";
        thirdCar33.style.display = "none";
        fourthCar34.style.display = "none";
        carRotatePosition = 1;
      }
  
    } else if (fourthCar.style.display === "block") {
  
      if (carRotatePosition === 1) {
  
        firstCar41.style.display = "none";
        secondCar42.style.display = "block";
        thirdCar43.style.display = "none";
        fourthCar44.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 2) {
        firstCar41.style.display = "none";
        secondCar42.style.display = "none";
        thirdCar43.style.display = "block";
        fourthCar44.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 3) {
        firstCar41.style.display = "none";
        secondCar42.style.display = "none";
        thirdCar43.style.display = "none";
        fourthCar44.style.display = "block";
        carRotatePosition = carRotatePosition + 1;
      } else {
        firstCar41.style.display = "block";
        secondCar42.style.display = "none";
        thirdCar43.style.display = "none";
        fourthCar44.style.display = "none";
        carRotatePosition = 1;
      }
  
    } else if (fifthCar.style.display === "block") {
  
  
      if (carRotatePosition === 1) {
  
        firstCar51.style.display = "none";
        secondCar52.style.display = "block";
        thirdCar53.style.display = "none";
        fourthCar54.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 2) {
        firstCar51.style.display = "none";
        secondCar52.style.display = "none";
        thirdCar53.style.display = "block";
        fourthCar54.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 3) {
        firstCar51.style.display = "none";
        secondCar52.style.display = "none";
        thirdCar53.style.display = "none";
        fourthCar54.style.display = "block";
        carRotatePosition = carRotatePosition + 1;
      } else {
        firstCar51.style.display = "block";
        secondCar52.style.display = "none";
        thirdCar53.style.display = "none";
        fourthCar54.style.display = "none";
        carRotatePosition = 1;
      }
  
    } else if (sixCar.style.display === "block") {
  
      if (carRotatePosition === 1) {
  
        firstCar61.style.display = "none";
        secondCar62.style.display = "block";
        thirdCar63.style.display = "none";
        fourthCar64.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 2) {
        firstCar61.style.display = "none";
        secondCar62.style.display = "none";
        thirdCar63.style.display = "block";
        fourthCar64.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 3) {
        firstCar61.style.display = "none";
        secondCar62.style.display = "none";
        thirdCar63.style.display = "none";
        fourthCar64.style.display = "block";
        carRotatePosition = carRotatePosition + 1;
      } else {
        firstCar61.style.display = "block";
        secondCar62.style.display = "none";
        thirdCar63.style.display = "none";
        fourthCar64.style.display = "none";
        carRotatePosition = 1;
      }
  
    } else if (sevenCar.style.display === "block") {
      if (carRotatePosition === 1) {
  
        firstCar71.style.display = "none";
        secondCar72.style.display = "block";
        thirdCar73.style.display = "none";
        fourthCar74.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 2) {
        firstCar71.style.display = "none";
        secondCar72.style.display = "none";
        thirdCar73.style.display = "block";
        fourthCar74.style.display = "none";
        carRotatePosition = carRotatePosition + 1;
  
      } else if (carRotatePosition === 3) {
        firstCar71.style.display = "none";
        secondCar72.style.display = "none";
        thirdCar73.style.display = "none";
        fourthCar74.style.display = "block";
        carRotatePosition = carRotatePosition + 1;
      } else {
        firstCar71.style.display = "block";
        secondCar72.style.display = "none";
        thirdCar73.style.display = "none";
        fourthCar74.style.display = "none";
        carRotatePosition = 1;
      }
    }
  
  }
  
  
  function rotateLeft() {
  
    if (firstCar.style.display === "block") {
  
      if (carRotatePosition === 1) {
        firstCar11.style.display = "none";
        secondCar12.style.display = "none";
        thirdCar13.style.display = "none";
        fourthCar14.style.display = "block";
        carRotatePosition = 2;
  
      } else if (carRotatePosition === 2) {
        firstCar11.style.display = "none";
        secondCar12.style.display = "none";
        thirdCar13.style.display = "block";
        fourthCar14.style.display = "none";
        carRotatePosition = 3;
  
  
      } else if (carRotatePosition === 3) {
        firstCar11.style.display = "none";
        secondCar12.style.display = "block";
        thirdCar13.style.display = "none";
        fourthCar14.style.display = "none";
        carRotatePosition = 4;
  
      } else {
        firstCar11.style.display = "block";
        secondCar12.style.display = "none";
        thirdCar13.style.display = "none";
        fourthCar14.style.display = "none";
        carRotatePosition = 1;
  
      }
    } else if (secondCar.style.display === "block") {
  
      if (carRotatePosition === 1) {
        firstCar21.style.display = "none";
        secondCar22.style.display = "none";
        thirdCar23.style.display = "none";
        fourthCar24.style.display = "block";
        carRotatePosition = 2;
  
      } else if (carRotatePosition === 2) {
        firstCar21.style.display = "none";
        secondCar22.style.display = "none";
        thirdCar23.style.display = "block";
        fourthCar24.style.display = "none";
        carRotatePosition = 3;
  
  
      } else if (carRotatePosition === 3) {
        firstCar21.style.display = "none";
        secondCar22.style.display = "block";
        thirdCar23.style.display = "none";
        fourthCar24.style.display = "none";
        carRotatePosition = 4;
  
      } else {
        firstCar21.style.display = "block";
        secondCar22.style.display = "none";
        thirdCar23.style.display = "none";
        fourthCar24.style.display = "none";
        carRotatePosition = 1;
  
      }
  
    } else if (thirdCar.style.display === "block") {
  
      if (carRotatePosition === 1) {
        firstCar31.style.display = "none";
        secondCar32.style.display = "none";
        thirdCar33.style.display = "none";
        fourthCar34.style.display = "block";
        carRotatePosition = 2;
  
      } else if (carRotatePosition === 2) {
        firstCar31.style.display = "none";
        secondCar32.style.display = "none";
        thirdCar33.style.display = "block";
        fourthCar34.style.display = "none";
        carRotatePosition = 3;
  
  
      } else if (carRotatePosition === 3) {
        firstCar31.style.display = "none";
        secondCar32.style.display = "block";
        thirdCar33.style.display = "none";
        fourthCar34.style.display = "none";
        carRotatePosition = 4;
  
      } else {
        firstCar31.style.display = "block";
        secondCar32.style.display = "none";
        thirdCar33.style.display = "none";
        fourthCar34.style.display = "none";
        carRotatePosition = 1;
  
      }
  
    } else if (fourthCar.style.display === "block") {
  
  
      if (carRotatePosition === 1) {
        firstCar41.style.display = "none";
        secondCar42.style.display = "none";
        thirdCar43.style.display = "none";
        fourthCar44.style.display = "block";
        carRotatePosition = 2;
  
      } else if (carRotatePosition === 2) {
        firstCar41.style.display = "none";
        secondCar42.style.display = "none";
        thirdCar43.style.display = "block";
        fourthCar44.style.display = "none";
        carRotatePosition = 3;
  
  
      } else if (carRotatePosition === 3) {
        firstCar41.style.display = "none";
        secondCar42.style.display = "block";
        thirdCar43.style.display = "none";
        fourthCar44.style.display = "none";
        carRotatePosition = 4;
  
      } else {
        firstCar41.style.display = "block";
        secondCar42.style.display = "none";
        thirdCar43.style.display = "none";
        fourthCar44.style.display = "none";
        carRotatePosition = 1;
  
      }
  
    } else if (fifthCar.style.display === "block") {
  
      if (carRotatePosition === 1) {
        firstCar51.style.display = "none";
        secondCar52.style.display = "none";
        thirdCar53.style.display = "none";
        fourthCar54.style.display = "block";
        carRotatePosition = 2;
  
      } else if (carRotatePosition === 2) {
        firstCar51.style.display = "none";
        secondCar52.style.display = "none";
        thirdCar53.style.display = "block";
        fourthCar54.style.display = "none";
        carRotatePosition = 3;
  
  
      } else if (carRotatePosition === 3) {
        firstCar51.style.display = "none";
        secondCar52.style.display = "block";
        thirdCar53.style.display = "none";
        fourthCar54.style.display = "none";
        carRotatePosition = 4;
  
      } else {
        firstCar51.style.display = "block";
        secondCar52.style.display = "none";
        thirdCar53.style.display = "none";
        fourthCar54.style.display = "none";
        carRotatePosition = 1;
  
      }
  
    } else if (sixCar.style.display === "block") {
  
      if (carRotatePosition === 1) {
        firstCar61.style.display = "none";
        secondCar62.style.display = "none";
        thirdCar63.style.display = "none";
        fourthCar64.style.display = "block";
        carRotatePosition = 2;
  
      } else if (carRotatePosition === 2) {
        firstCar61.style.display = "none";
        secondCar62.style.display = "none";
        thirdCar63.style.display = "block";
        fourthCar64.style.display = "none";
        carRotatePosition = 3;
  
  
      } else if (carRotatePosition === 3) {
        firstCar61.style.display = "none";
        secondCar62.style.display = "block";
        thirdCar63.style.display = "none";
        fourthCar64.style.display = "none";
        carRotatePosition = 4;
  
      } else {
        firstCar61.style.display = "block";
        secondCar62.style.display = "none";
        thirdCar63.style.display = "none";
        fourthCar64.style.display = "none";
        carRotatePosition = 1;
  
      }
  
    } else if (sevenCar.style.display === "block") {
      if (carRotatePosition === 1) {
        firstCar71.style.display = "none";
        secondCar72.style.display = "none";
        thirdCar73.style.display = "none";
        fourthCar74.style.display = "block";
        carRotatePosition = 2;
  
      } else if (carRotatePosition === 2) {
        firstCar71.style.display = "none";
        secondCar72.style.display = "none";
        thirdCar73.style.display = "block";
        fourthCar74.style.display = "none";
        carRotatePosition = 3;
  
  
      } else if (carRotatePosition === 3) {
        firstCar71.style.display = "none";
        secondCar72.style.display = "block";
        thirdCar73.style.display = "none";
        fourthCar74.style.display = "none";
        carRotatePosition = 4;
  
      } else {
        firstCar71.style.display = "block";
        secondCar72.style.display = "none";
        thirdCar73.style.display = "none";
        fourthCar74.style.display = "none";
        carRotatePosition = 1;
  
      }
  
    }
  
   
  }
  
  
  
  
  
  //Object detection scrolling
  
  
  
  $(window).scroll(function () {
  
    var scroll = $(window).scrollTop();
    var imageGalary = $("#image-galary");
    var features = $("#features");
    var specification = $("#specification");
  
    var imagePos = imageGalary.offset().top;
    var featuresPos = features.offset().top;
    var specPos = specification.offset().top;
  
    if (scroll > imagePos - 200 && scroll < featuresPos - 200) {
      $(".link-swap").removeClass("active");
      $(".link-swap3").removeClass("active");
      $(".link-swap4").removeClass("active");
      $('.link-swap2').addClass("active");
  
    } else if (scroll > featuresPos - 200 && scroll < specPos - 200) {
      $(".link-swap").removeClass("active");
      $(".link-swap2").removeClass("active");
      $(".link-swap4").removeClass("active");
      $(".link-swap3").addClass("active");
    } else if (scroll > specPos - 200) {
      $(".link-swap").removeClass("active");
      $(".link-swap2").removeClass("active");
      $(".link-swap3").removeClass("active");
      $(".link-swap4").addClass("active");
    }
    else {
      $(".link-swap").addClass("active");
      $(".link-swap2").removeClass("active");
      $(".link-swap3").removeClass("active");
      $(".link-swap4").removeClass("active");
    }
  
    var arrowPos = $('.arrow-show-pos');
    var arrowShowPos = arrowPos.offset().top;
  
    if (scroll > arrowShowPos - 257) {
  
      $('.scroll-btn').css("display", "block");
      $('.navbar-2').addClass('sticky-top-nav');
  
      $(".sub-navbar-menu").removeClass("sub-navbar-sticky-menu");
      $(".sub-navbar-menu").addClass("sub-navbar-fixed-menu");
  
  
  
    } else {
      $('.scroll-btn').css("display", "none");
      $('.navbar-2').removeClass('sticky-top-nav');
  
      $(".sub-navbar-menu").addClass("sub-navbar-sticky-menu");
      $(".sub-navbar-menu").removeClass("sub-navbar-fixed-menu");
  
  
    }
  
  
  });
  
  