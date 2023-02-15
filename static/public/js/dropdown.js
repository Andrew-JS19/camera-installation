(function ($) {
	// Begin jQuery
	$(function () {
		// DOM ready
		// If a link has a dropdown, add sub menu toggle.
		$("nav ul li a:not(:only-child)").click(function (e) {
			$(this).siblings(".nav-dropdown").toggle();
			// Close one dropdown when selecting another
			$(".nav-dropdown").not($(this).siblings()).hide();
			e.stopPropagation();
		});
		// Clicking away from dropdown will remove the dropdown class
		$("html").click(function () {
			$(".nav-dropdown").hide();
		});
		// Toggle open and close nav styles on click
		$("#nav-toggle").click(function () {
			$("nav ul").slideToggle();
		});
		// Hamburger to X toggle
		$("#nav-toggle").on("click", function () {
			this.classList.toggle("active");
		});
	}); // end DOM ready
})(jQuery); // end jQuery

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

