export default function loadHomePage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
      <h1>Welcome to Our Restaurant!</h1>
       <img src="./images/chef.jpg" alt="Restaurant Dish">
      <p>Enjoy our delicious meals and great service.</p>
    `;
  }
  