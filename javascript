<script>
console.log('[CARPOOL] ========== SCRIPT LOADED FROM AVADA FOOTER ==========');

(function () {
  console.log('[CARPOOL] Main function executing');

  function onReady(fn){ 
    if(document.readyState !== "loading") {
      fn(); 
    } else {
      document.addEventListener("DOMContentLoaded", fn); 
    }
  }

  // Create Visible Starfield (NO MOON)
  function createStarfield(){
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing section not found');
      return;
    }

    console.log('[CARPOOL] Creating starfield with 100 stars');

    var starsContainer = document.createElement('div');
    starsContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:15;overflow:hidden;';
    starsContainer.id = 'stars-container';

    // Generate 100 random stars
    for (var i = 0; i < 100; i++) {
      var star = document.createElement('div');
      var size = Math.random() < 0.7 ? '2px' : '3px';
      var x = Math.random() * 100;
      var y = Math.random() * 100;
      var opacity = 0.3 + Math.random() * 0.7;
      var delay = Math.random() * 3;

      star.style.cssText = 'position:absolute;width:' + size + ';height:' + size + ';background:white;border-radius:50%;box-shadow:0 0 3px rgba(255,255,255,0.8);left:' + x + '%;top:' + y + '%;opacity:' + opacity + ';animation:twinkleStar 3s ease-in-out infinite ' + delay + 's;';
      starsContainer.appendChild(star);
    }

var section = document.querySelector('.carpool-landing');
if (section) {
  section.insertBefore(starsContainer, section.firstChild);
}

    // Add animations
    if (!document.getElementById('star-animations')) {
      var style = document.createElement('style');
      style.id = 'star-animations';
      style.textContent = '@keyframes twinkleStar { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }';
      document.head.appendChild(style);
    }

    console.log('[CARPOOL] Starfield created - 100 stars added');
  }

  // Halloween Decorations
  function initHalloweenDecorations(){
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing not found - decorations skipped');
      return;
    }

    console.log('[CARPOOL] Initializing Halloween decorations');

      function createShootingStar() {
  const star = document.createElement('div');

  // Start somewhere near the top (0–40%)
  const topPos = Math.random() * 40;

  // Random angle between 0° (right) and 90° (down-right)
  // This is the *visual* direction of travel in CSS coordinate space.
  const angle = 0 + Math.random() * 60;
  const radians = angle * (Math.PI / 180);

  // Random distance and speed
  const distance = 800 + Math.random() * 600;
  const xTravel = Math.cos(radians) * distance;
  const yTravel = Math.sin(radians) * distance;
  const duration = 1 + Math.random() * 1.5;
  const size = 60 + Math.random() * 60;

  // Start just off the left edge of the screen
  star.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: 2px;
    background: linear-gradient(90deg, transparent, white, transparent);
    top: ${topPos}%;
    left: -${size}px;
    transform: rotate(${angle}deg);
    animation: shoot-${topPos.toFixed(0)} ${duration}s linear;
    pointer-events: none;
    z-index: 9998;
  `;

  // Animation for that specific star
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shoot-${topPos.toFixed(0)} {
      0% { transform: translate(0, 0) rotate(${angle}deg); opacity: 1; }
      100% { transform: translate(${xTravel}px, ${yTravel}px) rotate(${angle}deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  section.appendChild(star);

  setTimeout(() => {
    star.remove();
    style.remove();
  }, duration * 1000);
}


    function createBat() {
      var bat = document.createElement('div');
      var startY = Math.random() * 30 + 10;
      var duration = 15 + Math.random() * 10;
      bat.innerHTML = '🦇';
      bat.style.cssText = 'position:absolute;font-size:' + (20 + Math.random()*20) + 'px;top:' + startY + '%;left:-50px;animation:batFly ' + duration + 's linear;pointer-events:none;z-index:9998;opacity:0.7;';
      section.appendChild(bat);
      setTimeout(function(){ bat.remove(); }, duration * 1000);
    }

    function createGhost() {
      var ghost = document.createElement('div');
      var startY = Math.random() * 40 + 20;
      var duration = 20 + Math.random() * 10;
      ghost.innerHTML = '👻';
      ghost.style.cssText = 'position:absolute;font-size:' + (25 + Math.random()*15) + 'px;top:' + startY + '%;left:-50px;animation:ghostFloat ' + duration + 's ease-in-out;pointer-events:none;z-index:9998;opacity:0.5;';
      section.appendChild(ghost);
      setTimeout(function(){ ghost.remove(); }, duration * 1000);
    }

    var style = document.createElement('style');
    style.textContent = '@keyframes shoot { 0% { transform: translateX(0) translateY(0); opacity:1; } 70% { opacity:1; } 100% { transform: translateX(1000px) translateY(500px); opacity:0; } } @keyframes batFly { 0% { transform: translateX(0) translateY(0); } 25% { transform: translateX(25vw) translateY(-30px); } 50% { transform: translateX(50vw) translateY(0); } 75% { transform: translateX(75vw) translateY(-20px); } 100% { transform: translateX(100vw) translateY(0); } } @keyframes ghostFloat { 0% { transform: translateX(0) translateY(0); } 25% { transform: translateX(20vw) translateY(-40px); } 50% { transform: translateX(50vw) translateY(20px); } 75% { transform: translateX(80vw) translateY(-30px); } 100% { transform: translateX(100vw) translateY(0); } } .halloween-bat { filter: drop-shadow(0 0 3px rgba(255,107,0,0.5)); } .halloween-ghost { filter: drop-shadow(0 0 8px rgba(138,43,226,0.6)); }';
    document.head.appendChild(style);

    setInterval(createShootingStar, 3000);
    setInterval(createBat, 8000);
    setInterval(createGhost, 12000);

    setTimeout(createShootingStar, 1000);
    setTimeout(createBat, 2000);
    setTimeout(createGhost, 4000);

    console.log('[CARPOOL] Decorations initialized');
  }

  // Run when DOM is ready
  onReady(function(){
    console.log('[CARPOOL] DOM ready - creating effects');
    createStarfield();
    initHalloweenDecorations();
  });

})();

console.log('[CARPOOL] ========== SCRIPT SETUP COMPLETE ==========');
</script>
