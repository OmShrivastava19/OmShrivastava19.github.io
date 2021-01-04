$(function () {
  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 18 || hours <= 7; // between 6pm and 7am
  const body = document.querySelector("body");
  const toggle = document.getElementById("toggle");
  const input = document.getElementById("switch");

  if (night) {
    input.checked = true;
    body.classList.add("night");
  }

  toggle.addEventListener("click", function () {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove("night");
    } else {
      body.classList.add("night");
    }
  });

  const introHeight = document.querySelector(".intro").offsetHeight;
  const topButton = document.getElementById("top-button");
  const $topButton = $("#top-button");

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    },
    false
  );

  topButton.addEventListener("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      500
    );
  });

  const hand = document.querySelector(".emoji.wave-hand");

  function waveOnLoad() {
    hand.classList.add("wave");
    setTimeout(function () {
      hand.classList.remove("wave");
    }, 2000);
  }

  setTimeout(function () {
    waveOnLoad();
  }, 1000);

  hand.addEventListener("mouseover", function () {
    hand.classList.add("wave");
  });

  hand.addEventListener("mouseout", function () {
    hand.classList.remove("wave");
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: "cubic-bezier(.694,0,.335,1)",
    scale: 1,
    viewFactor: 0.3
  });

  sr.reveal(".background");
  sr.reveal(".skills");
  sr.reveal(".experience", {
    viewFactor: 0.2
  });
  sr.reveal(".featured-projects", {
    viewFactor: 0.1
  });
  sr.reveal(".other-projects", {
    viewFactor: 0.05
  });
});

//Certificate ID | Copy on Click Function
document.getElementById("certificate-id").onclick = function () {
  this.select();
  document.execCommand("copy");
  alert("Certificate ID is copied to your clipboard!");
};

// View All Certificate Button
document.addEventListener("DOMContentLoaded", function () {
  let btns = document.querySelectorAll(".btn");
  let driveBtns = document.querySelectorAll(".btn-drive");
  let linkedinBtns = document.querySelectorAll(".btn-linkedin");
  var $sitename;
  let timer = null;

  document.addEventListener("click", function (evt) {
    let target = evt.target;
    let exclusions = ["btn", "popup"];
    let match = false;
    for (const c of target.classList) {
      if (exclusions.includes(c)) {
        match = true;
      }
    }
    if (!match) {
      closePopup();
    }
  });
  
  driveBtns.forEach((b) => {
    b.addEventListener("click", () => {
      setTimeout(function() {
        window.open('https://drive.google.com/drive/folders/1NztHjo4gGwbxWktna9sW-R1VUoc5H4Kc?usp=sharing', '_blank');
      });
    });
  });
  
  linkedinBtns.forEach((b) => {
    b.addEventListener("click", () => {
      setTimeout(function() {
        window.open('https://www.linkedin.com/in/omshrivastava/', '_blank');
      });
    });
  });
});
