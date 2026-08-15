document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.querySelector('.site-footer p');

  if (yearNode) {
    const currentYear = new Date().getFullYear();
    yearNode.textContent = `© ${currentYear} Gumate Industries. All rights reserved.`;
  }
});
