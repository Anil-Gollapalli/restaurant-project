export default function loadHomePage() {
      const contentDiv = document.getElementById('content');
      contentDiv.innerHTML = `
        <h1>Welcome to Anil's Restaurant!</h1>
        <img src="./images/chef.jpeg" alt="Restaurant Dish">
        <p>Enjoy our delicious fast foods and great service.</p>
      `;
    }
    