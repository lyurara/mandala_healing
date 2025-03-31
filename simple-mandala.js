// 如果主要的曼陀罗花图案未加载，使用这个简单的图案
if (typeof window.MANDALA_PATTERNS === 'undefined') {
  window.MANDALA_PATTERNS = [{
    name: "Simple Flower",
    complexity: "simple",
    sections: [
      // 中心圆
      { path: "M500,500 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0" },
      
      // 8个花瓣
      ...[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
        const rad = angle * Math.PI / 180;
        const x1 = 500 + 50 * Math.cos(rad);
        const y1 = 500 + 50 * Math.sin(rad);
        const x2 = 500 + 200 * Math.cos(rad);
        const y2 = 500 + 200 * Math.sin(rad);
        
        const nextRad = (angle + 45) * Math.PI / 180;
        const nx1 = 500 + 50 * Math.cos(nextRad);
        const ny1 = 500 + 50 * Math.sin(nextRad);
        const nx2 = 500 + 200 * Math.cos(nextRad);
        const ny2 = 500 + 200 * Math.sin(nextRad);
        
        return {
          path: `M${x1},${y1} L${x2},${y2} A200,200 0 0,1 ${nx2},${ny2} L${nx1},${ny1} A50,50 0 0,0 ${x1},${y1} Z`
        };
      }),
      
      // 外圈
      { path: "M500,500 m-300,0 a300,300 0 1,0 600,0 a300,300 0 1,0 -600,0" }
    ]
  }];
  
  console.log("已加载备用曼陀罗花图案");
} 