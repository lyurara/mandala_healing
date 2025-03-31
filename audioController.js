function initAudioController(appState) {
    const audioElement = document.getElementById('background-music');
    const toggleButton = document.getElementById('toggle-music-btn');
    const iconElement = toggleButton.querySelector('i');
    
    // Set initial volume
    audioElement.volume = 0.4;
    
    // Toggle music playback
    toggleButton.addEventListener('click', () => {
      if (appState.musicPlaying) {
        audioElement.pause();
        iconElement.setAttribute('data-lucide', 'volume-x');
      } else {
        audioElement.play()
          .then(() => {
            iconElement.setAttribute('data-lucide', 'volume-2');
          })
          .catch(error => {
            console.error('音频播放失败:', error);
            iconElement.setAttribute('data-lucide', 'volume-x');
          });
      }
      
      appState.musicPlaying = !appState.musicPlaying;
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });
    
    // Handle audio errors
    audioElement.addEventListener('error', () => {
      console.error('音频加载错误');
      iconElement.setAttribute('data-lucide', 'volume-x');
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });
  }
  