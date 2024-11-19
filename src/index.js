import homeTab from './homeTab';
import menuTab from './menuTab';
import contactTab from './contactTab';
import './style.css';  // Import CSS directly into JavaScript

<<<<<<< HEAD
=======

>>>>>>> bfee5ea264b9f902187cf80da24cd43a9fe22e95
const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

<<<<<<< HEAD
// Function to load the Home tab
function loadHomeTab() {
  contentDiv.innerHTML = '';  // Clear the content div
  contentDiv.appendChild(homeTab());  // Add home tab content
}

// Event listener for the Home button
homeBtn.addEventListener('click', () => {
  loadHomeTab();
});

// Event listener for the Menu button
menuBtn.addEventListener('click', () => {
  contentDiv.innerHTML = '';  // Clear the content div
  contentDiv.appendChild(menuTab());  // Add menu tab content
});

// Event listener for the Contact button
contactBtn.addEventListener('click', () => {
  contentDiv.innerHTML = '';  // Clear the content div
  contentDiv.appendChild(contactTab());  // Add contact tab content
});

// Load the Home tab by default when the page is loaded
window.addEventListener('load', () => {
  loadHomeTab();  // Call the loadHomeTab function to display the home tab
=======
homeBtn.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(homeTab());
});

menuBtn.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(menuTab());
});

contactBtn.addEventListener('click', () => {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(contactTab());
});

// Load the home tab by default
window.addEventListener('load', () => {
  contentDiv.appendChild(homeTab());
>>>>>>> bfee5ea264b9f902187cf80da24cd43a9fe22e95
});
