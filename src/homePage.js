export default function loadHomePage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
<<<<<<< HEAD
      <h1>Welcome to Our Restaurant!</h1>
       <img src="./images/chef.jpeg" alt="Restaurant Dish">
      <p>Enjoy our delicious meals and great service.</p>
=======
      <h1>Welcome to Anil's Restaurant!</h1>
      <img src="restaurant.jpg" alt="Restaurant">
      <p>Enjoy our delicious fastfoods and great service.</p>
>>>>>>> bfee5ea264b9f902187cf80da24cd43a9fe22e95
    `;
  }
  