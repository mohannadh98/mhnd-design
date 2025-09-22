// Hide as soon as DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const l = document.querySelector('.loader');
  setTimeout(() => { if (l) l.classList.add('hide'); }, 250); // tiny delay for smoothness
});

// Also hide again when everything finishes (double safety)
window.addEventListener('load', () => {
  const l = document.querySelector('.loader');
  if (l && !l.classList.contains('hide')) l.classList.add('hide');
});

// Absolute failsafe: if something blocks events, bail out anyway
setTimeout(() => {
  const l = document.querySelector('.loader');
  if (l) l.classList.add('hide');
}, 4000);

// Year stamp
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
});
