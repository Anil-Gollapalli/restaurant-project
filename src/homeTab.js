export default function homeTab() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Welcome to Anil's Restaurant!</h1>
    <img src="./images/chef.jpeg" alt="Restaurant Dish">
    <p><marquee>Enjoy our delicious meals and great service.</marquee></p>
  `;
  return div;
}
