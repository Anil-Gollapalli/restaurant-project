export default function loadHomePage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
      <h1>Welcome to Anil's Restaurant!</h1>
      <img src="restaurant.jpg" alt="Restaurant">
      <p>Enjoy our delicious fastfoods and great service.</p>
    `;
  }
  