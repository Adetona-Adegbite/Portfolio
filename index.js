var buttons = document.querySelectorAll(".selector-button");
var buttonList = [];
var navBarList = [];
var screenWidth = window.innerWidth;
console.log(screenWidth);
if (screenWidth < 768) {
  $(".nav-bar").hide();
} else {
  $(".nav-bar").show();
}
$(".info-meet").hide();
document.getElementById("button2").classList.add("clicked");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var clickedButtonId = this.id;
    if (!buttonList.includes(clickedButtonId)) {
      buttonList.unshift(clickedButtonId);
      console.log(buttonList);
      document.getElementById(clickedButtonId).classList.add("clicked");

      if (clickedButtonId === "button1") {
        document.getElementById("button2").classList.remove("clicked");
        $(".info-skills").fadeOut(500);
        $(".info-meet").fadeIn(1000);
      } else if (clickedButtonId === "button2") {
        document.getElementById("button1").classList.remove("clicked");
        $(".info-meet").fadeOut(500);
        $(".info-skills").fadeIn(1000);
      }

      if (buttonList.length > 1) {
        var removedButtonId = buttonList.pop();
        document.getElementById(removedButtonId).classList.remove("clicked");
      }
    }
  });
});
function toggleNav() {
  var navBar = document.querySelector(".nav-bar");
  // navBar.classList.toggle("active");
  navBarList.unshift("holder");
  if (navBarList.length % 2 == 0) {
    $(".nav-bar").slideUp();
  } else {
    $(".nav-bar").slideDown();
  }
  console.log("clicked");
}
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
document.querySelector(".skill-button").addEventListener("click", function () {
  document.getElementById("button1").classList.remove("clicked");
  buttonList = [];
  document.getElementById("button2").classList.add("clicked");

  $(".info-meet").fadeOut(500);
  $(".info-skills").fadeIn(1000);
});
