import homeTab from './homeTab';
import menuTab from './menuTab';
import contactTab from './contactTab';
import './style.css';  // Import CSS directly into JavaScript

const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

// Function to load a specific tab
function loadTab(tab) {
  contentDiv.innerHTML = '';  // Clear the content div
  contentDiv.appendChild(tab());  // Add tab content
}

// Event listener for the Home button
homeBtn.addEventListener('click', () => {
  loadTab(homeTab);  // Load the home tab
});

// Event listener for the Menu button
menuBtn.addEventListener('click', () => {
  loadTab(menuTab);  // Load the menu tab
});

// Event listener for the Contact button
contactBtn.addEventListener('click', () => {
  loadTab(contactTab);  // Load the contact tab
});

// Load the Home tab by default when the page is loaded
window.addEventListener('load', () => {
  loadTab(homeTab);  // Call the loadHomeTab function to display the home tab
});
