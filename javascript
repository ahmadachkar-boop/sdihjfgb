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

  // Create Twinkling Christmas Stars Background
  function createChristmasStars(){
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing section not found');
      return;
    }

    console.log('[CARPOOL] Creating Christmas starfield with 120 twinkling stars');

    var starsContainer = document.createElement('div');
    starsContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:15;overflow:hidden;';
    starsContainer.id = 'stars-container';

    // Generate 120 random twinkling stars in Christmas colors
    for (var i = 0; i < 120; i++) {
      var star = document.createElement('div');
      var size = Math.random() < 0.6 ? '2px' : (Math.random() < 0.8 ? '3px' : '4px');
      var x = Math.random() * 100;
      var y = Math.random() * 100;
      var opacity = 0.4 + Math.random() * 0.6;
      var delay = Math.random() * 4;

      // Mix of white, gold, and subtle red/green tints
      var colors = [
        'rgba(255,255,255,0.9)',
        'rgba(255,215,0,0.8)',
        'rgba(255,255,240,0.9)',
        'rgba(255,223,0,0.7)',
        'rgba(255,250,250,1)'
      ];
      var color = colors[Math.floor(Math.random() * colors.length)];

      star.style.cssText = 'position:absolute;width:' + size + ';height:' + size + ';background:' + color + ';border-radius:50%;box-shadow:0 0 4px ' + color + ';left:' + x + '%;top:' + y + '%;opacity:' + opacity + ';animation:twinkleStar ' + (2 + Math.random() * 2) + 's ease-in-out infinite ' + delay + 's;';
      starsContainer.appendChild(star);
    }

    var section = document.querySelector('.carpool-landing');
    if (section) {
      section.insertBefore(starsContainer, section.firstChild);
    }

    // Add star twinkle animation
    if (!document.getElementById('star-animations')) {
      var style = document.createElement('style');
      style.id = 'star-animations';
      style.textContent = '@keyframes twinkleStar { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }';
      document.head.appendChild(style);
    }

    console.log('[CARPOOL] Christmas starfield created - 120 stars added');
  }

  // Create Falling Snowflakes
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
      var size = Math.random() * 8 + 4; // 4-12px
      var startX = Math.random() * 100;
      var duration = Math.random() * 15 + 10; // 10-25 seconds
      var delay = Math.random() * 5;
      var drift = (Math.random() - 0.5) * 100; // Horizontal drift
      var opacity = Math.random() * 0.6 + 0.4;

      // Use ❄ snowflake emoji or • for variety
      var snowTypes = ['❄', '❅', '❆', '•', '·'];
      snowflake.innerHTML = snowTypes[Math.floor(Math.random() * snowTypes.length)];

      snowflake.style.cssText = 'position:absolute;left:' + startX + '%;top:-20px;font-size:' + size + 'px;color:rgba(255,255,255,' + opacity + ');animation:snowfall ' + duration + 's linear infinite ' + delay + 's;pointer-events:none;text-shadow:0 0 5px rgba(255,255,255,0.8);';

      // Add unique drift animation
      var driftStyle = document.createElement('style');
      var animId = 'drift-' + Math.random().toString(36).substr(2, 9);
      driftStyle.textContent = '@keyframes ' + animId + ' { 0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity:0; } 10% { opacity:1; } 90% { opacity:1; } 100% { transform: translateY(100vh) translateX(' + drift + 'px) rotate(360deg); opacity:0; } }';
      document.head.appendChild(driftStyle);
      snowflake.style.animation = animId + ' ' + duration + 's linear infinite ' + delay + 's';

      snowContainer.appendChild(snowflake);
    }

    // Create initial snowflakes
    for (var i = 0; i < 50; i++) {
      createSnowflake();
    }

    console.log('[CARPOOL] Snowfall initialized with 50 snowflakes');
  }

  // Christmas Decorations - Floating elements
  function initChristmasDecorations(){
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing not found - decorations skipped');
      return;
    }

    console.log('[CARPOOL] Initializing Christmas decorations');

    var decorContainer = document.createElement('div');
    decorContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9998;overflow:hidden;';
    decorContainer.id = 'decorations-container';
    section.appendChild(decorContainer);

    // Sparkles that appear randomly
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

    // Floating Christmas Tree
    function createChristmasTree() {
      var tree = document.createElement('div');
      var startY = Math.random() * 40 + 10;
      var duration = 25 + Math.random() * 15;
      var size = 30 + Math.random() * 25;

      tree.innerHTML = '🎄';
      tree.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatChristmas ' + duration + 's ease-in-out;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 8px rgba(22,91,51,0.6));';

      decorContainer.appendChild(tree);
      setTimeout(function(){ tree.remove(); }, duration * 1000);
    }

    // Floating Santa
    function createSanta() {
      var santa = document.createElement('div');
      var startY = Math.random() * 30 + 5;
      var duration = 20 + Math.random() * 10;
      var size = 35 + Math.random() * 20;

      santa.innerHTML = '🎅';
      santa.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatChristmas ' + duration + 's linear;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 10px rgba(196,30,58,0.7));';

      decorContainer.appendChild(santa);
      setTimeout(function(){ santa.remove(); }, duration * 1000);
    }

    // Floating Gift/Present
    function createGift() {
      var gift = document.createElement('div');
      var startY = Math.random() * 50 + 15;
      var duration = 22 + Math.random() * 12;
      var size = 25 + Math.random() * 20;

      var giftTypes = ['🎁', '🎀', '🎉'];
      gift.innerHTML = giftTypes[Math.floor(Math.random() * giftTypes.length)];
      gift.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatChristmas ' + duration + 's ease-in-out;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 8px rgba(255,215,0,0.6));';

      decorContainer.appendChild(gift);
      setTimeout(function(){ gift.remove(); }, duration * 1000);
    }

    // Floating Ornament
    function createOrnament() {
      var ornament = document.createElement('div');
      var startY = Math.random() * 40 + 20;
      var duration = 28 + Math.random() * 12;
      var size = 20 + Math.random() * 15;

      var ornamentTypes = ['🔴', '🟢', '🟡', '🔵'];
      ornament.innerHTML = ornamentTypes[Math.floor(Math.random() * ornamentTypes.length)];
      ornament.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatChristmas ' + duration + 's linear;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 6px rgba(255,215,0,0.5));animation:floatOrnament ' + duration + 's ease-in-out;';

      decorContainer.appendChild(ornament);
      setTimeout(function(){ ornament.remove(); }, duration * 1000);
    }

    // Floating Snowman
    function createSnowman() {
      var snowman = document.createElement('div');
      var startY = Math.random() * 45 + 10;
      var duration = 30 + Math.random() * 15;
      var size = 30 + Math.random() * 20;

      snowman.innerHTML = '⛄';
      snowman.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatChristmas ' + duration + 's ease-in-out;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 8px rgba(255,255,255,0.8));';

      decorContainer.appendChild(snowman);
      setTimeout(function(){ snowman.remove(); }, duration * 1000);
    }

    // Floating Reindeer
    function createReindeer() {
      var reindeer = document.createElement('div');
      var startY = Math.random() * 25 + 5;
      var duration = 18 + Math.random() * 10;
      var size = 30 + Math.random() * 15;

      reindeer.innerHTML = '🦌';
      reindeer.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatChristmas ' + duration + 's linear;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 8px rgba(196,30,58,0.5));';

      decorContainer.appendChild(reindeer);
      setTimeout(function(){ reindeer.remove(); }, duration * 1000);
    }

    // Floating Candy Cane
    function createCandyCane() {
      var candy = document.createElement('div');
      var startY = Math.random() * 50 + 15;
      var duration = 24 + Math.random() * 12;
      var size = 25 + Math.random() * 15;

      candy.innerHTML = '🍬';
      candy.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatChristmas ' + duration + 's ease-in-out;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 6px rgba(196,30,58,0.6));';

      decorContainer.appendChild(candy);
      setTimeout(function(){ candy.remove(); }, duration * 1000);
    }

    // Floating Bell
    function createBell() {
      var bell = document.createElement('div');
      var startY = Math.random() * 40 + 15;
      var duration = 26 + Math.random() * 10;
      var size = 22 + Math.random() * 18;

      bell.innerHTML = '🔔';
      bell.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatChristmas ' + duration + 's linear;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 8px rgba(255,215,0,0.7));';

      decorContainer.appendChild(bell);
      setTimeout(function(){ bell.remove(); }, duration * 1000);
    }

    // Floating Star
    function createStar() {
      var star = document.createElement('div');
      var startY = Math.random() * 35 + 10;
      var duration = 22 + Math.random() * 12;
      var size = 25 + Math.random() * 20;

      star.innerHTML = '⭐';
      star.style.cssText = 'position:absolute;font-size:' + size + 'px;top:' + startY + '%;left:-60px;animation:floatChristmas ' + duration + 's ease-in-out;pointer-events:none;z-index:9998;filter:drop-shadow(0 0 10px rgba(255,215,0,0.8));';

      decorContainer.appendChild(star);
      setTimeout(function(){ star.remove(); }, duration * 1000);
    }

    // Add CSS animations for floating decorations
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

    // Set intervals for creating decorations
    setInterval(createSparkle, 3000);
    setInterval(createChristmasTree, 12000);
    setInterval(createSanta, 15000);
    setInterval(createGift, 10000);
    setInterval(createOrnament, 8000);
    setInterval(createSnowman, 18000);
    setInterval(createReindeer, 13000);
    setInterval(createCandyCane, 11000);
    setInterval(createBell, 14000);
    setInterval(createStar, 9000);

    // Initial decorations with staggered delays
    setTimeout(createSparkle, 500);
    setTimeout(createChristmasTree, 2000);
    setTimeout(createSanta, 4000);
    setTimeout(createGift, 1500);
    setTimeout(createOrnament, 3000);
    setTimeout(createSnowman, 5000);
    setTimeout(createReindeer, 2500);
    setTimeout(createCandyCane, 3500);
    setTimeout(createBell, 4500);
    setTimeout(createStar, 1000);

    console.log('[CARPOOL] Christmas decorations initialized');
  }

  // Run when DOM is ready
  onReady(function(){
    console.log('[CARPOOL] DOM ready - creating Christmas effects');
    createChristmasStars();
    createSnowfall();
    initChristmasDecorations();
  });

})();

console.log('[CARPOOL] ========== CHRISTMAS SCRIPT SETUP COMPLETE ==========');
console.log('[CARPOOL] 🎄 Ho Ho Ho! Merry Christmas! 🎅');
</script>
