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
// Get the button and the modal
// const sendInquiryBtn = document.getElementById('sendInquiryBtn');
// const inquiryModal = document.getElementById('inquiryModal');

// // Function to open the modal
// function openModal() {
//     inquiryModal.style.display = 'flex'; // Use flex to center the content
// }

// // Function to close the modal
// function closeModal() {
//     inquiryModal.style.display = 'none';
// }

// // Event listener for the button click
// sendInquiryBtn.addEventListener('click', openModal);

// // Close the modal if the user clicks outside of it
// window.addEventListener('click', function(event) {
//     if (event.target == inquiryModal) {
//         closeModal();
//     }
// });

           // app.js

// Ensure the modal is hidden by default in your CSS:
// #inquiryModal { display: none; }

// Get the button and the modal (already correct)
const sendinquiryBtn = document.getElementById('sendinquiryBtn');
const inquiryModal = document.getElementById('inquiryModal');

// Get the form element itself
const inquiryForm = document.querySelector('form[action="/submit-inquiry"]'); // Or by its ID if it has one

// Function to open the modal (already correct)
function openModal() {
    inquiryModal.style.display = 'flex';
}

// Function to close the modal (already correct)
function closeModal() {
    inquiryModal.style.display = 'none';
}

// Attach the event listener to the FORM's 'submit' event, not the button's 'click'
if (inquiryForm) { // Always good to check if the element exists
    inquiryForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // <--- CRUCIAL: STOP THE DEFAULT PAGE RELOAD

        // Collect form data
        const formData = new FormData(inquiryForm);

        try {
            // Send the inquiry data to your server
            const response = await fetch(inquiryForm.action, {
                method: inquiryForm.method,
                body: formData,
                // If you are sending JSON, use:
                // headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify(Object.fromEntries(formData)),
            });

            if (response.ok) { // Check if the server responded with a success status (e.g., 200-299)
                openModal(); // Only show the modal on success
                inquiryForm.reset(); // Optionally clear the form fields
            } else {
                // Handle server errors (e.g., 400 Bad Request, 500 Internal Server Error)
                console.error('Inquiry submission failed:', response.status, response.statusText);
                // You might want to show an error message to the user here
                alert('Failed to send inquiry. Please try again.');
            }
        } catch (error) {
            // Handle network errors (e.g., no internet connection)
            console.error('Network error during inquiry submission:', error);
            alert('An error occurred. Please check your internet connection and try again.');
        }
    });
}

// Event listener for close button(s) within the modal (if you have them)
// Assuming you have a close button like <span class="close-button" onclick="closeModal()">&times;</span>
// You can remove the onclick from HTML and add an event listener here:
const closeBtn = inquiryModal.querySelector('.close-button');
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}
// Also for the "OK" button
const okButton = inquiryModal.querySelector('.modal-content .bg-blue-600'); // Assuming it's the blue button inside modal-content
if (okButton) {
    okButton.addEventListener('click', closeModal);
}


// Close the modal if the user clicks outside of it (already good, but slightly refined)
window.addEventListener('click', function(event){
    // Ensure you are clicking the modal background itself, not its content
    if (event.target === inquiryModal) {
        closeModal();
    }
});

// Remove the line below, as it directly opens the modal on button click
// sendinquiryBtn.addEventListener('click', openModal); // <--- DELETE THIS LINE