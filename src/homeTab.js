// export default function homeTab() {
//     const div = document.createElement('div');
//     div.innerHTML = `
//       <h1>Welcome to Our Restaurant!</h1>
//       <img src="restaurant.jpg" alt="Restaurant">
//       <p>Enjoy our delicious meals and great service.</p>
//     `;
//     return div;
//   }
  

export default function homeTab() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Welcome to Our Restaurant!</h1>
    <!-- Online Image URL for Restaurant Dish -->
    <img src="https://images.unsplash.com/photo-1504513372073-d4ab616e3d39" alt="Restaurant Dish">
    <p>Enjoy our delicious meals and great service.</p>
  `;
  return div;
}
