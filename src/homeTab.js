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
    <h1>Welcome to Anil's Restaurant!</h1>
    <!-- Local Image for Restaurant Dish -->
    <img src="./images/chef.jpeg" alt="Restaurant Dish">
   <p><marquee>Enjoy our delicious meals and great service.</marquee></p>
  `;
  return div;
}
