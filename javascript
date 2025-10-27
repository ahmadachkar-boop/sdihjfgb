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

  // Create Hanging Christmas Light Strings
  function createChristmasLights(){
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing section not found');
      return;
    }

    console.log('[CARPOOL] Creating hanging Christmas light strings');

    var lightsContainer = document.createElement('div');
    lightsContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:200px;pointer-events:none;z-index:20;overflow:visible;';
    lightsContainer.id = 'lights-container';

    // Create 8 light strings across the top
    for (var i = 0; i < 8; i++) {
      var lightString = document.createElement('div');
      var leftPos = (i * 12.5) + 6;
      var swayDelay = i * 0.5;

      lightString.style.cssText = 'position:absolute;top:-10px;left:' + leftPos + '%;width:2px;height:150px;background:rgba(255,255,255,0.1);transform-origin:top center;animation:sway ' + (4 + Math.random() * 2) + 's ease-in-out infinite ' + swayDelay + 's;';

      // Add 5-7 lights to each string
      var numLights = 5 + Math.floor(Math.random() * 3);
      for (var j = 0; j < numLights; j++) {
        var light = document.createElement('div');
        var lightColors = ['#c41e3a', '#165b33', '#ffd700', '#ff4757', '#27ae60', '#ff6b6b', '#4ecdc4'];
        var color = lightColors[Math.floor(Math.random() * lightColors.length)];
        var topPos = 20 + (j * 25);
        var pulseDelay = Math.random() * 3;

        light.style.cssText = 'position:absolute;top:' + topPos + 'px;left:-4px;width:10px;height:10px;background:' + color + ';border-radius:50%;box-shadow:0 0 10px ' + color + ', 0 0 20px ' + color + ';animation:bulbPulse ' + (1 + Math.random()) + 's ease-in-out infinite ' + pulseDelay + 's;';

        lightString.appendChild(light);
      }

      lightsContainer.appendChild(lightString);
    }

    section.insertBefore(lightsContainer, section.firstChild);

    // Add animations
    if (!document.getElementById('light-animations')) {
      var style = document.createElement('style');
      style.id = 'light-animations';
      style.textContent = `
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes bulbPulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 15px currentColor, 0 0 30px currentColor; }
        }
      `;
      document.head.appendChild(style);
    }

    console.log('[CARPOOL] Christmas light strings created');
  }

  // Create Floating Bokeh Light Circles (like out-of-focus Christmas lights)
  function createBokehLights(){
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing not found');
      return;
    }

    console.log('[CARPOOL] Creating bokeh light effect');

    var bokehContainer = document.createElement('div');
    bokehContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10;overflow:hidden;';
    bokehContainer.id = 'bokeh-container';
    section.appendChild(bokehContainer);

    function createBokehCircle() {
      var bokeh = document.createElement('div');
      var size = 40 + Math.random() * 120;
      var startX = Math.random() * 100;
      var startY = 100 + Math.random() * 20;
      var duration = 15 + Math.random() * 20;
      var delay = Math.random() * 5;
      var drift = (Math.random() - 0.5) * 30;

      var colors = [
        'rgba(196, 30, 58, 0.3)',
        'rgba(22, 91, 51, 0.3)',
        'rgba(255, 215, 0, 0.35)',
        'rgba(255, 71, 87, 0.25)',
        'rgba(39, 174, 96, 0.3)',
        'rgba(220, 20, 60, 0.25)',
        'rgba(255, 255, 255, 0.2)'
      ];
      var color = colors[Math.floor(Math.random() * colors.length)];

      bokeh.style.cssText = 'position:absolute;width:' + size + 'px;height:' + size + 'px;border-radius:50%;background:' + color + ';left:' + startX + '%;top:' + startY + '%;filter:blur(' + (8 + Math.random() * 12) + 'px);opacity:0;pointer-events:none;';

      var animId = 'bokeh-' + Math.random().toString(36).substr(2, 9);
      var style = document.createElement('style');
      style.textContent = `
        @keyframes ${animId} {
          0% {
            transform: translateY(0) translateX(0) scale(0.8);
            opacity: 0;
          }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% {
            transform: translateY(-120vh) translateX(${drift}vw) scale(1.2);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);

      bokeh.style.animation = animId + ' ' + duration + 's ease-in-out ' + delay + 's';
      bokehContainer.appendChild(bokeh);

      setTimeout(function() {
        bokeh.remove();
        style.remove();
      }, (duration + delay) * 1000);
    }

    // Create initial bokeh circles
    for (var i = 0; i < 15; i++) {
      setTimeout(createBokehCircle, i * 1000);
    }

    // Keep creating new ones
    setInterval(createBokehCircle, 3000);

    console.log('[CARPOOL] Bokeh light effect initialized');
  }

  // Create Floating Glitter/Confetti Particles
  function createGlitterParticles(){
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing not found');
      return;
    }

    console.log('[CARPOOL] Creating glitter particles');

    var glitterContainer = document.createElement('div');
    glitterContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:15;overflow:hidden;';
    glitterContainer.id = 'glitter-container';
    section.appendChild(glitterContainer);

    function createGlitter() {
      var glitter = document.createElement('div');
      var size = 2 + Math.random() * 4;
      var startX = Math.random() * 100;
      var duration = 3 + Math.random() * 4;
      var delay = Math.random() * 2;
      var rotation = Math.random() * 360;
      var drift = (Math.random() - 0.5) * 50;

      var glitterShapes = ['◆', '✦', '✧', '❋', '✴', '◈'];
      var shape = glitterShapes[Math.floor(Math.random() * glitterShapes.length)];

      var colors = ['#ffd700', '#c41e3a', '#165b33', '#ffffff', '#ff6b6b', '#27ae60'];
      var color = colors[Math.floor(Math.random() * colors.length)];

      glitter.innerHTML = shape;
      glitter.style.cssText = 'position:absolute;left:' + startX + '%;top:-20px;font-size:' + size + 'px;color:' + color + ';opacity:0;pointer-events:none;text-shadow:0 0 3px currentColor;';

      var animId = 'glitter-' + Math.random().toString(36).substr(2, 9);
      var style = document.createElement('style');
      style.textContent = `
        @keyframes ${animId} {
          0% {
            transform: translateY(0) translateX(0) rotate(${rotation}deg);
            opacity: 0;
          }
          10% { opacity: 0.9; }
          90% { opacity: 0.9; }
          100% {
            transform: translateY(100vh) translateX(${drift}px) rotate(${rotation + 720}deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);

      glitter.style.animation = animId + ' ' + duration + 's linear ' + delay + 's';
      glitterContainer.appendChild(glitter);

      setTimeout(function() {
        glitter.remove();
        style.remove();
      }, (duration + delay) * 1000);
    }

    // Create glitter particles
    for (var i = 0; i < 20; i++) {
      setTimeout(createGlitter, i * 500);
    }

    setInterval(createGlitter, 2000);

    console.log('[CARPOOL] Glitter particles initialized');
  }

  // Create Gently Bobbing Ornaments
  function createFloatingOrnaments(){
    var section = document.querySelector('.carpool-landing');
    if (!section) {
      console.warn('[CARPOOL] .carpool-landing not found');
      return;
    }

    console.log('[CARPOOL] Creating floating ornaments');

    var ornamentContainer = document.createElement('div');
    ornamentContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:12;overflow:hidden;';
    ornamentContainer.id = 'ornament-container';
    section.appendChild(ornamentContainer);

    // Create 6 gently bobbing ornaments at various positions
    var positions = [
      {x: 10, y: 20},
      {x: 25, y: 45},
      {x: 40, y: 15},
      {x: 60, y: 50},
      {x: 75, y: 30},
      {x: 90, y: 40}
    ];

    positions.forEach(function(pos, index) {
      var ornament = document.createElement('div');
      var size = 25 + Math.random() * 20;
      var bobDelay = index * 0.7;
      var bobDuration = 3 + Math.random() * 2;

      var ornamentEmojis = ['🔴', '🟢', '🟡', '🔵', '🟣', '🟠'];
      var emoji = ornamentEmojis[index % ornamentEmojis.length];

      ornament.innerHTML = emoji;
      ornament.style.cssText = 'position:absolute;left:' + pos.x + '%;top:' + pos.y + '%;font-size:' + size + 'px;animation:gentleBob ' + bobDuration + 's ease-in-out infinite ' + bobDelay + 's;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.3));opacity:0.7;';

      ornamentContainer.appendChild(ornament);
    });

    // Add bob animation
    if (!document.getElementById('ornament-animations')) {
      var style = document.createElement('style');
      style.id = 'ornament-animations';
      style.textContent = `
        @keyframes gentleBob {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
      `;
      document.head.appendChild(style);
    }

    console.log('[CARPOOL] Floating ornaments created');
  }

  // Create Falling Snowflakes (keep this from before)
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

    // Create 30 snowflakes
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

      @keyframes sparkleAnim {
        0% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
        100% { opacity: 0; transform: scale(0) rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    // Reduced intervals - much less frequent
    setInterval(createSparkle, 8000);
    setInterval(createChristmasTree, 25000);
    setInterval(createGift, 20000);
    setInterval(createStar, 22000);

    // Initial decorations with staggered delays
    setTimeout(createSparkle, 2000);
    setTimeout(createChristmasTree, 5000);
    setTimeout(createGift, 8000);
    setTimeout(createStar, 14000);

    console.log('[CARPOOL] Christmas decorations initialized (reduced frequency)');
  }

  // Run when DOM is ready
  onReady(function(){
    console.log('[CARPOOL] DOM ready - creating Christmas effects');
    createChristmasLights();      // NEW: Hanging light strings
    createBokehLights();           // NEW: Floating bokeh circles
    createGlitterParticles();      // NEW: Falling glitter
    createFloatingOrnaments();     // NEW: Bobbing ornaments
    createSnowfall();
    createSantaSleigh();
    initChristmasDecorations();
  });

})();

console.log('[CARPOOL] ========== CHRISTMAS SCRIPT SETUP COMPLETE ==========');
console.log('[CARPOOL] 🎄 Ho Ho Ho! Merry Christmas! 🎅');
</script>
