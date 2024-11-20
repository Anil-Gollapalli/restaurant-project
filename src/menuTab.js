export default function menuTab() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Our Menu</h1>
    <div class="menu-items-container"> <!-- Flex container for horizontal layout -->
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
      <div class="menu-item">
        <img src="./images/chennai_bonda.jpg" alt="Chennaibonda">
        <p>Chennaibonda</p>
      </div>
      <div class="menu-item">
        <img src="./images/fish.jpg" alt="Grilfish">
        <p>Gril Fish</p>
      </div>
      <div class="menu-item">
        <img src="./images/grilchicken.jpg" alt="GrilChicken">
        <p>Gril Chicken</p>
      </div>
      <div class="menu-item">
        <img src="./images/panipoori.jpg" alt="Panipoori">
        <p>PaniPoori</p>
      </div>
    </div>
  `;
  return div;
}
