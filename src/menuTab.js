export default function menuTab() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Our Menu</h1>
    <!-- Menu Dish Image -->
    <div class="menu-item">
      <img src="../images/burger.jpg" alt="Burger">
<<<<<<< HEAD
      <p>burger</p>
    </div>
    <div class="menu-item">
      <img src="../images/roti.jpg" alt="Roti">
      <p>Roti</p>
    </div>
    <div class="menu-item">
      <img src="../images/pizzaa.jpeg" alt="Pizzaa">
      <p>Pizzaa</p>
=======
      <p>Burger</p>
    </div>
    <div class="menu-item">
      <img src="../images/roti.jpg" alt="Roti">
      <p>Roti with kurma</p>
    </div>
    <div class="menu-item">
      <img src="../images/pizzaa.jpeg" alt="Pizzaa">
      <p>Pizzaaa</p>
>>>>>>> bfee5ea264b9f902187cf80da24cd43a9fe22e95
    </div>
  `;
  return div;
}
