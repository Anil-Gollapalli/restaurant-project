import homeTab from './homeTab';
import menuTab from './menuTab';
import contactTab from './contactTab';
import './style.css';  // Import CSS directly into JavaScript

const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

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
});
