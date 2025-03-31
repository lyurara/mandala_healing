function initBreathing(appState) {
    const breathingModal = document.getElementById('breathing-modal');
    const breathingCircle = document.getElementById('breathing-circle');
    const breathingText = document.getElementById('breathing-text');
    const breathCount = document.getElementById('breath-count');
    const startButton = document.getElementById('start-breathing');
    const skipButton = document.getElementById('skip-breathing');
    
    let breathingActive = false;
    let completedBreaths = 0;
    
    // 确保呼吸圆圈初始状态正确
    breathingCircle.style.width = '100px';
    breathingCircle.style.height = '100px';
    
    // Skip breathing exercise
    skipButton.addEventListener('click', () => {
      breathingModal.classList.add('opacity-0');
      setTimeout(() => {
        breathingModal.style.display = 'none';
        appState.breathingComplete = true;
      }, 500);
    });
    
    // Start breathing exercise
    startButton.addEventListener('click', () => {
      if (breathingActive) return;
      
      startButton.disabled = true;
      breathingActive = true;
      
      // Begin the breathing cycle
      startBreathingCycle();
    });
    
    function startBreathingCycle() {
      console.log("Starting breathing cycle");
      
      // Inhale phase
      breathingText.textContent = 'Inhale';
      breathingCircle.className = '';
      void breathingCircle.offsetWidth; // 触发重绘
      breathingCircle.className = 'absolute rounded-full bg-gradient-to-r from-blue-300 to-indigo-300 flex items-center justify-center inhale';
      
      setTimeout(() => {
        // Hold phase
        if (!breathingActive) return;
        breathingText.textContent = 'Hold';
        breathingCircle.className = '';
        void breathingCircle.offsetWidth; // 触发重绘
        breathingCircle.className = 'absolute rounded-full bg-gradient-to-r from-blue-300 to-indigo-300 flex items-center justify-center hold';
        
        setTimeout(() => {
          // Exhale phase
          if (!breathingActive) return;
          breathingText.textContent = 'Exhale';
          breathingCircle.className = '';
          void breathingCircle.offsetWidth; // 触发重绘
          breathingCircle.className = 'absolute rounded-full bg-gradient-to-r from-blue-300 to-indigo-300 flex items-center justify-center exhale';
          
          setTimeout(() => {
            if (!breathingActive) return;
            
            // Increment breath count
            completedBreaths++;
            breathCount.textContent = completedBreaths;
            
            if (completedBreaths < 3) {
              // Continue with next breath cycle
              startBreathingCycle();
            } else {
              // Breathing exercise complete
              breathingText.textContent = 'Complete';
              breathingActive = false;
              
              setTimeout(() => {
                breathingModal.classList.add('opacity-0');
                breathingModal.classList.add('pointer-events-none');
                
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
  }
  