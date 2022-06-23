var content = document.querySelector(".navbar-content ul");
var li = content.querySelectorAll("li");

for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
  var current = content.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
//   this.firstChild.style.color = "white"
  });
}