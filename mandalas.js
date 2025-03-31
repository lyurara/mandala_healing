// A collection of mandala patterns with individually colorable sections
window.MANDALA_PATTERNS = [
    {
      name: "Flower Mandala",
      complexity: "simple",
      sections: [
        // Center
        { path: "M500,500 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0" },
        
        // Inner petals - 8 sections
        ...[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const rad = angle * Math.PI / 180;
          const x1 = 500 + 40 * Math.cos(rad);
          const y1 = 500 + 40 * Math.sin(rad);
          const x2 = 500 + 100 * Math.cos(rad);
          const y2 = 500 + 100 * Math.sin(rad);
          
          const nextRad = (angle + 45) * Math.PI / 180;
          const nx1 = 500 + 40 * Math.cos(nextRad);
          const ny1 = 500 + 40 * Math.sin(nextRad);
          const nx2 = 500 + 100 * Math.cos(nextRad);
          const ny2 = 500 + 100 * Math.sin(nextRad);
          
          return {
            path: `M${x1},${y1} A40,40 0 0,1 ${nx1},${ny1} L${nx2},${ny2} A100,100 0 0,0 ${x2},${y2} Z`
          };
        }),
        
        // Middle petals - 16 sections
        ...[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
          const rad = angle * Math.PI / 180;
          const x1 = 500 + 100 * Math.cos(rad);
          const y1 = 500 + 100 * Math.sin(rad);
          const x2 = 500 + 200 * Math.cos(rad);
          const y2 = 500 + 200 * Math.sin(rad);
          
          const nextRad = (angle + 22.5) * Math.PI / 180;
          const nx1 = 500 + 100 * Math.cos(nextRad);
          const ny1 = 500 + 100 * Math.sin(nextRad);
          const nx2 = 500 + 200 * Math.cos(nextRad);
          const ny2 = 500 + 200 * Math.sin(nextRad);
          
          return {
            path: `M${x1},${y1} A100,100 0 0,1 ${nx1},${ny1} L${nx2},${ny2} A200,200 0 0,0 ${x2},${y2} Z`
          };
        }),
        
        // Outer petals - 16 sections with curves
        ...[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
          const rad = angle * Math.PI / 180;
          const x1 = 500 + 200 * Math.cos(rad);
          const y1 = 500 + 200 * Math.sin(rad);
          
          const ctrlRad1 = (angle + 7) * Math.PI / 180;
          const cx1 = 500 + 300 * Math.cos(ctrlRad1);
          const cy1 = 500 + 300 * Math.sin(ctrlRad1);
          
          const tipRad = (angle + 11.25) * Math.PI / 180;
          const tipX = 500 + 450 * Math.cos(tipRad);
          const tipY = 500 + 450 * Math.sin(tipRad);
          
          const ctrlRad2 = (angle + 15.5) * Math.PI / 180;
          const cx2 = 500 + 300 * Math.cos(ctrlRad2);
          const cy2 = 500 + 300 * Math.sin(ctrlRad2);
          
          const nextRad = (angle + 22.5) * Math.PI / 180;
          const nx1 = 500 + 200 * Math.cos(nextRad);
          const ny1 = 500 + 200 * Math.sin(nextRad);
          
          return {
            path: `M${x1},${y1} Q${cx1},${cy1} ${tipX},${tipY} Q${cx2},${cy2} ${nx1},${ny1} A200,200 0 0,0 ${x1},${y1} Z`
          };
        })
      ]
    },
    {
      name: "Geometric Star",
      complexity: "medium",
      sections: [
        // Center
        { path: "M500,500 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0" },
        
        // Inner star - 8 triangles
        ...[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const rad = angle * Math.PI / 180;
          const innerX = 500 + 40 * Math.cos(rad);
          const innerY = 500 + 40 * Math.sin(rad);
          
          const outerRad = (angle + 22.5) * Math.PI / 180;
          const outerX = 500 + 150 * Math.cos(outerRad);
          const outerY = 500 + 150 * Math.sin(outerRad);
          
          const nextRad = (angle + 45) * Math.PI / 180;
          const nextInnerX = 500 + 40 * Math.cos(nextRad);
          const nextInnerY = 500 + 40 * Math.sin(nextRad);
          
          return {
            path: `M${innerX},${innerY} L${outerX},${outerY} L${nextInnerX},${nextInnerY} A40,40 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // Middle layer - 16 diamond sections
        ...[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
          const innerRad = angle * Math.PI / 180;
          const innerX = 500 + 150 * Math.cos(innerRad);
          const innerY = 500 + 150 * Math.sin(innerRad);
          
          const midRad = (angle + 11.25) * Math.PI / 180;
          const midX = 500 + 250 * Math.cos(midRad);
          const midY = 500 + 250 * Math.sin(midRad);
          
          const nextInnerRad = (angle + 22.5) * Math.PI / 180;
          const nextInnerX = 500 + 150 * Math.cos(nextInnerRad);
          const nextInnerY = 500 + 150 * Math.sin(nextInnerRad);
          
          return {
            path: `M${innerX},${innerY} L${midX},${midY} L${nextInnerX},${nextInnerY} L500,500 Z`
          };
        }),
        
        // Outer layer - 16 triangular sections
        ...[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
          const innerRad = angle * Math.PI / 180;
          const innerX = 500 + 250 * Math.cos(innerRad);
          const innerY = 500 + 250 * Math.sin(innerRad);
          
          const outerRad = (angle + 11.25) * Math.PI / 180;
          const outerX = 500 + 480 * Math.cos(outerRad);
          const outerY = 500 + 480 * Math.sin(outerRad);
          
          const nextInnerRad = (angle + 22.5) * Math.PI / 180;
          const nextInnerX = 500 + 250 * Math.cos(nextInnerRad);
          const nextInnerY = 500 + 250 * Math.sin(nextInnerRad);
          
          return {
            path: `M${innerX},${innerY} L${outerX},${outerY} L${nextInnerX},${nextInnerY} Z`
          };
        })
      ]
    },
    {
      name: "Lotus Mandala",
      complexity: "complex",
      sections: [
        // Center circle
        { path: "M500,500 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0" },
        
        // Inner petals - 8 sections
        ...[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const rad = angle * Math.PI / 180;
          const startX = 500 + 50 * Math.cos(rad);
          const startY = 500 + 50 * Math.sin(rad);
          
          const ctrlX1 = 500 + 70 * Math.cos(rad - 0.3);
          const ctrlY1 = 500 + 70 * Math.sin(rad - 0.3);
          
          const petalTipX = 500 + 150 * Math.cos(rad);
          const petalTipY = 500 + 150 * Math.sin(rad);
          
          const ctrlX2 = 500 + 70 * Math.cos(rad + 0.3);
          const ctrlY2 = 500 + 70 * Math.sin(rad + 0.3);
          
          const nextRad = (angle + 45) * Math.PI / 180;
          const endX = 500 + 50 * Math.cos(nextRad);
          const endY = 500 + 50 * Math.sin(nextRad);
          
          return {
            path: `M${startX},${startY} C${ctrlX1},${ctrlY1} ${petalTipX},${petalTipY} ${ctrlX2},${ctrlY2} S${endX},${endY} ${endX},${endY} A50,50 0 0,0 ${startX},${startY} Z`
          };
        }),
        
        // Middle lotus petals - 16 sections
        ...[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
          const rad = angle * Math.PI / 180;
          const startX = 500 + 150 * Math.cos(rad);
          const startY = 500 + 150 * Math.sin(rad);
          
          const ctrlX1 = 500 + 200 * Math.cos(rad - 0.2);
          const ctrlY1 = 500 + 200 * Math.sin(rad - 0.2);
          
          const petalTipX = 500 + 250 * Math.cos(rad);
          const petalTipY = 500 + 250 * Math.sin(rad);
          
          const ctrlX2 = 500 + 200 * Math.cos(rad + 0.2);
          const ctrlY2 = 500 + 200 * Math.sin(rad + 0.2);
          
          const nextRad = (angle + 22.5) * Math.PI / 180;
          const endX = 500 + 150 * Math.cos(nextRad);
          const endY = 500 + 150 * Math.sin(nextRad);
          
          return {
            path: `M${startX},${startY} C${ctrlX1},${ctrlY1} ${petalTipX},${petalTipY} ${ctrlX2},${ctrlY2} S${endX},${endY} ${endX},${endY} A150,150 0 0,0 ${startX},${startY} Z`
          };
        }),
        
        // Outer lotus petals - 16 sections
        ...[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
          const rad = angle * Math.PI / 180;
          const startX = 500 + 250 * Math.cos(rad);
          const startY = 500 + 250 * Math.sin(rad);
          
          const ctrlX1 = 500 + 320 * Math.cos(rad - 0.15);
          const ctrlY1 = 500 + 320 * Math.sin(rad - 0.15);
          
          const petalTipX = 500 + 380 * Math.cos(rad);
          const petalTipY = 500 + 380 * Math.sin(rad);
          
          const ctrlX2 = 500 + 320 * Math.cos(rad + 0.15);
          const ctrlY2 = 500 + 320 * Math.sin(rad + 0.15);
          
          const nextRad = (angle + 22.5) * Math.PI / 180;
          const endX = 500 + 250 * Math.cos(nextRad);
          const endY = 500 + 250 * Math.sin(nextRad);
          
          return {
            path: `M${startX},${startY} C${ctrlX1},${ctrlY1} ${petalTipX},${petalTipY} ${ctrlX2},${ctrlY2} S${endX},${endY} ${endX},${endY} A250,250 0 0,0 ${startX},${startY} Z`
          };
        }),
        
        // Decorative outer elements - 8 sections
        ...[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const rad = angle * Math.PI / 180;
          const startX = 500 + 380 * Math.cos(rad);
          const startY = 500 + 380 * Math.sin(rad);
          
          const ctrlX1 = 500 + 430 * Math.cos(rad - 0.3);
          const ctrlY1 = 500 + 430 * Math.sin(rad - 0.3);
          
          const tipX = 500 + 470 * Math.cos(rad);
          const tipY = 500 + 470 * Math.sin(rad);
          
          const ctrlX2 = 500 + 430 * Math.cos(rad + 0.3);
          const ctrlY2 = 500 + 430 * Math.sin(rad + 0.3);
          
          const nextRad = (angle + 45) * Math.PI / 180;
          const endX = 500 + 380 * Math.cos(nextRad);
          const endY = 500 + 380 * Math.sin(nextRad);
          
          return {
            path: `M${startX},${startY} C${ctrlX1},${ctrlY1} ${tipX},${tipY} ${ctrlX2},${ctrlY2} S${endX},${endY} ${endX},${endY} A380,380 0 0,0 ${startX},${startY} Z`
          };
        })
      ]
    },
    {
      name: "Cosmic Wheel",
      complexity: "complex",
      sections: [
        // Center hub
        { path: "M500,500 m-60,0 a60,60 0 1,0 120,0 a60,60 0 1,0 -120,0" },
        
        // Inner spokes - 12 sections
        ...[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => {
          const rad = angle * Math.PI / 180;
          const x1 = 500 + 60 * Math.cos(rad);
          const y1 = 500 + 60 * Math.sin(rad);
          
          const x2 = 500 + 180 * Math.cos(rad);
          const y2 = 500 + 180 * Math.sin(rad);
          
          const nextRad = (angle + 30) * Math.PI / 180;
          const nx1 = 500 + 60 * Math.cos(nextRad);
          const ny1 = 500 + 60 * Math.sin(nextRad);
          
          const nx2 = 500 + 180 * Math.cos(nextRad);
          const ny2 = 500 + 180 * Math.sin(nextRad);
          
          return {
            path: `M${x1},${y1} A60,60 0 0,1 ${nx1},${ny1} L${nx2},${ny2} A180,180 0 0,0 ${x2},${y2} Z`
          };
        }),
        
        // Middle ring - 24 sections
        ...[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map(angle => {
          const rad = angle * Math.PI / 180;
          const x1 = 500 + 180 * Math.cos(rad);
          const y1 = 500 + 180 * Math.sin(rad);
          
          const x2 = 500 + 270 * Math.cos(rad);
          const y2 = 500 + 270 * Math.sin(rad);
          
          const nextRad = (angle + 15) * Math.PI / 180;
          const nx1 = 500 + 180 * Math.cos(nextRad);
          const ny1 = 500 + 180 * Math.sin(nextRad);
          
          const nx2 = 500 + 270 * Math.cos(nextRad);
          const ny2 = 500 + 270 * Math.sin(nextRad);
          
          return {
            path: `M${x1},${y1} A180,180 0 0,1 ${nx1},${ny1} L${nx2},${ny2} A270,270 0 0,0 ${x2},${y2} Z`
          };
        }),
        
        // Outer pointed sections - 24 sections
        ...[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345].map(angle => {
          const rad = angle * Math.PI / 180;
          const x1 = 500 + 270 * Math.cos(rad);
          const y1 = 500 + 270 * Math.sin(rad);
          
          const tipRad = (angle + 7.5) * Math.PI / 180;
          const tipX = 500 + 480 * Math.cos(tipRad);
          const tipY = 500 + 480 * Math.sin(tipRad);
          
          const nextRad = (angle + 15) * Math.PI / 180;
          const nx1 = 500 + 270 * Math.cos(nextRad);
          const ny1 = 500 + 270 * Math.sin(nextRad);
          
          return {
            path: `M${x1},${y1} L${tipX},${tipY} L${nx1},${ny1} A270,270 0 0,0 ${x1},${y1} Z`
          };
        })
      ]
    },
    {
      name: "Simple Flower",
      complexity: "simple",
      sections: [
        // Center
        { path: "M500,500 m-60,0 a60,60 0 1,0 120,0 a60,60 0 1,0 -120,0" },
        
        // Simple petals - 6 sections
        ...[0, 60, 120, 180, 240, 300].map(angle => {
          const rad = angle * Math.PI / 180;
          
          const innerX = 500 + 60 * Math.cos(rad);
          const innerY = 500 + 60 * Math.sin(rad);
          
          const ctrlX1 = 500 + 150 * Math.cos(rad - 0.4);
          const ctrlY1 = 500 + 150 * Math.sin(rad - 0.4);
          
          const tipX = 500 + 350 * Math.cos(rad);
          const tipY = 500 + 350 * Math.sin(rad);
          
          const ctrlX2 = 500 + 150 * Math.cos(rad + 0.4);
          const ctrlY2 = 500 + 150 * Math.sin(rad + 0.4);
          
          const nextRad = (angle + 60) * Math.PI / 180;
          const nextInnerX = 500 + 60 * Math.cos(nextRad);
          const nextInnerY = 500 + 60 * Math.sin(nextRad);
          
          return {
            path: `M${innerX},${innerY} C${ctrlX1},${ctrlY1} ${tipX},${tipY} ${ctrlX2},${ctrlY2} S${nextInnerX},${nextInnerY} ${nextInnerX},${nextInnerY} A60,60 0 0,0 ${innerX},${innerY} Z`
          };
        })
      ]
    },
    {
      name: "Complex Mandala",
      complexity: "complex",
      sections: [
        // Center circle
        { path: "M500,500 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0" },
        
        // First ring - 8 sections
        ...[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const rad = angle * Math.PI / 180;
          const x1 = 500 + 50 * Math.cos(rad);
          const y1 = 500 + 50 * Math.sin(rad);
          const x2 = 500 + 120 * Math.cos(rad);
          const y2 = 500 + 120 * Math.sin(rad);
          
          const nextRad = (angle + 45) * Math.PI / 180;
          const nx1 = 500 + 50 * Math.cos(nextRad);
          const ny1 = 500 + 50 * Math.sin(nextRad);
          const nx2 = 500 + 120 * Math.cos(nextRad);
          const ny2 = 500 + 120 * Math.sin(nextRad);
          
          return {
            path: `M${x1},${y1} A50,50 0 0,1 ${nx1},${ny1} L${nx2},${ny2} A120,120 0 0,0 ${x2},${y2} Z`
          };
        }),
        
        // Second ring - 16 sections
        ...[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
          const rad = angle * Math.PI / 180;
          const x1 = 500 + 120 * Math.cos(rad);
          const y1 = 500 + 120 * Math.sin(rad);
          const x2 = 500 + 180 * Math.cos(rad);
          const y2 = 500 + 180 * Math.sin(rad);
          
          const nextRad = (angle + 22.5) * Math.PI / 180;
          const nx1 = 500 + 120 * Math.cos(nextRad);
          const ny1 = 500 + 120 * Math.sin(nextRad);
          const nx2 = 500 + 180 * Math.cos(nextRad);
          const ny2 = 500 + 180 * Math.sin(nextRad);
          
          return {
            path: `M${x1},${y1} A120,120 0 0,1 ${nx1},${ny1} L${nx2},${ny2} A180,180 0 0,0 ${x2},${y2} Z`
          };
        }),
        
        // Third ring - 32 sections
        ...[...Array(32)].map((_, i) => {
          const angle = i * (360 / 32);
          const rad = angle * Math.PI / 180;
          const x1 = 500 + 180 * Math.cos(rad);
          const y1 = 500 + 180 * Math.sin(rad);
          const x2 = 500 + 240 * Math.cos(rad);
          const y2 = 500 + 240 * Math.sin(rad);
          
          const nextRad = (angle + (360 / 32)) * Math.PI / 180;
          const nx1 = 500 + 180 * Math.cos(nextRad);
          const ny1 = 500 + 180 * Math.sin(nextRad);
          const nx2 = 500 + 240 * Math.cos(nextRad);
          const ny2 = 500 + 240 * Math.sin(nextRad);
          
          return {
            path: `M${x1},${y1} A180,180 0 0,1 ${nx1},${ny1} L${nx2},${ny2} A240,240 0 0,0 ${x2},${y2} Z`
          };
        }),
        
        // Outer petals - 16 sections
        ...[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
          const rad = angle * Math.PI / 180;
          const startX = 500 + 240 * Math.cos(rad);
          const startY = 500 + 240 * Math.sin(rad);
          
          const ctrlX1 = 500 + 320 * Math.cos(rad - 0.2);
          const ctrlY1 = 500 + 320 * Math.sin(rad - 0.2);
          
          const petalTipX = 500 + 480 * Math.cos(rad);
          const petalTipY = 500 + 480 * Math.sin(rad);
          
          const ctrlX2 = 500 + 320 * Math.cos(rad + 0.2);
          const ctrlY2 = 500 + 320 * Math.sin(rad + 0.2);
          
          const nextRad = (angle + 22.5) * Math.PI / 180;
          const endX = 500 + 240 * Math.cos(nextRad);
          const endY = 500 + 240 * Math.sin(nextRad);
          
          return {
            path: `M${startX},${startY} C${ctrlX1},${ctrlY1} ${petalTipX},${petalTipY} ${ctrlX2},${ctrlY2} S${endX},${endY} ${endX},${endY} A240,240 0 0,0 ${startX},${startY} Z`
          };
        })
      ]
    },
    {
      name: "Medium Star",
      complexity: "medium",
      sections: [
        // Center
        { path: "M500,500 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0" },
        
        // Inner star points - 8 sections
        ...[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const innerRad = angle * Math.PI / 180;
          const innerX = 500 + 50 * Math.cos(innerRad);
          const innerY = 500 + 50 * Math.sin(innerRad);
          
          const tipRad = (angle + 22.5) * Math.PI / 180;
          const tipX = 500 + 180 * Math.cos(tipRad);
          const tipY = 500 + 180 * Math.sin(tipRad);
          
          const nextInnerRad = (angle + 45) * Math.PI / 180;
          const nextInnerX = 500 + 50 * Math.cos(nextInnerRad);
          const nextInnerY = 500 + 50 * Math.sin(nextInnerRad);
          
          return {
            path: `M${innerX},${innerY} L${tipX},${tipY} L${nextInnerX},${nextInnerY} A50,50 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // Middle ring - 16 sections
        ...[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
          const rad = angle * Math.PI / 180;
          const x1 = 500 + 180 * Math.cos(rad);
          const y1 = 500 + 180 * Math.sin(rad);
          const x2 = 500 + 280 * Math.cos(rad);
          const y2 = 500 + 280 * Math.sin(rad);
          
          const nextRad = (angle + 22.5) * Math.PI / 180;
          const nx1 = 500 + 180 * Math.cos(nextRad);
          const ny1 = 500 + 180 * Math.sin(nextRad);
          const nx2 = 500 + 280 * Math.cos(nextRad);
          const ny2 = 500 + 280 * Math.sin(nextRad);
          
          return {
            path: `M${x1},${y1} A180,180 0 0,1 ${nx1},${ny1} L${nx2},${ny2} A280,280 0 0,0 ${x2},${y2} Z`
          };
        }),
        
        // Outer star points - 16 sections
        ...[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
          const innerRad = angle * Math.PI / 180;
          const innerX = 500 + 280 * Math.cos(innerRad);
          const innerY = 500 + 280 * Math.sin(innerRad);
          
          const tipRad = (angle + 11.25) * Math.PI / 180;
          const tipX = 500 + 480 * Math.cos(tipRad);
          const tipY = 500 + 480 * Math.sin(tipRad);
          
          const nextInnerRad = (angle + 22.5) * Math.PI / 180;
          const nextInnerX = 500 + 280 * Math.cos(nextInnerRad);
          const nextInnerY = 500 + 280 * Math.sin(nextInnerRad);
          
          return {
            path: `M${innerX},${innerY} L${tipX},${tipY} L${nextInnerX},${nextInnerY} A280,280 0 0,0 ${innerX},${innerY} Z`
          };
        })
      ]
    },
    // New Complex Mandala inspired by mondaymandala.com
    {
      name: "Sacred Geometry",
      complexity: "complex",
      sections: [
        // Center circle
        { path: "M500,500 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0" },
        
        // First layer - 6 petals
        ...[0, 60, 120, 180, 240, 300].map(angle => {
          const rad = angle * Math.PI / 180;
          const startX = 500 + 40 * Math.cos(rad);
          const startY = 500 + 40 * Math.sin(rad);
          
          const ctrlX1 = 500 + 60 * Math.cos(rad - 0.4);
          const ctrlY1 = 500 + 60 * Math.sin(rad - 0.4);
          
          const petalTipX = 500 + 100 * Math.cos(rad);
          const petalTipY = 500 + 100 * Math.sin(rad);
          
          const ctrlX2 = 500 + 60 * Math.cos(rad + 0.4);
          const ctrlY2 = 500 + 60 * Math.sin(rad + 0.4);
          
          const nextRad = (angle + 60) * Math.PI / 180;
          const endX = 500 + 40 * Math.cos(nextRad);
          const endY = 500 + 40 * Math.sin(nextRad);
          
          return {
            path: `M${startX},${startY} C${ctrlX1},${ctrlY1} ${petalTipX},${petalTipY} ${ctrlX2},${ctrlY2} S${endX},${endY} ${endX},${endY} A40,40 0 0,0 ${startX},${startY} Z`
          };
        }),
        
        // Second layer - 12 petals
        ...[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => {
          const rad = angle * Math.PI / 180;
          const startX = 500 + 100 * Math.cos(rad);
          const startY = 500 + 100 * Math.sin(rad);
          
          const ctrlX1 = 500 + 130 * Math.cos(rad - 0.25);
          const ctrlY1 = 500 + 130 * Math.sin(rad - 0.25);
          
          const petalTipX = 500 + 160 * Math.cos(rad);
          const petalTipY = 500 + 160 * Math.sin(rad);
          
          const ctrlX2 = 500 + 130 * Math.cos(rad + 0.25);
          const ctrlY2 = 500 + 130 * Math.sin(rad + 0.25);
          
          const nextRad = (angle + 30) * Math.PI / 180;
          const endX = 500 + 100 * Math.cos(nextRad);
          const endY = 500 + 100 * Math.sin(nextRad);
          
          return {
            path: `M${startX},${startY} C${ctrlX1},${ctrlY1} ${petalTipX},${petalTipY} ${ctrlX2},${ctrlY2} S${endX},${endY} ${endX},${endY} A100,100 0 0,0 ${startX},${startY} Z`
          };
        }),
        
        // Third layer - 24 smaller sections
        ...[...Array(24)].map((_, i) => {
          const angle = i * 15;
          const rad = angle * Math.PI / 180;
          const x1 = 500 + 160 * Math.cos(rad);
          const y1 = 500 + 160 * Math.sin(rad);
          const x2 = 500 + 200 * Math.cos(rad);
          const y2 = 500 + 200 * Math.sin(rad);
          
          const nextRad = (angle + 15) * Math.PI / 180;
          const nx1 = 500 + 160 * Math.cos(nextRad);
          const ny1 = 500 + 160 * Math.sin(nextRad);
          const nx2 = 500 + 200 * Math.cos(nextRad);
          const ny2 = 500 + 200 * Math.sin(nextRad);
          
          return {
            path: `M${x1},${y1} A160,160 0 0,1 ${nx1},${ny1} L${nx2},${ny2} A200,200 0 0,0 ${x2},${y2} Z`
          };
        }),
        
        // Fourth layer - 24 petal shapes
        ...[...Array(24)].map((_, i) => {
          const angle = i * 15;
          const rad = angle * Math.PI / 180;
          const startX = 500 + 200 * Math.cos(rad);
          const startY = 500 + 200 * Math.sin(rad);
          
          const ctrlX1 = 500 + 250 * Math.cos(rad - 0.15);
          const ctrlY1 = 500 + 250 * Math.sin(rad - 0.15);
          
          const petalTipX = 500 + 280 * Math.cos(rad);
          const petalTipY = 500 + 280 * Math.sin(rad);
          
          const ctrlX2 = 500 + 250 * Math.cos(rad + 0.15);
          const ctrlY2 = 500 + 250 * Math.sin(rad + 0.15);
          
          const nextRad = (angle + 15) * Math.PI / 180;
          const endX = 500 + 200 * Math.cos(nextRad);
          const endY = 500 + 200 * Math.sin(nextRad);
          
          return {
            path: `M${startX},${startY} C${ctrlX1},${ctrlY1} ${petalTipX},${petalTipY} ${ctrlX2},${ctrlY2} S${endX},${endY} ${endX},${endY} A200,200 0 0,0 ${startX},${startY} Z`
          };
        }),
        
        // Fifth layer - 12 pointed sections
        ...[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => {
          const rad = angle * Math.PI / 180;
          const innerX = 500 + 280 * Math.cos(rad);
          const innerY = 500 + 280 * Math.sin(rad);
          
          const tipRad = (angle + 15) * Math.PI / 180;
          const tipX = 500 + 380 * Math.cos(tipRad);
          const tipY = 500 + 380 * Math.sin(tipRad);
          
          const nextRad = (angle + 30) * Math.PI / 180;
          const nextInnerX = 500 + 280 * Math.cos(nextRad);
          const nextInnerY = 500 + 280 * Math.sin(nextRad);
          
          return {
            path: `M${innerX},${innerY} L${tipX},${tipY} L${nextInnerX},${nextInnerY} A280,280 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // Sixth layer - 24 detailed outer sections
        ...[...Array(24)].map((_, i) => {
          const angle = i * 15;
          const rad = angle * Math.PI / 180;
          const innerX = 500 + 380 * Math.cos(rad);
          const innerY = 500 + 380 * Math.sin(rad);
          
          const ctrlX1 = 500 + 420 * Math.cos(rad - 0.1);
          const ctrlY1 = 500 + 420 * Math.sin(rad - 0.1);
          
          const tipX = 500 + 480 * Math.cos(rad);
          const tipY = 500 + 480 * Math.sin(rad);
          
          const ctrlX2 = 500 + 420 * Math.cos(rad + 0.1);
          const ctrlY2 = 500 + 420 * Math.sin(rad + 0.1);
          
          const nextRad = (angle + 15) * Math.PI / 180;
          const nextInnerX = 500 + 380 * Math.cos(nextRad);
          const nextInnerY = 500 + 380 * Math.sin(nextRad);
          
          return {
            path: `M${innerX},${innerY} C${ctrlX1},${ctrlY1} ${tipX},${tipY} ${ctrlX2},${ctrlY2} L${nextInnerX},${nextInnerY} A380,380 0 0,0 ${innerX},${innerY} Z`
          };
        })
      ]
    },
    // Another new complex mandala inspired by mondaymandala.com
    {
      name: "Intricate Lotus",
      complexity: "complex",
      sections: [
        // Center element
        { path: "M500,500 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" },
        
        // Inner lotus - 8 petals
        ...[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const rad = angle * Math.PI / 180;
          const startX = 500 + 30 * Math.cos(rad);
          const startY = 500 + 30 * Math.sin(rad);
          
          const ctrlX1 = 500 + 50 * Math.cos(rad - 0.3);
          const ctrlY1 = 500 + 50 * Math.sin(rad - 0.3);
          
          const petalTipX = 500 + 80 * Math.cos(rad);
          const petalTipY = 500 + 80 * Math.sin(rad);
          
          const ctrlX2 = 500 + 50 * Math.cos(rad + 0.3);
          const ctrlY2 = 500 + 50 * Math.sin(rad + 0.3);
          
          const nextRad = (angle + 45) * Math.PI / 180;
          const endX = 500 + 30 * Math.cos(nextRad);
          const endY = 500 + 30 * Math.sin(nextRad);
          
          return {
            path: `M${startX},${startY} C${ctrlX1},${ctrlY1} ${petalTipX},${petalTipY} ${ctrlX2},${ctrlY2} S${endX},${endY} ${endX},${endY} A30,30 0 0,0 ${startX},${startY} Z`
          };
        }),
        
        // Detailed ornaments around inner lotus - 16 small sections
        ...[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
          const rad = angle * Math.PI / 180;
          const x1 = 500 + 80 * Math.cos(rad);
          const y1 = 500 + 80 * Math.sin(rad);
          const x2 = 500 + 120 * Math.cos(rad);
          const y2 = 500 + 120 * Math.sin(rad);
          
          const nextRad = (angle + 22.5) * Math.PI / 180;
          const nx1 = 500 + 80 * Math.cos(nextRad);
          const ny1 = 500 + 80 * Math.sin(nextRad);
          const nx2 = 500 + 120 * Math.cos(nextRad);
          const ny2 = 500 + 120 * Math.sin(nextRad);
          
          return {
            path: `M${x1},${y1} A80,80 0 0,1 ${nx1},${ny1} L${nx2},${ny2} A120,120 0 0,0 ${x2},${y2} Z`
          };
        }),
        
        // Middle lotus - 8 larger petals
        ...[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const rad = angle * Math.PI / 180;
          const startX = 500 + 120 * Math.cos(rad);
          const startY = 500 + 120 * Math.sin(rad);
          
          const ctrlX1 = 500 + 160 * Math.cos(rad - 0.3);
          const ctrlY1 = 500 + 160 * Math.sin(rad - 0.3);
          
          const petalTipX = 500 + 200 * Math.cos(rad);
          const petalTipY = 500 + 200 * Math.sin(rad);
          
          const ctrlX2 = 500 + 160 * Math.cos(rad + 0.3);
          const ctrlY2 = 500 + 160 * Math.sin(rad + 0.3);
          
          const nextRad = (angle + 45) * Math.PI / 180;
          const endX = 500 + 120 * Math.cos(nextRad);
          const endY = 500 + 120 * Math.sin(nextRad);
          
          return {
            path: `M${startX},${startY} C${ctrlX1},${ctrlY1} ${petalTipX},${petalTipY} ${ctrlX2},${ctrlY2} S${endX},${endY} ${endX},${endY} A120,120 0 0,0 ${startX},${startY} Z`
          };
        }),
        
        // Decorative elements between middle lotus petals - 8 sections
        ...[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map(angle => {
          const rad = angle * Math.PI / 180;
          const startX = 500 + 120 * Math.cos(rad);
          const startY = 500 + 120 * Math.sin(rad);
          
          const tipX = 500 + 170 * Math.cos(rad);
          const tipY = 500 + 170 * Math.sin(rad);
          
          // Create a small triangular section
          return {
            path: `M${startX},${startY} L${tipX},${tipY} L${500},${500} Z`
          };
        }),
        
        // Outer lotus - 32 detailed petals
        ...[...Array(32)].map((_, i) => {
          const angle = i * (360 / 32);
          const rad = angle * Math.PI / 180;
          const startX = 500 + 200 * Math.cos(rad);
          const startY = 500 + 200 * Math.sin(rad);
          
          const ctrlX1 = 500 + 270 * Math.cos(rad - 0.15);
          const ctrlY1 = 500 + 270 * Math.sin(rad - 0.15);
          
          const petalTipX = 500 + 350 * Math.cos(rad);
          const petalTipY = 500 + 350 * Math.sin(rad);
          
          const ctrlX2 = 500 + 270 * Math.cos(rad + 0.15);
          const ctrlY2 = 500 + 270 * Math.sin(rad + 0.15);
          
          const nextRad = (angle + (360 / 32)) * Math.PI / 180;
          const endX = 500 + 200 * Math.cos(nextRad);
          const endY = 500 + 200 * Math.sin(nextRad);
          
          return {
            path: `M${startX},${startY} C${ctrlX1},${ctrlY1} ${petalTipX},${petalTipY} ${ctrlX2},${ctrlY2} S${endX},${endY} ${endX},${endY} A200,200 0 0,0 ${startX},${startY} Z`
          };
        }),
        
        // Final outer decorative elements - 16 pointed sections
        ...[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(angle => {
          const rad = angle * Math.PI / 180;
          const innerX = 500 + 350 * Math.cos(rad);
          const innerY = 500 + 350 * Math.sin(rad);
          
          const outerX = 500 + 480 * Math.cos(rad);
          const outerY = 500 + 480 * Math.sin(rad);
          
          const nextRad = (angle + 22.5) * Math.PI / 180;
          const nextInnerX = 500 + 350 * Math.cos(nextRad);
          const nextInnerY = 500 + 350 * Math.sin(nextRad);
          
          // Create a triangular point
          return {
            path: `M${innerX},${innerY} L${outerX},${outerY} L${nextInnerX},${nextInnerY} A350,350 0 0,0 ${innerX},${innerY} Z`
          };
        })
      ]
    },
    // 新增图案1: 星形曼陀罗 - 参考提供的图片
    {
      name: "星形曼陀罗",
      complexity: "medium",
      sections: [
        // 中心圆
        { path: "M500,500 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0" },
        
        // 内层八角星
        ...[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const rad = angle * Math.PI / 180;
          const nextRad = (angle + 45) * Math.PI / 180;
          
          const innerX = 500 + 50 * Math.cos(rad);
          const innerY = 500 + 50 * Math.sin(rad);
          
          const outerX = 500 + 150 * Math.cos(rad);
          const outerY = 500 + 150 * Math.sin(rad);
          
          const nextInnerX = 500 + 50 * Math.cos(nextRad);
          const nextInnerY = 500 + 50 * Math.sin(nextRad);
          
          return {
            path: `M${innerX},${innerY} L${outerX},${outerY} L${nextInnerX},${nextInnerY} Z`
          };
        }),
        
        // 中层花瓣
        ...[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const rad = angle * Math.PI / 180;
          const nextRad = (angle + 45) * Math.PI / 180;
          const midRad = (angle + 22.5) * Math.PI / 180;
          
          const innerX = 500 + 150 * Math.cos(rad);
          const innerY = 500 + 150 * Math.sin(rad);
          
          const outerX = 500 + 250 * Math.cos(midRad);
          const outerY = 500 + 250 * Math.sin(midRad);
          
          const nextInnerX = 500 + 150 * Math.cos(nextRad);
          const nextInnerY = 500 + 150 * Math.sin(nextRad);
          
          return {
            path: `M${innerX},${innerY} Q${outerX},${outerY} ${nextInnerX},${nextInnerY} A150,150 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 外层花瓣
        ...[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
          const rad = angle * Math.PI / 180;
          const nextRad = (angle + 45) * Math.PI / 180;
          const midRad = (angle + 22.5) * Math.PI / 180;
          
          const innerX = 500 + 250 * Math.cos(rad);
          const innerY = 500 + 250 * Math.sin(rad);
          
          const outerX = 500 + 400 * Math.cos(midRad);
          const outerY = 500 + 400 * Math.sin(midRad);
          
          const nextInnerX = 500 + 250 * Math.cos(nextRad);
          const nextInnerY = 500 + 250 * Math.sin(nextRad);
          
          return {
            path: `M${innerX},${innerY} Q${outerX},${outerY} ${nextInnerX},${nextInnerY} A250,250 0 0,0 ${innerX},${innerY} Z`
          };
        })
      ]
    },
    // 新增图案2: 花瓣曼陀罗
    {
      name: "花瓣曼陀罗",
      complexity: "simple",
      sections: [
        // 中心圆
        { path: "M500,500 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0" },
        
        // 内层花瓣 - 12瓣
        ...Array.from({length: 12}, (_, i) => {
          const angle = i * 30 * Math.PI / 180;
          const nextAngle = (i + 1) * 30 * Math.PI / 180;
          
          const innerX = 500 + 40 * Math.cos(angle);
          const innerY = 500 + 40 * Math.sin(angle);
          
          const midX = 500 + 100 * Math.cos((angle + nextAngle)/2);
          const midY = 500 + 100 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 40 * Math.cos(nextAngle);
          const nextInnerY = 500 + 40 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A40,40 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 外层花瓣 - 12瓣
        ...Array.from({length: 12}, (_, i) => {
          const angle = i * 30 * Math.PI / 180;
          const nextAngle = (i + 1) * 30 * Math.PI / 180;
          
          const innerX = 500 + 100 * Math.cos(angle);
          const innerY = 500 + 100 * Math.sin(angle);
          
          const outerX = 500 + 300 * Math.cos((angle + nextAngle)/2);
          const outerY = 500 + 300 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 100 * Math.cos(nextAngle);
          const nextInnerY = 500 + 100 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${outerX},${outerY} ${nextInnerX},${nextInnerY} A100,100 0 0,0 ${innerX},${innerY} Z`
          };
        })
      ]
    },
    // 新增图案3: 几何曼陀罗
    {
      name: "几何曼陀罗",
      complexity: "medium",
      sections: [
        // 中心圆
        { path: "M500,500 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" },
        
        // 内层六边形
        { path: "M500,470 L530,485 L530,515 L500,530 L470,515 L470,485 Z" },
        
        // 中层六边形
        { path: "M500,440 L560,470 L560,530 L500,560 L440,530 L440,470 Z" },
        
        // 外层六边形
        { path: "M500,400 L600,450 L600,550 L500,600 L400,550 L400,450 Z" },
        
        // 六个三角形
        { path: "M500,400 L560,470 L440,470 Z" },
        { path: "M600,450 L560,470 L560,530 Z" },
        { path: "M600,550 L560,530 L500,560 Z" },
        { path: "M500,600 L500,560 L440,530 Z" },
        { path: "M400,550 L440,530 L440,470 Z" },
        { path: "M400,450 L440,470 L500,400 Z" },
        
        // 外层装饰
        ...[0, 60, 120, 180, 240, 300].map(angle => {
          const rad = angle * Math.PI / 180;
          const nextRad = (angle + 60) * Math.PI / 180;
          
          const innerX = 500 + 200 * Math.cos(rad);
          const innerY = 500 + 200 * Math.sin(rad);
          
          const outerX = 500 + 350 * Math.cos(rad);
          const outerY = 500 + 350 * Math.sin(rad);
          
          const nextInnerX = 500 + 200 * Math.cos(nextRad);
          const nextInnerY = 500 + 200 * Math.sin(nextRad);
          
          return {
            path: `M${innerX},${innerY} L${outerX},${outerY} L${nextInnerX},${nextInnerY} Z`
          };
        })
      ]
    },
    // 新增图案4: 莲花曼陀罗
    {
      name: "莲花曼陀罗",
      complexity: "complex",
      sections: [
        // 中心圆
        { path: "M500,500 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0" },
        
        // 内层莲花瓣 - 8瓣
        ...Array.from({length: 8}, (_, i) => {
          const angle = i * 45 * Math.PI / 180;
          const nextAngle = (i + 1) * 45 * Math.PI / 180;
          
          const innerX = 500 + 40 * Math.cos(angle);
          const innerY = 500 + 40 * Math.sin(angle);
          
          const midX = 500 + 100 * Math.cos((angle + nextAngle)/2);
          const midY = 500 + 100 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 40 * Math.cos(nextAngle);
          const nextInnerY = 500 + 40 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A40,40 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 中层莲花瓣 - 16瓣
        ...Array.from({length: 16}, (_, i) => {
          const angle = i * 22.5 * Math.PI / 180;
          const nextAngle = (i + 1) * 22.5 * Math.PI / 180;
          
          const innerX = 500 + 100 * Math.cos(angle);
          const innerY = 500 + 100 * Math.sin(angle);
          
          const midX = 500 + 180 * Math.cos((angle + nextAngle)/2);
          const midY = 500 + 180 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 100 * Math.cos(nextAngle);
          const nextInnerY = 500 + 100 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A100,100 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 外层莲花瓣 - 8瓣
        ...Array.from({length: 8}, (_, i) => {
          const angle = i * 45 * Math.PI / 180;
          const nextAngle = (i + 1) * 45 * Math.PI / 180;
          
          const innerX = 500 + 180 * Math.cos(angle);
          const innerY = 500 + 180 * Math.sin(angle);
          
          const outerX = 500 + 350 * Math.cos((angle + nextAngle)/2);
          const outerY = 500 + 350 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 180 * Math.cos(nextAngle);
          const nextInnerY = 500 + 180 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${outerX},${outerY} ${nextInnerX},${nextInnerY} A180,180 0 0,0 ${innerX},${innerY} Z`
          };
        })
      ]
    },
    // 新增图案5: 星云曼陀罗
    {
      name: "星云曼陀罗",
      complexity: "complex",
      sections: [
        // 中心星形
        { path: "M500,480 L510,500 L530,500 L515,515 L520,535 L500,525 L480,535 L485,515 L470,500 L490,500 Z" },
        
        // 内环
        { path: "M500,500 m-80,0 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0" },
        
        // 中环
        { path: "M500,500 m-150,0 a150,150 0 1,0 300,0 a150,150 0 1,0 -300,0" },
        
        // 外环
        { path: "M500,500 m-250,0 a250,250 0 1,0 500,0 a250,250 0 1,0 -500,0" },
        
        // 内层星形 - 8个
        ...Array.from({length: 8}, (_, i) => {
          const angle = i * 45 * Math.PI / 180;
          const x = 500 + 115 * Math.cos(angle);
          const y = 500 + 115 * Math.sin(angle);
          
          return {
            path: `M${x},${y} l-10,-10 l-10,10 l10,10 l10,-10 Z`
          };
        }),
        
        // 中层星形 - 12个
        ...Array.from({length: 12}, (_, i) => {
          const angle = i * 30 * Math.PI / 180;
          const x = 500 + 200 * Math.cos(angle);
          const y = 500 + 200 * Math.sin(angle);
          
          return {
            path: `M${x},${y} l-15,-15 l-15,15 l15,15 l15,-15 Z`
          };
        }),
        
        // 外层装饰 - 24个
        ...Array.from({length: 24}, (_, i) => {
          const angle = i * 15 * Math.PI / 180;
          const innerX = 500 + 250 * Math.cos(angle);
          const innerY = 500 + 250 * Math.sin(angle);
          
          const outerX = 500 + 350 * Math.cos(angle);
          const outerY = 500 + 350 * Math.sin(angle);
          
          return {
            path: `M${innerX},${innerY} L${outerX},${outerY} l10,10 l-10,10 l-10,-10 l10,-10 Z`
          };
        })
      ]
    },
    // 新增图案6: 古老图纹曼陀罗 (Ancient Patterns)
    {
      name: "古老图纹",
      complexity: "complex",
      sections: [
        // 中心圆
        { path: "M500,500 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" },
        
        // 内层八芒星
        { path: "M500,470 L520,490 L550,490 L530,510 L540,540 L500,520 L460,540 L470,510 L450,490 L480,490 Z" },
        
        // 第一层圆环
        { path: "M500,500 m-80,0 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0" },
        
        // 第二层圆环
        { path: "M500,500 m-120,0 a120,120 0 1,0 240,0 a120,120 0 1,0 -240,0" },
        
        // 第三层圆环
        { path: "M500,500 m-200,0 a200,200 0 1,0 400,0 a200,200 0 1,0 -400,0" },
        
        // 第四层圆环
        { path: "M500,500 m-300,0 a300,300 0 1,0 600,0 a300,300 0 1,0 -600,0" },
        
        // 内层装饰图案 - 8个
        ...Array.from({length: 8}, (_, i) => {
          const angle = i * 45 * Math.PI / 180;
          const nextAngle = (i + 1) * 45 * Math.PI / 180;
          
          const innerX = 500 + 80 * Math.cos(angle);
          const innerY = 500 + 80 * Math.sin(angle);
          
          const midX = 500 + 100 * Math.cos((angle + nextAngle)/2);
          const midY = 500 + 100 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 80 * Math.cos(nextAngle);
          const nextInnerY = 500 + 80 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A80,80 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 中层装饰图案 - 16个
        ...Array.from({length: 16}, (_, i) => {
          const angle = i * 22.5 * Math.PI / 180;
          const nextAngle = (i + 1) * 22.5 * Math.PI / 180;
          
          const innerX = 500 + 120 * Math.cos(angle);
          const innerY = 500 + 120 * Math.sin(angle);
          
          const midX = 500 + 160 * Math.cos((angle + nextAngle)/2);
          const midY = 500 + 160 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 120 * Math.cos(nextAngle);
          const nextInnerY = 500 + 120 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A120,120 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 外层几何图案 - 24个三角形
        ...Array.from({length: 24}, (_, i) => {
          const angle = i * 15 * Math.PI / 180;
          const nextAngle = (i + 1) * 15 * Math.PI / 180;
          
          const innerX = 500 + 160 * Math.cos(angle);
          const innerY = 500 + 160 * Math.sin(angle);
          const x2 = 500 + 200 * Math.cos(angle);
          const y2 = 500 + 200 * Math.sin(angle);
          
          const nextInnerX = 500 + 160 * Math.cos(nextAngle);
          const nextInnerY = 500 + 160 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} L${x2},${y2} L${nextInnerX},${nextInnerY} Z`
          };
        }),
        
        // 最外层装饰 - 12个复杂图案
        ...Array.from({length: 12}, (_, i) => {
          const angle = i * 30 * Math.PI / 180;
          const nextAngle = (i + 1) * 30 * Math.PI / 180;
          
          const innerX = 500 + 300 * Math.cos(angle);
          const innerY = 500 + 300 * Math.sin(angle);
          
          const outerX1 = 500 + 380 * Math.cos(angle + 0.1);
          const outerY1 = 500 + 380 * Math.sin(angle + 0.1);
          
          const outerX2 = 500 + 400 * Math.cos(angle + 0.25);
          const outerY2 = 500 + 400 * Math.sin(angle + 0.25);
          
          const outerX3 = 500 + 380 * Math.cos(nextAngle - 0.1);
          const outerY3 = 500 + 380 * Math.sin(nextAngle - 0.1);
          
          const nextInnerX = 500 + 300 * Math.cos(nextAngle);
          const nextInnerY = 500 + 300 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} L${outerX1},${outerY1} L${outerX2},${outerY2} L${outerX3},${outerY3} L${nextInnerX},${nextInnerY} A300,300 0 0,0 ${innerX},${innerY} Z`
          };
        })
      ]
    },
    // 新增图案7: 冥想之旅 (Bardo Journey)
    {
      name: "冥想之旅",
      complexity: "complex",
      sections: [
        // 中心眼睛
        { path: "M500,500 m-25,0 a25,25 0 1,0 50,0 a25,25 0 1,0 -50,0" },
        
        // 内层莲花 - 6瓣
        ...Array.from({length: 6}, (_, i) => {
          const angle = i * 60 * Math.PI / 180;
          const nextAngle = (i + 1) * 60 * Math.PI / 180;
          
          const innerX = 500 + 25 * Math.cos(angle);
          const innerY = 500 + 25 * Math.sin(angle);
          
          const midX = 500 + 70 * Math.cos((angle + nextAngle)/2);
          const midY = 500 + 70 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 25 * Math.cos(nextAngle);
          const nextInnerY = 500 + 25 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A25,25 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 第一层圆环
        { path: "M500,500 m-70,0 a70,70 0 1,0 140,0 a70,70 0 1,0 -140,0" },
        
        // 第二层圆环
        { path: "M500,500 m-130,0 a130,130 0 1,0 260,0 a130,130 0 1,0 -260,0" },
        
        // 第三层圆环
        { path: "M500,500 m-220,0 a220,220 0 1,0 440,0 a220,220 0 1,0 -440,0" },
        
        // 第四层圆环
        { path: "M500,500 m-320,0 a320,320 0 1,0 640,0 a320,320 0 1,0 -640,0" },
        
        // 中层神秘符号 - 12个
        ...Array.from({length: 12}, (_, i) => {
          const angle = i * 30 * Math.PI / 180;
          const x = 500 + 100 * Math.cos(angle);
          const y = 500 + 100 * Math.sin(angle);
          
          // 创建小型螺旋符号
          return {
            path: `M${x},${y} m-10,0 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0 M${x},${y} l-5,-5 l-5,5 l5,5 l5,-5 Z`
          };
        }),
        
        // 中层波浪图案 - 6个
        ...Array.from({length: 6}, (_, i) => {
          const angle = i * 60 * Math.PI / 180;
          const nextAngle = (i + 1) * 60 * Math.PI / 180;
          
          const innerX = 500 + 130 * Math.cos(angle);
          const innerY = 500 + 130 * Math.sin(angle);
          
          const ctrl1X = 500 + 160 * Math.cos(angle + 0.2);
          const ctrl1Y = 500 + 160 * Math.sin(angle + 0.2);
          
          const ctrl2X = 500 + 180 * Math.cos(angle + 0.4);
          const ctrl2Y = 500 + 180 * Math.sin(angle + 0.4);
          
          const ctrl3X = 500 + 160 * Math.cos(nextAngle - 0.2);
          const ctrl3Y = 500 + 160 * Math.sin(nextAngle - 0.2);
          
          const nextInnerX = 500 + 130 * Math.cos(nextAngle);
          const nextInnerY = 500 + 130 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} C${ctrl1X},${ctrl1Y} ${ctrl2X},${ctrl2Y} ${ctrl3X},${ctrl3Y} L${nextInnerX},${nextInnerY} A130,130 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 外层曼陀罗花瓣 - 18个
        ...Array.from({length: 18}, (_, i) => {
          const angle = i * 20 * Math.PI / 180;
          const nextAngle = (i + 1) * 20 * Math.PI / 180;
          
          const innerX = 500 + 220 * Math.cos(angle);
          const innerY = 500 + 220 * Math.sin(angle);
          
          const outerX = 500 + 320 * Math.cos((angle + nextAngle)/2);
          const outerY = 500 + 320 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 220 * Math.cos(nextAngle);
          const nextInnerY = 500 + 220 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${outerX},${outerY} ${nextInnerX},${nextInnerY} A220,220 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 最外层装饰 - 36个小三角形
        ...Array.from({length: 36}, (_, i) => {
          const angle = i * 10 * Math.PI / 180;
          
          const innerX = 500 + 320 * Math.cos(angle);
          const innerY = 500 + 320 * Math.sin(angle);
          
          const outerX = 500 + 370 * Math.cos(angle);
          const outerY = 500 + 370 * Math.sin(angle);
          
          return {
            path: `M${innerX},${innerY} L${outerX},${outerY} l10,10 l-10,-5 l-10,5 Z`
          };
        })
      ]
    },
    // 新增图案8: 花园盛宴 (Flower Garden)
    {
      name: "花园盛宴",
      complexity: "complex",
      sections: [
        // 中心花蕊
        { path: "M500,500 m-35,0 a35,35 0 1,0 70,0 a35,35 0 1,0 -70,0" },
        
        // 内层花瓣 - 8瓣
        ...Array.from({length: 8}, (_, i) => {
          const angle = i * 45 * Math.PI / 180;
          const nextAngle = (i + 1) * 45 * Math.PI / 180;
          
          const innerX = 500 + 35 * Math.cos(angle);
          const innerY = 500 + 35 * Math.sin(angle);
          
          const midX = 500 + 80 * Math.cos((angle + nextAngle)/2);
          const midY = 500 + 80 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 35 * Math.cos(nextAngle);
          const nextInnerY = 500 + 35 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A35,35 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 第二层花瓣 - 16瓣
        ...Array.from({length: 16}, (_, i) => {
          const angle = i * 22.5 * Math.PI / 180;
          const nextAngle = (i + 1) * 22.5 * Math.PI / 180;
          
          const innerX = 500 + 80 * Math.cos(angle);
          const innerY = 500 + 80 * Math.sin(angle);
          
          const midX = 500 + 130 * Math.cos((angle + nextAngle)/2);
          const midY = 500 + 130 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 80 * Math.cos(nextAngle);
          const nextInnerY = 500 + 80 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A80,80 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 第三层花瓣 - 24瓣
        ...Array.from({length: 24}, (_, i) => {
          const angle = i * 15 * Math.PI / 180;
          const nextAngle = (i + 1) * 15 * Math.PI / 180;
          
          const innerX = 500 + 130 * Math.cos(angle);
          const innerY = 500 + 130 * Math.sin(angle);
          
          const midX = 500 + 190 * Math.cos((angle + nextAngle)/2);
          const midY = 500 + 190 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 130 * Math.cos(nextAngle);
          const nextInnerY = 500 + 130 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A130,130 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 第四层花瓣 - 12瓣大花
        ...Array.from({length: 12}, (_, i) => {
          const angle = i * 30 * Math.PI / 180;
          const nextAngle = (i + 1) * 30 * Math.PI / 180;
          
          const innerX = 500 + 190 * Math.cos(angle);
          const innerY = 500 + 190 * Math.sin(angle);
          
          const outerX = 500 + 300 * Math.cos((angle + nextAngle)/2);
          const outerY = 500 + 300 * Math.sin((angle + nextAngle)/2);
          
          const nextInnerX = 500 + 190 * Math.cos(nextAngle);
          const nextInnerY = 500 + 190 * Math.sin(nextAngle);
          
          return {
            path: `M${innerX},${innerY} Q${outerX},${outerY} ${nextInnerX},${nextInnerY} A190,190 0 0,0 ${innerX},${innerY} Z`
          };
        }),
        
        // 最外层装饰 - 24个叶子
        ...Array.from({length: 24}, (_, i) => {
          const angle = i * 15 * Math.PI / 180;
          
          const baseX = 500 + 300 * Math.cos(angle);
          const baseY = 500 + 300 * Math.sin(angle);
          
          const tipX = 500 + 380 * Math.cos(angle);
          const tipY = 500 + 380 * Math.sin(angle);
          
          const ctrl1X = 500 + 340 * Math.cos(angle - 0.1);
          const ctrl1Y = 500 + 340 * Math.sin(angle - 0.1);
          
          const ctrl2X = 500 + 340 * Math.cos(angle + 0.1);
          const ctrl2Y = 500 + 340 * Math.sin(angle + 0.1);
          
          return {
            path: `M${baseX},${baseY} C${ctrl1X},${ctrl1Y} ${tipX},${tipY} ${ctrl2X},${ctrl2Y} Z`
          };
        })
      ]
    }
  ];
  
// 添加一个新的曼陀罗图案，确保所有区域都可涂色
window.MANDALA_PATTERNS.push({
  name: "阳光花朵",
  complexity: "medium",
  sections: [
    // 中心黄色圆形
    { path: "M500,500 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" },
    
    // 中心花朵 - 6个花瓣
    ...Array.from({length: 6}, (_, i) => {
      const angle = i * 60 * Math.PI / 180;
      const nextAngle = (i + 1) * 60 * Math.PI / 180;
      
      const innerX = 500 + 15 * Math.cos(angle);
      const innerY = 500 + 15 * Math.sin(angle);
      
      const midX = 500 + 30 * Math.cos((angle + nextAngle)/2);
      const midY = 500 + 30 * Math.sin((angle + nextAngle)/2);
      
      const nextInnerX = 500 + 15 * Math.cos(nextAngle);
      const nextInnerY = 500 + 15 * Math.sin(nextAngle);
      
      return {
        path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A15,15 0 0,0 ${innerX},${innerY} Z`
      };
    }),
    
    // 第一圈圆环 - 白色背景
    { path: "M500,500 m-80,0 a80,80 0 1,0 160,0 a80,80 0 1,0 -160,0 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0" },
    
    // 内圈旋转图案 - 8个部分
    ...Array.from({length: 8}, (_, i) => {
      const angle = i * 45 * Math.PI / 180;
      const nextAngle = (i + 1) * 45 * Math.PI / 180;
      
      const innerX = 500 + 30 * Math.cos(angle);
      const innerY = 500 + 30 * Math.sin(angle);
      
      const outerX = 500 + 80 * Math.cos(angle);
      const outerY = 500 + 80 * Math.sin(angle);
      
      const nextInnerX = 500 + 30 * Math.cos(nextAngle);
      const nextInnerY = 500 + 30 * Math.sin(nextAngle);
      
      const nextOuterX = 500 + 80 * Math.cos(nextAngle);
      const nextOuterY = 500 + 80 * Math.sin(nextAngle);
      
      return {
        path: `M${innerX},${innerY} L${outerX},${outerY} L${nextOuterX},${nextOuterY} L${nextInnerX},${nextInnerY} A30,30 0 0,0 ${innerX},${innerY} Z`
      };
    }),
    
    // 第二圈圆环 - 白色背景
    { path: "M500,500 m-150,0 a150,150 0 1,0 300,0 a150,150 0 1,0 -300,0 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" },
    
    // 中层花瓣 - 24个交替的花瓣
    ...Array.from({length: 24}, (_, i) => {
      const angle = i * 15 * Math.PI / 180;
      const nextAngle = (i + 1) * 15 * Math.PI / 180;
      
      const innerX = 500 + 80 * Math.cos(angle);
      const innerY = 500 + 80 * Math.sin(angle);
      
      const midX = 500 + 115 * Math.cos((angle + nextAngle)/2);
      const midY = 500 + 115 * Math.sin((angle + nextAngle)/2);
      
      const nextInnerX = 500 + 80 * Math.cos(nextAngle);
      const nextInnerY = 500 + 80 * Math.sin(nextAngle);
      
      return {
        path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A80,80 0 0,0 ${innerX},${innerY} Z`
      };
    }),
    
    // 第三圈圆环 - 白色背景
    { path: "M500,500 m-250,0 a250,250 0 1,0 500,0 a250,250 0 1,0 -500,0 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0" },
    
    // 外层花瓣 - 24个交替的花瓣
    ...Array.from({length: 24}, (_, i) => {
      const angle = i * 15 * Math.PI / 180;
      const nextAngle = (i + 1) * 15 * Math.PI / 180;
      
      const innerX = 500 + 150 * Math.cos(angle);
      const innerY = 500 + 150 * Math.sin(angle);
      
      const midX = 500 + 200 * Math.cos((angle + nextAngle)/2);
      const midY = 500 + 200 * Math.sin((angle + nextAngle)/2);
      
      const nextInnerX = 500 + 150 * Math.cos(nextAngle);
      const nextInnerY = 500 + 150 * Math.sin(nextAngle);
      
      return {
        path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A150,150 0 0,0 ${innerX},${innerY} Z`
      };
    }),
    
    // 最外层三角形 - 16个交替的三角形
    ...Array.from({length: 16}, (_, i) => {
      const angle = i * 22.5 * Math.PI / 180;
      
      const innerX = 500 + 250 * Math.cos(angle);
      const innerY = 500 + 250 * Math.sin(angle);
      
      const tipX = 500 + 400 * Math.cos(angle);
      const tipY = 500 + 400 * Math.sin(angle);
      
      const nextAngle = (i + 1) * 22.5 * Math.PI / 180;
      const nextInnerX = 500 + 250 * Math.cos(nextAngle);
      const nextInnerY = 500 + 250 * Math.sin(nextAngle);
      
      return {
        path: `M${innerX},${innerY} L${tipX},${tipY} L${nextInnerX},${nextInnerY} A250,250 0 0,0 ${innerX},${innerY} Z`
      };
    })
  ]
});

// 修复现有曼陀罗中可能存在的问题
// 添加一个完全参考图片的彩色曼陀罗
window.MANDALA_PATTERNS.push({
  name: "彩虹旋转花",
  complexity: "medium",
  sections: [
    // 中心圆形
    { path: "M500,500 m-25,0 a25,25 0 1,0 50,0 a25,25 0 1,0 -50,0" },
    
    // 内层花瓣 - 6个
    ...Array.from({length: 6}, (_, i) => {
      const angle = i * 60 * Math.PI / 180;
      const nextAngle = (i + 1) * 60 * Math.PI / 180;
      
      const innerX = 500 + 25 * Math.cos(angle);
      const innerY = 500 + 25 * Math.sin(angle);
      
      const midX = 500 + 40 * Math.cos((angle + nextAngle)/2);
      const midY = 500 + 40 * Math.sin((angle + nextAngle)/2);
      
      const nextInnerX = 500 + 25 * Math.cos(nextAngle);
      const nextInnerY = 500 + 25 * Math.sin(nextAngle);
      
      return {
        path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A25,25 0 0,0 ${innerX},${innerY} Z`
      };
    }),
    
    // 第一层圆环
    { path: "M500,500 m-60,0 a60,60 0 1,0 120,0 a60,60 0 1,0 -120,0 m-25,0 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0" },
    
    // 第一层旋转图案 - 8个扇形
    ...Array.from({length: 8}, (_, i) => {
      const angle = i * 45 * Math.PI / 180;
      const nextAngle = (i + 1) * 45 * Math.PI / 180;
      
      const innerX = 500 + 60 * Math.cos(angle);
      const innerY = 500 + 60 * Math.sin(angle);
      
      const nextInnerX = 500 + 60 * Math.cos(nextAngle);
      const nextInnerY = 500 + 60 * Math.sin(nextAngle);
      
      return {
        path: `M500,500 L${innerX},${innerY} A60,60 0 0,1 ${nextInnerX},${nextInnerY} Z`
      };
    }),
    
    // 第二层圆环
    { path: "M500,500 m-120,0 a120,120 0 1,0 240,0 a120,120 0 1,0 -240,0 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0" },
    
    // 第二层花瓣 - 24个
    ...Array.from({length: 24}, (_, i) => {
      const angle = i * 15 * Math.PI / 180;
      const nextAngle = (i + 1) * 15 * Math.PI / 180;
      
      const innerX = 500 + 120 * Math.cos(angle);
      const innerY = 500 + 120 * Math.sin(angle);
      
      const midX = 500 + 150 * Math.cos((angle + nextAngle)/2);
      const midY = 500 + 150 * Math.sin((angle + nextAngle)/2);
      
      const nextInnerX = 500 + 120 * Math.cos(nextAngle);
      const nextInnerY = 500 + 120 * Math.sin(nextAngle);
      
      return {
        path: `M${innerX},${innerY} Q${midX},${midY} ${nextInnerX},${nextInnerY} A120,120 0 0,0 ${innerX},${innerY} Z`
      };
    }),
    
    // 第三层圆环
    { path: "M500,500 m-220,0 a220,220 0 1,0 440,0 a220,220 0 1,0 -440,0 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0" },
    
    // 最外层三角形 - 16个
    ...Array.from({length: 16}, (_, i) => {
      const angle = i * 22.5 * Math.PI / 180;
      
      const innerX = 500 + 220 * Math.cos(angle);
      const innerY = 500 + 220 * Math.sin(angle);
      
      const tipX = 500 + 350 * Math.cos(angle);
      const tipY = 500 + 350 * Math.sin(angle);
      
      const nextAngle = (i + 1) * 22.5 * Math.PI / 180;
      const nextInnerX = 500 + 220 * Math.cos(nextAngle);
      const nextInnerY = 500 + 220 * Math.sin(nextAngle);
      
      return {
        path: `M${innerX},${innerY} L${tipX},${tipY} L${nextInnerX},${nextInnerY} A220,220 0 0,0 ${innerX},${innerY} Z`
      };
    })
  ]
});

console.log("曼陀罗花图案已加载:", window.MANDALA_PATTERNS.length, "个图案");
  