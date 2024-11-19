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
  contentDiv.appendChild(tab());  // Add the tab content to the div
}

// Event listener for the Home button
homeBtn.addEventListener('click', () => {
  loadTab(homeTab);  // Load the home tab
  setActiveButton(homeBtn);  // Mark the Home button as active
});

// Event listener for the Menu button
menuBtn.addEventListener('click', () => {
  loadTab(menuTab);  // Load the menu tab
  setActiveButton(menuBtn);  // Mark the Menu button as active
});

// Event listener for the Contact button
contactBtn.addEventListener('click', () => {
  loadTab(contactTab);  // Load the contact tab
  setActiveButton(contactBtn);  // Mark the Contact button as active
});

// Set the active button class (for visual feedback)
function setActiveButton(activeButton) {
  // Remove active class from all buttons
  homeBtn.classList.remove('active');
  menuBtn.classList.remove('active');
  contactBtn.classList.remove('active');
  
  // Add active class to the clicked button
  activeButton.classList.add('active');
}

// Ensure the Home tab is loaded first when the page loads
window.addEventListener('load', () => {
  loadTab(homeTab);  // Load the Home tab by default
  setActiveButton(homeBtn);  // Set the Home button as active by default
});
