export default function contactTab() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Contact Us</h1>
    <img src="./images/chef.jpg" alt="Contact Image">
    <p>Call us at 123-456-7890 or email us at contact@restaurant.com</p>
  `;
  return div;
}
