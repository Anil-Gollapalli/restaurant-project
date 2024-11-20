export default function contactTab() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Contact Us</h1>
    <div class="contact-info">
      <img src="./images/bar-food.jpg" alt="Restaurant Dish">
      <p>Call us at 8374630638 or email us at Anil@restaurant.com</p>
    </div>
  `;
  return div;
}
