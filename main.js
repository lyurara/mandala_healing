document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  
    // Global app state
    const appState = {
      currentColor: '#1E40AF', // Default color
      currentBrushSize: 'medium', // Default brush size
      musicPlaying: false,
      breathingComplete: false,
      complexity: 'simple' // Default complexity
    };
  
    // Initialize components
    if (typeof initBreathing === 'function') {
      initBreathing(appState);
    } else {
      console.error('呼吸引导功能未加载');
      // 如果呼吸引导功能未加载，直接设置为完成状态
      appState.breathingComplete = true;
    }
  
    // Initialize audio controller
    if (typeof initAudioController === 'function') {
      initAudioController(appState);
    } else {
      console.error('音频控制功能未加载');
    }
  
    // Initialize color palette
    if (typeof initColorPalette === 'function') {
      initColorPalette(appState);
    } else {
      console.error('颜色选择功能未加载');
    }
    
    // Event listeners
    const newMandalaBtn = document.getElementById('new-mandala-btn');
    if (newMandalaBtn) {
      newMandalaBtn.addEventListener('click', () => {
        if (typeof initMandala === 'function') {
          initMandala(appState);
        }
      });
    }
  
    // Set up brush size buttons
    const brushSizeButtons = document.querySelectorAll('.brush-size-btn');
    brushSizeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        brushSizeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        appState.currentBrushSize = btn.dataset.size;
      });
    });
  
    // Set up complexity buttons
    const complexityButtons = document.querySelectorAll('.complexity-btn');
    complexityButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        complexityButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        appState.complexity = btn.id.replace('complexity-', '');
        if (typeof initMandala === 'function') {
          initMandala(appState);
        }
      });
    });
  
    // Wait for breathing exercise to complete before showing mandala
    const checkBreathingStatus = setInterval(() => {
      if (appState.breathingComplete) {
        clearInterval(checkBreathingStatus);
        if (typeof initMandala === 'function') {
          initMandala(appState);
        }
      }
    }, 500);
  
    // Directly handle breathing exercise skip and start buttons
    const skipBreathingBtn = document.getElementById('skip-breathing');
    if (skipBreathingBtn) {
      skipBreathingBtn.addEventListener('click', function() {
        const breathingModal = document.getElementById('breathing-modal');
        if (breathingModal) {
          breathingModal.style.opacity = '0';
          setTimeout(() => {
            breathingModal.style.display = 'none';
            appState.breathingComplete = true;
          }, 500);
        }
      });
    }
  
    const startBreathingBtn = document.getElementById('start-breathing');
    if (startBreathingBtn) {
      startBreathingBtn.addEventListener('click', function() {
        console.log("开始呼吸引导");
        startManualBreathing();
      });
    }
  
    // Manual implementation of breathing exercise functionality
    function startManualBreathing() {
      const breathingModal = document.getElementById('breathing-modal');
      const breathingCircle = document.getElementById('breathing-circle');
      const breathingText = document.getElementById('breathing-text');
      const breathCount = document.getElementById('breath-count');
      
      if (!breathingCircle || !breathingText || !breathCount) {
        console.error("呼吸引导元素未找到");
        return;
      }
      
      let breathingActive = true;
      let completedBreaths = 0;
      
      // Disable start button
      if (startBreathingBtn) startBreathingBtn.disabled = true;
      
      function breathingCycle() {
        // Inhale phase
        breathingText.textContent = 'Inhale';
        breathingCircle.style.width = '100px';
        breathingCircle.style.height = '100px';
        
        // Reset animation
        breathingCircle.classList.remove('inhale', 'hold', 'exhale');
        void breathingCircle.offsetWidth; // Trigger repaint
        breathingCircle.classList.add('inhale');
        
        setTimeout(() => {
          // Hold phase
          if (!breathingActive) return;
          breathingText.textContent = 'Hold';
          
          breathingCircle.classList.remove('inhale', 'hold', 'exhale');
          void breathingCircle.offsetWidth; // Trigger repaint
          breathingCircle.classList.add('hold');
          
          setTimeout(() => {
            // Exhale phase
            if (!breathingActive) return;
            breathingText.textContent = 'Exhale';
            
            breathingCircle.classList.remove('inhale', 'hold', 'exhale');
            void breathingCircle.offsetWidth; // Trigger repaint
            breathingCircle.classList.add('exhale');
            
            setTimeout(() => {
              if (!breathingActive) return;
              
              // Increase breath count
              completedBreaths++;
              breathCount.textContent = completedBreaths;
              
              if (completedBreaths < 3) {
                // Continue to next breath cycle
                breathingCycle();
              } else {
                // Breathing exercise completed
                breathingText.textContent = 'Complete';
                breathingActive = false;
                
                setTimeout(() => {
                  breathingModal.style.opacity = '0';
                  
                  setTimeout(() => {
                    breathingModal.style.display = 'none';
                    appState.breathingComplete = true;
                  }, 500);
                }, 1000);
              }
            }, 4000); // Exhale duration
          }, 2000); // Hold duration
        }, 4000); // Inhale duration
      }
      
      // Start breathing cycle
      breathingCycle();
    }
  
    console.log("DOM 完全加载");
  
    // 检查 MANDALA_PATTERNS 是否存在
    if (typeof MANDALA_PATTERNS !== 'undefined') {
      console.log("曼陀罗花图案已加载:", MANDALA_PATTERNS.length, "个图案");
    } else {
      console.error("曼陀罗花图案未加载!");
    }
  
    // 检查调色板元素
    const colorPalette = document.getElementById('color-palette');
    if (colorPalette) {
      console.log("调色板元素已找到");
    } else {
      console.error("调色板元素未找到!");
    }
  
    // 检查曼陀罗 SVG 元素
    const mandalaSvg = document.getElementById('mandala-svg');
    if (mandalaSvg) {
      console.log("曼陀罗 SVG 元素已找到");
    } else {
      console.error("曼陀罗 SVG 元素未找到!");
    }
  });
  
  // Prevent page zooming
  window.addEventListener("wheel", (e) => {
    if (e.ctrlKey) e.preventDefault();
  }, { passive: false });
  
  // Prevent mobile pinch zoom
  document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) e.preventDefault();
  }, { passive: false });
  