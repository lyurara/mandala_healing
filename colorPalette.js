function initColorPalette(appState) {
    const colorPalette = document.getElementById('color-palette');
    
    // 首先检查是否已经有容器，如果没有则创建
    let colorPaletteContainer = document.getElementById('color-palette-container');
    if (!colorPaletteContainer) {
      // 获取原调色盘的父元素
      const paletteParent = colorPalette.parentElement;
      
      // 创建新的容器元素
      colorPaletteContainer = document.createElement('div');
      colorPaletteContainer.id = 'color-palette-container';
      
      // 将调色盘放入新容器
      paletteParent.insertBefore(colorPaletteContainer, colorPalette);
      colorPaletteContainer.appendChild(colorPalette);
      
      // 创建滚动指示器容器
      const scrollIndicatorContainer = document.createElement('div');
      scrollIndicatorContainer.className = 'scroll-indicator-container';
      
      // 创建滚动指示器
      const scrollIndicator = document.createElement('div');
      scrollIndicator.className = 'scroll-indicator';
      
      // 添加到DOM
      scrollIndicatorContainer.appendChild(scrollIndicator);
      colorPaletteContainer.appendChild(scrollIndicatorContainer);
    }
    
    // 清空现有调色板
    colorPalette.innerHTML = '';
    
    // 定义颜色组结构 - 每组恰好5或10种颜色
    const colorGroups = [
      {
        name: "红色系",
        colors: [
          { hex: '#FF0000', name: '正红色' },
          { hex: '#FF3333', name: '亮红色' },
          { hex: '#CC0000', name: '深红色' },
          { hex: '#990000', name: '暗红色' },
          { hex: '#800000', name: '栗色' }
        ]
      },
      {
        name: "酒红色系",
        colors: [
          { hex: '#B22222', name: '火砖色' },
          { hex: '#DC143C', name: '猩红色' },
          { hex: '#C71585', name: '中洋红色' },
          { hex: '#7B241C', name: '深枣红色' },
          { hex: '#A52A2A', name: '棕色' }
        ]
      },
      {
        name: "橙色系",
        colors: [
          { hex: '#FF8000', name: '橙色' },
          { hex: '#FF9933', name: '亮橙色' },
          { hex: '#FF6600', name: '深橙色' },
          { hex: '#FF4500', name: '红橙色' },
          { hex: '#FF7F50', name: '珊瑚色' }
        ]
      },
      {
        name: "浅橙色系",
        colors: [
          { hex: '#FFA07A', name: '浅鲑鱼色' },
          { hex: '#FA8072', name: '鲑鱼色' },
          { hex: '#E9967A', name: '深鲑鱼色' },
          { hex: '#F08080', name: '浅珊瑚色' },
          { hex: '#FFB6C1', name: '浅粉红色' }
        ]
      },
      {
        name: "黄色系",
        colors: [
          { hex: '#FFFF00', name: '黄色' },
          { hex: '#FFFF66', name: '亮黄色' },
          { hex: '#FFCC00', name: '金黄色' },
          { hex: '#FFD700', name: '金色' },
          { hex: '#BDB76B', name: '暗黄褐色' }
        ]
      },
      {
        name: "浅黄色系",
        colors: [
          { hex: '#F0E68C', name: '卡其色' },
          { hex: '#EEE8AA', name: '苍黄色' },
          { hex: '#FAFAD2', name: '浅金菊黄' },
          { hex: '#FFFACD', name: '柠檬绸色' },
          { hex: '#FFEFD5', name: '番木瓜色' }
        ]
      },
      {
        name: "绿色系",
        colors: [
          { hex: '#00FF00', name: '绿色' },
          { hex: '#66FF66', name: '亮绿色' },
          { hex: '#00CC00', name: '深绿色' },
          { hex: '#008000', name: '暗绿色' },
          { hex: '#006400', name: '深森林绿' }
        ]
      },
      {
        name: "浅绿色系",
        colors: [
          { hex: '#228B22', name: '森林绿' },
          { hex: '#32CD32', name: '酸橙绿' },
          { hex: '#90EE90', name: '淡绿色' },
          { hex: '#98FB98', name: '淡绿色' },
          { hex: '#7CFC00', name: '草坪绿' }
        ]
      },
      {
        name: "青色系",
        colors: [
          { hex: '#00FFFF', name: '青色' },
          { hex: '#66FFFF', name: '亮青色' },
          { hex: '#00CCCC', name: '深青色' },
          { hex: '#20B2AA', name: '浅海绿' },
          { hex: '#008080', name: '水鸭色' }
        ]
      },
      {
        name: "蓝绿色系",
        colors: [
          { hex: '#40E0D0', name: '绿松石色' },
          { hex: '#48D1CC', name: '中绿松石色' },
          { hex: '#00CED1', name: '深绿松石色' },
          { hex: '#5F9EA0', name: '军校蓝' },
          { hex: '#2F4F4F', name: '深石板灰' }
        ]
      },
      {
        name: "蓝色系",
        colors: [
          { hex: '#0000FF', name: '蓝色' },
          { hex: '#3333FF', name: '亮蓝色' },
          { hex: '#0000CC', name: '深蓝色' },
          { hex: '#000080', name: '海军蓝' },
          { hex: '#191970', name: '午夜蓝' }
        ]
      },
      {
        name: "浅蓝色系",
        colors: [
          { hex: '#1E90FF', name: '道奇蓝' },
          { hex: '#4169E1', name: '皇家蓝' },
          { hex: '#6495ED', name: '矢车菊蓝' },
          { hex: '#87CEEB', name: '天蓝色' },
          { hex: '#B0E0E6', name: '粉蓝色' }
        ]
      },
      {
        name: "紫色系",
        colors: [
          { hex: '#800080', name: '紫色' },
          { hex: '#9933FF', name: '亮紫色' },
          { hex: '#660066', name: '深紫色' },
          { hex: '#4B0082', name: '靛青色' },
          { hex: '#8A2BE2', name: '紫罗兰色' }
        ]
      },
      {
        name: "浅紫色系",
        colors: [
          { hex: '#9370DB', name: '中紫色' },
          { hex: '#BA55D3', name: '中兰花紫' },
          { hex: '#DDA0DD', name: '李子色' },
          { hex: '#EE82EE', name: '紫罗兰色' },
          { hex: '#C39BD3', name: '薰衣草色' }
        ]
      },
      {
        name: "粉色系",
        colors: [
          { hex: '#FF00FF', name: '洋红色' },
          { hex: '#FF66FF', name: '亮粉色' },
          { hex: '#CC00CC', name: '深粉色' },
          { hex: '#FF1493', name: '深粉红色' },
          { hex: '#FF69B4', name: '热粉红色' }
        ]
      },
      {
        name: "棕色系",
        colors: [
          { hex: '#8B4513', name: '马鞍棕色' },
          { hex: '#D2691E', name: '巧克力色' },
          { hex: '#CD853F', name: '秘鲁色' },
          { hex: '#A0522D', name: '赭色' },
          { hex: '#5D4037', name: '深褐色' }
        ]
      },
      {
        name: "米色系",
        colors: [
          { hex: '#FFF8DC', name: '玉米丝色' },
          { hex: '#FAF0E6', name: '亚麻色' },
          { hex: '#FAEBD7', name: '古董白' },
          { hex: '#F5F5DC', name: '米色' },
          { hex: '#FFE4C4', name: '陶坯黄' }
        ]
      },
      {
        name: "灰黑系",
        colors: [
          { hex: '#FFFFFF', name: '白色' },
          { hex: '#F5F5F5', name: '烟白色' },
          { hex: '#C0C0C0', name: '银色' },
          { hex: '#808080', name: '灰色' },
          { hex: '#000000', name: '黑色' }
        ]
      }
    ];

    // 创建并添加颜色组和按钮
    colorGroups.forEach((group, groupIndex) => {
      // 添加组标题
      if (groupIndex > 0) {
        const separator = document.createElement('div');
        separator.className = 'color-group-separator';
        colorPalette.appendChild(separator);
      }
      
      const groupTitle = document.createElement('div');
      groupTitle.className = 'color-group-title';
      groupTitle.textContent = group.name;
      colorPalette.appendChild(groupTitle);

      // 添加组内的颜色按钮
      group.colors.forEach(color => {
        const colorButton = document.createElement('button');
        colorButton.className = 'color-btn';
        colorButton.style.backgroundColor = color.hex;
        colorButton.setAttribute('aria-label', `选择${color.name}`);
        colorButton.dataset.color = color.hex;
        
        // 设置默认活动颜色
        if (color.hex === appState.currentColor) {
          colorButton.classList.add('active');
        }
        
        colorButton.addEventListener('click', () => {
          // 移除所有按钮的活动类
          document.querySelectorAll('.color-btn').forEach(btn => {
            btn.classList.remove('active');
          });
          
          // 为点击的按钮添加活动类
          colorButton.classList.add('active');
          
          // 更新应用状态中的当前颜色
          appState.currentColor = color.hex;
        });
        
        colorPalette.appendChild(colorButton);
      });
    });

    // 优化调色板样式
    colorPalette.style.gridTemplateColumns = 'repeat(5, 1fr)';
    colorPalette.style.maxHeight = '80vh';
    colorPalette.style.gap = '4px';
    colorPalette.style.padding = '4px';
    colorPalette.style.overflowY = 'auto';
    colorPalette.style.scrollBehavior = 'smooth';

    // 添加滚动提示
    updateScrollIndicatorVisibility();
    colorPalette.addEventListener('scroll', updateScrollIndicatorVisibility);
    window.addEventListener('resize', updateScrollIndicatorVisibility);
  }
  
  // 控制滚动指示器显示/隐藏的函数
  function updateScrollIndicatorVisibility() {
    const colorPalette = document.getElementById('color-palette');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (colorPalette && scrollIndicator) {
      const hasOverflow = colorPalette.scrollHeight > colorPalette.clientHeight;
      
      // 获取滚动指示器容器
      const container = document.querySelector('.scroll-indicator-container');
      
      if (hasOverflow) {
        // 更新滚动指示器位置和大小
        const scrollRatio = colorPalette.scrollTop / (colorPalette.scrollHeight - colorPalette.clientHeight);
        const indicatorHeight = Math.max(30, (colorPalette.clientHeight / colorPalette.scrollHeight) * colorPalette.clientHeight);
        const maxTop = colorPalette.clientHeight - indicatorHeight;
        
        scrollIndicator.style.height = `${indicatorHeight}px`;
        scrollIndicator.style.top = `${scrollRatio * maxTop}px`;
        
        // 显示滚动指示器
        container.style.opacity = '1';
      } else {
        // 隐藏滚动指示器
        container.style.opacity = '0';
      }
    }
  }
  