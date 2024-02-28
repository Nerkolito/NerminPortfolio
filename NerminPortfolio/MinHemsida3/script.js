// Function to toggle the menu visibility
function toggleMenu() {
  // Select the menu and icon elements
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Toggle the 'open' class to show/hide the menu
  menu.classList.toggle("open");
  // Toggle the 'open' class to change the icon appearance
  icon.classList.toggle("open");
}

// Function to change the image source based on the hovered state
function changeImage(hovered, imageElement) {
  // Check if the hovered state is true (1)
  if (hovered === 1) {
    // Change the image source to the first image
    imageElement.src = "img/sticker (2).png";
  } else {
    // Change the image source to the second image
    imageElement.src = "img/sticker (3).png";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Function to validate the form
  function validateForm() {
    var name = document.getElementById("name").value;
    // var work = document.getElementById("work").value;
    var subject = document.getElementById("subject").value;

    // Check if fields are not empty
    if (name.trim() === "") {
      alert("Please enter your name");
      return false;
    }
    // Check if name contains only letters
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      alert("Name should only contain letters");
      return false;
    }
    //Will always be true (remove)
    // if (work.trim() === "") {
    //   alert("Please select your type of work");
    //   return false;
    // }
    if (subject.trim() === "") {
      alert("Please enter a subject");
      return false;
    }

    return true; // Form is valid
  }

  document.querySelector("form").addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
});
