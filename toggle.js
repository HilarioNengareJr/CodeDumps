// script 
"use strict";

// grabbing the div container
const containerDiv = document.querySelector("[data-container]");
// grabbing the button
const buttonElement = document.querySelector("[data-button]");

// adding an event listener and event handler
buttonElement.addEventListener("click", () => {
  if (containerDiv.classList.contains("active")) {
    containerDiv.classList.remove("active");
  } else {
    containerDiv.classList.add("active");
  }
  // preferably we can use containerDiv.classList.toggle('active');
});

// html mark up
<div data-container>
  <button data-button>
    Change background color
  </button>
</div>

// css 
<div data-container>
  <button data-button>
    Change background color
  </button>
</div>
