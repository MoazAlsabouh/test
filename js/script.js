let navBar = document.getElementById("icon"),
    closeBar = document.getElementById("closebar"),
    sideBar = document.getElementById("side");

navBar.onclick = function() {
  if(sideBar.classList.contains("hide")) {
    sideBar.classList = "show";
  }
};

closeBar.onclick = function() {
  if(sideBar.classList.contains("show")) {
    sideBar.classList = "hide";
  }
};

sideBar.onclick = function() {
  if(sideBar.classList.contains("show")) {
    sideBar.classList = "hide";
  }
};