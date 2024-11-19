export default function loadHomePage() {
      const contentDiv = document.getElementById('content');
      contentDiv.innerHTML = `
        <h1>Welcome to Anil's Restaurant!</h1>
        <img src="./images/chef.jpg" alt="Restaurant Dish">
        <p>Enjoy our delicious fast foods and great service.</p>
      `;
    }
    