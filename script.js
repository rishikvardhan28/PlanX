// Optional: Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = "↑";
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  background-color: #f9a826;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  display: none;
  cursor: pointer;
  z-index: 1000;
`;
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
