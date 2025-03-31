function initMandala(appState) {
    console.log("初始化曼陀罗花图案");
    const mandalaSvg = document.getElementById('mandala-svg');
    
    // Clear previous mandala if any
    mandalaSvg.innerHTML = '';
    
    // Check if MANDALA_PATTERNS exists
    if (!window.MANDALA_PATTERNS || window.MANDALA_PATTERNS.length === 0) {
      console.error("曼陀罗花图案未找到或为空!");
      // Create a default mandala
      createDefaultMandala(mandalaSvg);
      return;
    }
    
    // Get mandala patterns based on complexity
    const filteredPatterns = window.MANDALA_PATTERNS.filter(pattern => {
      if (appState.complexity === 'simple') {
        return pattern.complexity === 'simple';
      } else if (appState.complexity === 'medium') {
        return pattern.complexity === 'medium';
      } else {
        return pattern.complexity === 'complex';
      }
    });
    
    // If no matching pattern found, use all patterns
    const patternsToUse = filteredPatterns.length > 0 ? filteredPatterns : window.MANDALA_PATTERNS;
    
    // Get a random mandala pattern from our filtered patterns
    const randomIndex = Math.floor(Math.random() * patternsToUse.length);
    const selectedMandala = patternsToUse[randomIndex];
    
    console.log("选择的曼陀罗花图案:", selectedMandala.name);
    
    // Set SVG dimensions and viewBox
    mandalaSvg.setAttribute('viewBox', '0 0 1000 1000');
    mandalaSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    
    // Create a group for the mandala and center it
    const mandalaGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    mandalaGroup.setAttribute('id', 'mandala-group');
    mandalaGroup.setAttribute('transform', 'scale(0.9) translate(50, 50)');
    mandalaSvg.appendChild(mandalaGroup);
    
    // Create and append each mandala path section to the SVG
    selectedMandala.sections.forEach((sectionData, index) => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', sectionData.path);
      path.setAttribute('class', 'mandala-section');
      path.setAttribute('data-index', index);
      
      // Add click event for coloring
      path.addEventListener('click', function() {
        colorSection(this, appState.currentColor, appState.currentBrushSize);
      });
      
      mandalaGroup.appendChild(path);
    });
    
    // Make the canvas container as large as possible
    adjustCanvasSize();
    
    // Function to color a section
    function colorSection(pathElement, color, brushSize) {
      console.log("着色部分:", pathElement.dataset.index, "颜色:", color, "笔触大小:", brushSize);
      
      // Apply color to the path
      pathElement.style.fill = color;
      
      // Visual feedback based on brush size
      let strokeWidth;
      switch (brushSize) {
        case 'small':
          strokeWidth = '0.7';
          break;
        case 'large':
          strokeWidth = '1.8';
          break;
        default: // medium
          strokeWidth = '1.2';
      }
      
      pathElement.style.strokeWidth = strokeWidth;
      
      // Apply a quick transition effect
      pathElement.style.transition = 'fill 0.2s ease';
      setTimeout(() => {
        pathElement.style.transition = '';
      }, 300);
      
      // If music isn't already playing, start it when user begins coloring
      if (!appState.musicPlaying) {
        const audioController = document.querySelector('#toggle-music-btn');
        if (audioController) {
          audioController.click();
        }
      }
    }
    
    // Function to maximize canvas size
    function adjustCanvasSize() {
      const canvasContainer = document.getElementById('canvas-container');
      const main = document.querySelector('main');
      
      // 考虑到新的侧边栏宽度
      const mainWidth = main.clientWidth - 180; // 160px侧边栏 + 20px边距
      const mainHeight = main.clientHeight - 40; // 减去上下边距
      
      const size = Math.min(mainWidth, mainHeight);
      
      // 平滑过渡
      canvasContainer.style.transition = 'width 0.3s ease, height 0.3s ease';
      canvasContainer.style.width = `${size}px`;
      canvasContainer.style.height = `${size}px`;
      canvasContainer.style.padding = '20px';
      
      // 确保SVG视图适应变化
      const svg = document.getElementById('mandala-svg');
      if (svg) {
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      }
    }
    
    // Adjust canvas size when window resizes
    window.addEventListener('resize', adjustCanvasSize);
  }
  
  // Function to create a default mandala
  function createDefaultMandala(svg) {
    console.log("创建默认曼陀罗花图案");
    
    // Set SVG attributes
    svg.setAttribute('viewBox', '0 0 1000 1000');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('id', 'mandala-group');
    group.setAttribute('transform', 'scale(0.9) translate(50, 50)');
    svg.appendChild(group);
    
    // Create a simple flower shape
    const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    center.setAttribute('cx', '500');
    center.setAttribute('cy', '500');
    center.setAttribute('r', '50');
    center.setAttribute('class', 'mandala-section');
    center.setAttribute('data-index', '0');
    group.appendChild(center);
    
    // Create petals
    const petalCount = 8;
    for (let i = 0; i < petalCount; i++) {
      const angle = (i * 360 / petalCount) * Math.PI / 180;
      const x1 = 500 + 50 * Math.cos(angle);
      const y1 = 500 + 50 * Math.sin(angle);
      const x2 = 500 + 200 * Math.cos(angle);
      const y2 = 500 + 200 * Math.sin(angle);
      
      const nextAngle = ((i + 1) * 360 / petalCount) * Math.PI / 180;
      const nx1 = 500 + 50 * Math.cos(nextAngle);
      const ny1 = 500 + 50 * Math.sin(nextAngle);
      const nx2 = 500 + 200 * Math.cos(nextAngle);
      const ny2 = 500 + 200 * Math.sin(nextAngle);
      
      const petal = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      petal.setAttribute('d', `M${x1},${y1} L${x2},${y2} A200,200 0 0,1 ${nx2},${ny2} L${nx1},${ny1} A50,50 0 0,0 ${x1},${y1} Z`);
      petal.setAttribute('class', 'mandala-section');
      petal.setAttribute('data-index', i + 1);
      group.appendChild(petal);
    }
    
    // Add click event
    const sections = svg.querySelectorAll('.mandala-section');
    sections.forEach(section => {
      section.addEventListener('click', function() {
        this.style.fill = document.querySelector('.color-btn.active')?.dataset.color || '#1E40AF';
      });
    });
    
    // Adjust canvas size
    const canvasContainer = document.getElementById('canvas-container');
    const main = document.querySelector('main');
    const mainWidth = main.clientWidth - 100;
    const mainHeight = main.clientHeight - 30;
    
    const size = Math.min(mainWidth, mainHeight);
    canvasContainer.style.width = `${size}px`;
    canvasContainer.style.height = `${size}px`;
    canvasContainer.style.padding = '20px';
  }
  