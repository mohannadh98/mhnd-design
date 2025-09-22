
// Loader: hide after window load to ensure first paint feels cinematic
window.addEventListener('load', () => {
  setTimeout(() => {
    const l = document.querySelector('.loader');
    if (l) l.classList.add('hide');
  }, 600); // brief moment to avoid harsh cut
});

// Year stamp
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
});
