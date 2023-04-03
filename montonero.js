const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    updateSlide(offset);
  })
}) 

function updateSlide(offset) {
  const slides = document.querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;
  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

setInterval(() => {
  updateSlide(1); // Move to next slide
}, 10000);

const cartButton = document.querySelector('.cart-button');
const sidebar = document.querySelector('.sidebar');
const closeSidebarButton = document.querySelector('.close-sidebar-button');

cartButton.addEventListener('click', function() {
  sidebar.classList.toggle('sidebar-open');
});

closeSidebarButton.addEventListener('click', function() {
  sidebar.classList.toggle('sidebar-open');
});

function handleSearch() {
  // Get the search query from the input element
  const query = document.getElementById("search-bar").value.toLowerCase();

  // Define the search mapping for different queries
  const searchMapping = {
    pens: "monetonero.html",
    books: "monetonero.html",
    // Add more search mappings as needed
  };

  // Check if the search query has a mapping
  if (searchMapping.hasOwnProperty(query)) {
    // If it does, redirect to the appropriate page
    window.location.href = searchMapping[query];
  } else {
    // Otherwise, display an error message
    alert("No results found for your search.");
  }
}

// Bind the search function to the search button
document.getElementById("search-button").addEventListener("click", handleSearch);
