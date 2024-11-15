// export default function contactTab() {
//     const div = document.createElement('div');
//     div.innerHTML = `
//       <h1>Contact Us</h1>
//       <p>Call us at 123-456-7890 or email us at contact@restaurant.com</p>
//     `;
//     return div;
//   }
  

export default function contactTab() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Contact Us</h1>
    <!-- Example Contact Image -->
    <img src="https://images.unsplash.com/photo-1571633463247-e3f8a09e779b" alt="Contact Image">
    <p>Call us at 123-456-7890 or email us at contact@restaurant.com</p>
  `;
  return div;
}
