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

    // 1
let openSaudiGHD = document.getElementById("window-saudi-ghd"),
    openButton = document.getElementById("more-saudi-ghd"),
    closeButton = document.getElementById("close-saudi-ghdsaudi-ghd"),
    // 2
    openBeautiqueSDD = document.getElementById("window-beautique-sdd"),
    openButtonBeautiqueSDD = document.getElementById("more-beautique-sdd"),
    closeButtonBeautiqueSDD = document.getElementById("close-beautique-sdd"),
    // 3
    openLuxuryBKT = document.getElementById("window-luxury-bkt"),
    openButtonLuxuryBKT = document.getElementById("more-luxury-bkt"),
    closeButtonLuxuryBKT = document.getElementById("close-luxury-bkt"),
    // 4
    openTheAOS = document.getElementById("window-the-aos"),
    openButtonTheAOS = document.getElementById("more-the-aos"),
    closeButtonTheAOS = document.getElementById("close-the-aos"),
    // 5
    openGlomarDubai = document.getElementById("window-glomar-dubai"),
    openButtonGlomarDubai = document.getElementById("more-glomar-dubai"),
    closeButtonGlomarDubai = document.getElementById("close-glomar-dubai"),
    // 6
    openBridalSD = document.getElementById("window-bridal-sd"),
    openButtonBridalSD = document.getElementById("more-bridal-sd"),
    closeButtonBridalSD = document.getElementById("close-bridal-sd");

    // 1
    openButton.onclick = function() {
      if(openSaudiGHD.classList.contains("hidde")) {
        openSaudiGHD.classList = "shows";
      }
    };

    closeButton.onclick = function() {
      if(openSaudiGHD.classList.contains("shows")) {
        openSaudiGHD.classList = "hidde";
      }
    };

    // 2
    openButtonBeautiqueSDD.onclick = function() {
      if(openBeautiqueSDD.classList.contains("hidde")) {
        openBeautiqueSDD.classList = "shows";
      }
    };

    closeButtonBeautiqueSDD.onclick = function() {
      if(openBeautiqueSDD.classList.contains("shows")) {
        openBeautiqueSDD.classList = "hidde";
      }
    };

    // 3
    openButtonLuxuryBKT.onclick = function() {
      if(openLuxuryBKT.classList.contains("hidde")) {
        openLuxuryBKT.classList = "shows";
      }
    };

    closeButtonLuxuryBKT.onclick = function() {
      if(openLuxuryBKT.classList.contains("shows")) {
        openLuxuryBKT.classList = "hidde";
      }
    };

    // 4
    openButtonTheAOS.onclick = function() {
      if(openTheAOS.classList.contains("hidde")) {
        openTheAOS.classList = "shows";
      }
    };

    closeButtonTheAOS.onclick = function() {
      if(openTheAOS.classList.contains("shows")) {
        openTheAOS.classList = "hidde";
      }
    };

    // 5
    openButtonGlomarDubai.onclick = function() {
      if(openGlomarDubai.classList.contains("hidde")) {
        openGlomarDubai.classList = "shows";
      }
    };

    closeButtonGlomarDubai.onclick = function() {
      if(openGlomarDubai.classList.contains("shows")) {
        openGlomarDubai.classList = "hidde";
      }
    };

    // 6
    openButtonBridalSD.onclick = function() {
      if(openBridalSD.classList.contains("hidde")) {
        openBridalSD.classList = "shows";
      }
    };

    closeButtonBridalSD.onclick = function() {
      if(openBridalSD.classList.contains("shows")) {
        openBridalSD.classList = "hidde";
      }
    };