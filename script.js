// Loader with progress ring
(function(){
  const ring = () => document.querySelector('.ring-progress');
  const pct = () => document.getElementById('loaderPct');
  let progress = 0, done = false;

  // update stroke + percentage text
  function setProgress(val){
    progress = Math.max(0, Math.min(100, val));
    if (ring()) ring().style.strokeDashoffset = String(100 - progress);
    if (pct()) pct().textContent = Math.round(progress) + "%";
  }

  // gradual fill
  let interval;
  document.addEventListener('DOMContentLoaded', () => {
    setProgress(0);
    interval = setInterval(() => {
      if (progress < 95) {
        setProgress(progress + 0.8); // slower growth → cinematic feel
      }
    }, 60); // every 60ms
  });

  // finish on load
  window.addEventListener('load', () => finish());
  setTimeout(() => finish(), 7000); // failsafe max 7s

  function finish(){
    if (done) return;
    done = true;
    clearInterval(interval);
    // animate up to 100
    const step = () => {
      if (progress < 100){
        setProgress(progress + (100 - progress)*0.2);
        requestAnimationFrame(step);
      } else {
        const l = document.querySelector('.loader');
        if (l) l.classList.add('hide');
      }
    };
    step();
  }
})();

// Year stamp
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
});
