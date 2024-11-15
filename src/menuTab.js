// export default function menuTab() {
//     const div = document.createElement('div');
//     div.innerHTML = `
//       <h1>Our Menu</h1>
//       <ul>
//         <li>Spaghetti</li>
//         <li>Pizza</li>
//         <li>Salads</li>
//       </ul>
//     `;
//     return div;
//   }
  

export default function menuTab() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Our Menu</h1>
    <!-- Menu Dish Image -->
    <img src="https://images.unsplash.com/photo-1584673887962-8b43f79b9fef" alt="Menu Dish">
    <ul>
      <li>Spaghetti</li>
      <li>Pizza</li>
      <li>Salads</li>
    </ul>
  `;
  return div;
}
