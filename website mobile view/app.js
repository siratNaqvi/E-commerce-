{/* <script>
   document.addEventListener('DOMContentLoaded', function () 
   {
      const toggleButton = document.querySelector('.mobile-menu-toggle');
      const mainNav = document.querySelector('.main-nav');
      const topNav = document.querySelector('.top-nav');
      const searchBar = document.querySelector('.search-bar');
      const userLinks = document.querySelector('.user-links');
      const languageShipOptions = document.querySelector('.language-ship-options');

      toggleButton.addEventListener('click', function () {
         mainNav.classList.toggle('active');
         topNav.classList.toggle('active');
         searchBar.classList.toggle('active');
         userLinks.classList.toggle('active');
         languageShipOptions.classList.toggle('active');
      });
});
      const hamburgerIcon = document.getElementById('hamburgerIcon');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');

function openMenu() {
    sideMenu.classList.add('active');
    menuOverlay.classList.add('active');
    hamburgerIcon.classList.add('open'); // For hamburger icon animation
    document.body.style.overflow = 'hidden'; // Prevent scrolling body when menu is open
}

// Function to close the menu
function closeMenu() {
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    hamburgerIcon.classList.remove('open'); // For hamburger icon animation
    document.body.style.overflow = ''; // Restore body scrolling
}

// Event Listeners
hamburgerIcon.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu); // Close when clicking outside menu

// Close menu if window is resized above mobile breakpoint (optional)
// This helps if the menu is open on mobile and then the browser window is widened
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && sideMenu.classList.contains('active')) {
        closeMenu();
    }
});

</script>
  
  


 */}


 const hamburgerIcon = document.getElementById('hamburgerIcon');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');

// Function to open the menu
function openMenu() {
    sideMenu.classList.add('active');
    menuOverlay.classList.add('active');
    hamburgerIcon.classList.add('open'); // For hamburger icon animation
    document.body.style.overflow = 'hidden'; // Prevent scrolling body when menu is open
}

// Function to close the menu
function closeMenu() {
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    hamburgerIcon.classList.remove('open'); // For hamburger icon animation
    document.body.style.overflow = ''; // Restore body scrolling
}

// Event Listeners
hamburgerIcon.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu); // Close when clicking outside menu

// Close menu if window is resized above mobile breakpoint (optional)
// This helps if the menu is open on mobile and then the browser window is widened
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && sideMenu.classList.contains('active')) {
        closeMenu();
    }
});
