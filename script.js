/*
  Name: Sijan Pradhan 
  Student ID: 12201019  
*/

// All sections
const sections = document.querySelectorAll(".section");
//Parent Class of Section Btn
const secBtns = document.querySelectorAll(".controlls");
//Individual Buttons
const secBtn = document.querySelectorAll(".control");
//Body
const allSections = document.querySelector(".main-content");

const PageTransitions = () => {
  //Button click active class
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  //Active sections
  allSections.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other buttons
      secBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
};
PageTransitions();

// Contact form validation
function validateData() {
  const name = document.getElementById("name_field");
  const email = document.getElementById("email_field");

  if (name.value == "" || email.value == "") {
    alert("No Blank values allowed");
    return false;
  } else {
    if (ValidateEmail(email) == false) {
      alert("Invalid email Address!!");
      return false;
    } else {
      return true;
    }
  }
}

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
