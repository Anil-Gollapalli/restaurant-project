export default function menuTab() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Our Menu</h1>
    <!-- Menu Dish Image -->
    <div class="menu-item">
      <img src="../images/burger.jpg" alt="Burger">
      <p>burger</p>
    </div>
    <div class="menu-item">
      <img src="../images/roti.jpg" alt="Roti">
      <p>Roti</p>
    </div>
    <div class="menu-item">
      <img src="../images/pizzaa.jpeg" alt="Pizzaa">
      <p>Pizzaa</p>
    </div>
  `;
  return div;
}
