export default function menuTab() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Our Menu</h1>
    <!-- Menu Dish Image -->
    <div class="menu-item">
      <img src="./images/burger.jpg" alt="Burger">
      <p>Burger</p>
    </div>
    <div class="menu-item">
      <img src="./images/roti.jpg" alt="Roti">
      <p>Roti with kurma</p>
    </div>
    <div class="menu-item">
      <img src="./images/pizzaa.jpg" alt="Pizzaa">
      <p>Pizzaaa</p>
    </div>
  `;
  return div;
}
