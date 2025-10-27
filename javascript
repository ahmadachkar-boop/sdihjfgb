<script>
console.log('[CARPOOL] ========== CHRISTMAS SCRIPT LOADED FROM AVADA FOOTER ==========');

(function () {
  console.log('[CARPOOL] Main Christmas function executing');

  function onReady(fn){
    if(document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  // Create Christmas-Themed Stars Background with Red & Green Tints
  function createChristmasStars(){
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing section not found');
      return;
    }

    console.log('[CARPOOL] Creating Christmas starfield with festive colors');

    var starsContainer = document.createElement('div');
    starsContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:15;overflow:hidden;';
    starsContainer.id = 'stars-container';

    // Generate 80 stars with Christmas colors
    for (var i = 0; i < 80; i++) {
      var star = document.createElement('div');
      var size = Math.random() < 0.7 ? '2px' : (Math.random() < 0.9 ? '3px' : '4px');
      var x = Math.random() * 100;
      var y = Math.random() * 100;
      var opacity = 0.3 + Math.random() * 0.7;
      var delay = Math.random() * 4;

      // Christmas color palette for stars: gold, white, red, green
      var colors = [
        'rgba(255,215,0,0.9)',     // Gold
        'rgba(255,255,255,0.9)',   // White
        'rgba(255,255,240,0.95)',  // Warm white
        'rgba(255,223,0,0.8)',     // Light gold
        'rgba(196,30,58,0.7)',     // Christmas red
        'rgba(22,91,51,0.7)',      // Christmas green
        'rgba(220,20,60,0.75)',    // Crimson
        'rgba(39,174,96,0.7)'      // Forest green
      ];
      var color = colors[Math.floor(Math.random() * colors.length)];

      star.style.cssText = 'position:absolute;width:' + size + ';height:' + size + ';background:' + color + ';border-radius:50%;box-shadow:0 0 6px ' + color + ', 0 0 12px ' + color + ';left:' + x + '%;top:' + y + '%;opacity:' + opacity + ';animation:twinkleStar ' + (2 + Math.random() * 3) + 's ease-in-out infinite ' + delay + 's;';
      starsContainer.appendChild(star);
    }

    var section = document.querySelector('.carpool-landing');
    if (section) {
      section.insertBefore(starsContainer, section.firstChild);
    }

    // Add star twinkle animation with more sparkle
    if (!document.getElementById('star-animations')) {
      var style = document.createElement('style');
      style.id = 'star-animations';
      style.textContent = '@keyframes twinkleStar { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); box-shadow: 0 0 20px currentColor; } }';
      document.head.appendChild(style);
    }

    console.log('[CARPOOL] Christmas starfield created with festive colors');
  }

  // Create Falling Snowflakes (Reduced amount)
  function createSnowfall() {
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing not found - snowfall skipped');
      return;
    }

    console.log('[CARPOOL] Initializing snowfall effect');

    var snowContainer = document.createElement('div');
    snowContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden;';
    snowContainer.id = 'snow-container';
    section.appendChild(snowContainer);

    function createSnowflake() {
      var snowflake = document.createElement('div');
      var size = Math.random() * 8 + 4;
      var startX = Math.random() * 100;
      var duration = Math.random() * 15 + 10;
      var delay = Math.random() * 5;
      var drift = (Math.random() - 0.5) * 100;
      var opacity = Math.random() * 0.6 + 0.4;

      var snowTypes = ['❄', '❅', '❆', '•', '·'];
      snowflake.innerHTML = snowTypes[Math.floor(Math.random() * snowTypes.length)];

      snowflake.style.cssText = 'position:absolute;left:' + startX + '%;top:-20px;font-size:' + size + 'px;color:rgba(255,255,255,' + opacity + ');animation:snowfall ' + duration + 's linear infinite ' + delay + 's;pointer-events:none;text-shadow:0 0 5px rgba(255,255,255,0.8);';

      var driftStyle = document.createElement('style');
      var animId = 'drift-' + Math.random().toString(36).substr(2, 9);
      driftStyle.textContent = '@keyframes ' + animId + ' { 0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity:0; } 10% { opacity:1; } 90% { opacity:1; } 100% { transform: translateY(100vh) translateX(' + drift + 'px) rotate(360deg); opacity:0; } }';
      document.head.appendChild(driftStyle);
      snowflake.style.animation = animId + ' ' + duration + 's linear infinite ' + delay + 's';

      snowContainer.appendChild(snowflake);
    }

    // Create 30 snowflakes (reduced from 50)
    for (var i = 0; i < 30; i++) {
      createSnowflake();
    }

    console.log('[CARPOOL] Snowfall initialized with 30 snowflakes');
  }

  // Santa Sleigh Animation - Runs once at page load
  function createSantaSleigh() {
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing not found - Santa sleigh skipped');
      return;
    }

    console.log('[CARPOOL] Creating Santa sleigh flyover');

    var sleighContainer = document.createElement('div');
    sleighContainer.style.cssText = 'position:fixed;top:15%;left:-300px;z-index:10000;pointer-events:none;font-size:48px;animation:santaFly 8s ease-in-out;filter:drop-shadow(0 0 20px rgba(255,215,0,0.8));';
    sleighContainer.innerHTML = '🦌🦌🦌🛷🎅';

    section.appendChild(sleighContainer);

    // Add animation
    var style = document.createElement('style');
    style.textContent = `
      @keyframes santaFly {
        0% {
          left: -300px;
          top: 15%;
          transform: rotate(-5deg) scale(1);
        }
        20% {
          top: 10%;
          transform: rotate(0deg) scale(1.1);
        }
        50% {
          left: 50%;
          top: 12%;
          transform: rotate(2deg) scale(1.2);
        }
        80% {
          top: 8%;
          transform: rotate(-2deg) scale(1.1);
        }
        100% {
          left: calc(100% + 300px);
          top: 5%;
          transform: rotate(-5deg) scale(1);
        }
      }
    `;
    document.head.appendChild(style);

    // Remove after animation completes
    setTimeout(function() {
      sleighContainer.remove();
      style.remove();
    }, 8000);

    console.log('[CARPOOL] Santa sleigh animation started');
  }

  // Reduced Christmas Decorations - Much fewer emojis
  function initChristmasDecorations(){
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing not found - decorations skipped');
      return;
    }

    console.log('[CARPOOL] Initializing Christmas decorations (reduced)');

    var decorContainer = document.createElement('div');
    decorContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9998;overflow:hidden;';
    decorContainer.id = 'decorations-container';
    section.appendChild(decorContainer);

    // Sparkles - occasional only
    function createSparkle() {
      var sparkle = document.createElement('div');
      var x = Math.random() * 100;
      var y = Math.random() * 80;
      var size = Math.random() * 6 + 3;

      sparkle.innerHTML = '✨';
      sparkle.style.cssText = 'position:absolute;left:' + x + '%;top:' + y + '%;font-size:' + size + 'px;animation:sparkleAnim 2s ease-in-out;pointer-events:none;z-index:9999;';

      decorContainer.appendChild(sparkle);

      setTimeout(function() {
        sparkle.remove();
      }, 2000);
    }

    // Christmas Tree
    function createChristmasTree() {
      var tree = document.createElement('div');
      var startY = Math.random() * 40 + 10;
      var duration = 25 + Math.random() * 10;
      var size = 30 + Math.random() * 20;

      tree.innerHTML = '🎄';
      tree.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatChristmas ' + duration + 's ease-in-out;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 8px rgba(22,91,51,0.6));';

      decorContainer.appendChild(tree);
      setTimeout(function(){ tree.remove(); }, duration * 1000);
    }

    // Gift
    function createGift() {
      var gift = document.createElement('div');
      var startY = Math.random() * 50 + 15;
      var duration = 22 + Math.random() * 10;
      var size = 25 + Math.random() * 15;

      var giftTypes = ['🎁', '🎀'];
      gift.innerHTML = giftTypes[Math.floor(Math.random() * giftTypes.length)];
      gift.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatChristmas ' + duration + 's ease-in-out;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 8px rgba(255,215,0,0.6));';

      decorContainer.appendChild(gift);
      setTimeout(function(){ gift.remove(); }, duration * 1000);
    }

    // Ornament
    function createOrnament() {
      var ornament = document.createElement('div');
      var startY = Math.random() * 40 + 20;
      var duration = 28 + Math.random() * 10;
      var size = 20 + Math.random() * 12;

      var ornamentTypes = ['🔴', '🟢', '🟡'];
      ornament.innerHTML = ornamentTypes[Math.floor(Math.random() * ornamentTypes.length)];
      ornament.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatOrnament ' + duration + 's ease-in-out;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 6px rgba(255,215,0,0.5));';

      decorContainer.appendChild(ornament);
      setTimeout(function(){ ornament.remove(); }, duration * 1000);
    }

    // Star
    function createStar() {
      var star = document.createElement('div');
      var startY = Math.random() * 35 + 10;
      var duration = 22 + Math.random() * 10;
      var size = 25 + Math.random() * 15;

      star.innerHTML = '⭐';
      star.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatChristmas ' + duration + 's ease-in-out;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 10px rgba(255,215,0,0.8));';

      decorContainer.appendChild(star);
      setTimeout(function(){ star.remove(); }, duration * 1000);
    }

    // Add CSS animations
    var style = document.createElement('style');
    style.textContent = `
      @keyframes floatChristmas {
        0% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 0; }
        5% { opacity: 0.8; }
        25% { transform: translateX(25vw) translateY(-20px) rotate(90deg); }
        50% { transform: translateX(50vw) translateY(10px) rotate(180deg); }
        75% { transform: translateX(75vw) translateY(-15px) rotate(270deg); }
        95% { opacity: 0.8; }
        100% { transform: translateX(105vw) translateY(0) rotate(360deg); opacity: 0; }
      }

      @keyframes floatOrnament {
        0% { transform: translateX(0) translateY(0) rotate(-10deg); opacity: 0; }
        5% { opacity: 0.9; }
        25% { transform: translateX(25vw) translateY(-15px) rotate(5deg); }
        50% { transform: translateX(50vw) translateY(15px) rotate(-10deg); }
        75% { transform: translateX(75vw) translateY(-10px) rotate(5deg); }
        95% { opacity: 0.9; }
        100% { transform: translateX(105vw) translateY(0) rotate(-10deg); opacity: 0; }
      }

      @keyframes sparkleAnim {
        0% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
        100% { opacity: 0; transform: scale(0) rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    // Reduced intervals - much less frequent
    setInterval(createSparkle, 8000);        // Every 8 seconds (was 3)
    setInterval(createChristmasTree, 25000); // Every 25 seconds (was 12)
    setInterval(createGift, 20000);          // Every 20 seconds (was 10)
    setInterval(createOrnament, 18000);      // Every 18 seconds (was 8)
    setInterval(createStar, 22000);          // Every 22 seconds (was 9)

    // Initial decorations with staggered delays
    setTimeout(createSparkle, 2000);
    setTimeout(createChristmasTree, 5000);
    setTimeout(createGift, 8000);
    setTimeout(createOrnament, 11000);
    setTimeout(createStar, 14000);

    console.log('[CARPOOL] Christmas decorations initialized (reduced frequency)');
  }

  // Run when DOM is ready
  onReady(function(){
    console.log('[CARPOOL] DOM ready - creating Christmas effects');
    createChristmasStars();
    createSnowfall();
    createSantaSleigh();  // Runs once at load
    initChristmasDecorations();
  });

})();

console.log('[CARPOOL] ========== CHRISTMAS SCRIPT SETUP COMPLETE ==========');
console.log('[CARPOOL] 🎄 Ho Ho Ho! Merry Christmas! 🎅');
</script>
