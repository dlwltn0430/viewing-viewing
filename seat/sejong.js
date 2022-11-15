function drawSection(section){
  if (section == 1) {
    seatCnt = 1;
    rowsdraw(6, 1, 500, 80, "A");
    rowsdraw(7, 2, 500, 110, "A");
    rowsdraw(8, 3, 500, 140, "A");
    rowsdraw(9, 4, 500, 170, "A");
    rowsdraw(10, 5, 500, 200, "A");
    rowsdraw(11, 6, 500, 230, "A");
    rowsdraw(12, 7, 500, 260, "A");
    rowsdraw(13, 8, 500, 290, "A");
    rowsdraw(14, 9, 500, 320, "A");
    rowsdraw(14, 10, 500, 350, "A");
    rowsdraw(14, 11, 500, 380, "A");
    rowsdraw(14, 12, 500, 410, "A");
    rowsdraw(14, 13, 500, 440, "A");
    rowsdraw(14, 14, 500, 470, "A");
    rowsdraw(14, 15, 500, 500, "A");
    rowsdraw(14, 16, 500, 530, "A");
    rowsdraw(14, 17, 500, 560, "A");
    rowsdraw(14, 18, 500, 590, "A");
  
    seatCnt = 1;
    for(let k=1; k<19; k++) {
      rowsdraw(13, k, 900, 50 + (30*k), "B");
    }
  
    seatCnt = 1;
    for(let k=1; k<17; k++) {
      rowsdraw(13, k, 1300, 50 + (30*k), "C");
    }
  
    seatCnt = 1;
    for(let k=1; k<19; k++) {
      rowsdraw(13, k, 1700, 50 + (30*k), "D");
    }
  
    seatCnt = 1;
    rowsdraw(6, 1, 1890, 80, "E");
    rowsdraw(7, 2, 1920, 110, "E");
    rowsdraw(8, 3, 1950, 140, "E");
    rowsdraw(9, 4, 1980, 170, "E");
    rowsdraw(10, 5, 2010, 200, "E");
    rowsdraw(11, 6, 2040, 230, "E");
    rowsdraw(12, 7, 2070, 260, "E");
    rowsdraw(13, 8, 2100, 290, "E");
    rowsdraw(14, 9, 2130, 320, "E");
    rowsdraw(14, 10, 2130, 350, "E");
    rowsdraw(14, 11, 2130, 380, "E");
    rowsdraw(14, 12, 2130, 410, "E");
    rowsdraw(14, 13, 2130, 440, "E");
    rowsdraw(14, 14, 2130, 470, "E");
    rowsdraw(14, 15, 2130, 500, "E");
    rowsdraw(14, 16, 2130, 530, "E");
    rowsdraw(14, 17, 2130, 560, "E");
    rowsdraw(14, 18, 2130, 590, "E");
  
    $("#diagram").ejDiagram({                   
      width: "100%",
      height: "90vh",                  
      pageSettings: {scrollLimit: "diagram" },
      nodes: nodes,
      click: click,
      defaultSettings: {
        node: {
          constraints: ej.datavisualization.Diagram.NodeConstraints.Default &~ ej.datavisualization.Diagram.NodeConstraints.Select,
        },
      },
      selectedItems: {
        constraints:ej.datavisualization.Diagram.SelectorConstraints.None
      },
      snapSettings: {
        snapConstraints:ej.datavisualization.Diagram.SnapConstraints.None,
      }
    });
  } else if (section == 2) {
    seatCnt = 1;
    rowsdraw(5, 1, 300, 80, "A");
    rowsdraw(6, 2, 300, 110, "A");
    rowsdraw(5, 3, 300, 170, "A");
    rowsdraw(5, 4, 300, 200, "A");
    rowsdraw(6, 5, 300, 230, "A");
    rowsdraw(6, 6, 300, 260, "A");
    rowsdraw(7, 7, 300, 290, "A");
    rowsdraw(8, 8, 300, 470, "A");
    rowsdraw(9, 9, 300, 500, "A");
    rowsdraw(9, 10, 300, 530, "A");
    rowsdraw(10, 11, 300, 560, "A");
    rowsdraw(10, 12, 300, 590, "A");
    rowsdraw(10, 13, 300, 620, "A");
    rowsdraw(6, 14, 300, 650, "A");

    seatCnt = 1;
    for(let k=1; k<21; k++) {
      if (k!= 3 && k!= 9) {
        rowsdraw(9, k, 580, 50 + (30*k), "B");
      }
    }

    seatCnt = 1;
    for(let k=1; k<21; k++) {
      if (k<3){
        rowsdraw(14, k, 1010, 50 + (30*k), "C");
      } else if (k!= 3 && k!= 9) {
        rowsdraw(9, k, 860, 50 + (30*k), "C");
      }
    }

    seatCnt = 1;
    rowsdraw(11, 1, 1350, 80, "D");
    rowsdraw(11, 2, 1350, 110, "D");

    rowsdraw(11, 3, 1350, 170, "D");
    rowsdraw(11, 4, 1350, 200, "D");
    rowsdraw(11, 5, 1350, 230, "D");
    rowsdraw(4, 6, 990, 260, "D");
    rowsdraw(11, 6, 1350, 260, "D");
    rowsdraw(4, 6, 1500, 260, "D");
    rowsdraw(21, 7, 1500, 290, "D");

    rowsdraw(10, 8, 1170, 350, "D");
    rowsdraw(10, 8, 1500, 350, "D");
    rowsdraw(10, 9, 1170, 380, "D");
    rowsdraw(10, 9, 1500, 380, "D");
    rowsdraw(10, 10, 1170, 410, "D");
    rowsdraw(10, 10, 1500, 410, "D");
    rowsdraw(10, 11, 1170, 440, "D");
    rowsdraw(10, 11, 1500, 440, "D");
    rowsdraw(21, 12, 1500, 470, "D");
    rowsdraw(3, 13, 960, 500, "D");
    rowsdraw(3, 13, 1500, 500, "D");
    rowsdraw(3, 14, 960, 530, "D");
    rowsdraw(3, 14, 1500, 530, "D");
    rowsdraw(2, 15, 930, 560, "D");
    rowsdraw(2, 15, 1500, 560, "D");
    rowsdraw(2, 16, 930, 590, "D");
    rowsdraw(2, 16, 1500, 590, "D");
    rowsdraw(2, 17, 930, 620, "D");
    rowsdraw(2, 17, 1500, 620, "D");

    seatCnt = 1;
    for(let k=1; k<21; k++) {
      if (k<3){
        rowsdraw(14, k, 1780, 50 + (30*k), "E");
      } else if (k!= 3 && k!= 9) {
        rowsdraw(9, k, 1780, 50 + (30*k), "E");
      }
    }

    seatCnt = 1;
    for(let k=1; k<21; k++) {
      if (k!= 3 && k!= 9) {
        rowsdraw(9, k, 2060, 50 + (30*k), "F");
      }
    }

    seatCnt = 1;
    rowsdraw(5, 1, 2220, 80, "G");
    rowsdraw(6, 2, 2250, 110, "G");
    rowsdraw(5, 3, 2220, 170, "G");
    rowsdraw(5, 4, 2220, 200, "G");
    rowsdraw(6, 5, 2250, 230, "G");
    rowsdraw(6, 6, 2250, 260, "G");
    rowsdraw(7, 7, 2280, 290, "G");
    rowsdraw(8, 8, 2310, 470, "G");
    rowsdraw(9, 9, 2340, 500, "G");
    rowsdraw(9, 10, 2340, 530, "G");
    rowsdraw(10, 11, 2370, 560, "G");
    rowsdraw(10, 12, 2370, 590, "G");
    rowsdraw(10, 13, 2370, 620, "G");
    rowsdraw(6, 14, 2350, 650, "G");

    $("#diagram").ejDiagram({                   
      width: "100%",
      height: "90vh",                  
      pageSettings: {scrollLimit: "diagram" },
      nodes: nodes,
      click: click,
      defaultSettings: {
        node: {
          constraints: ej.datavisualization.Diagram.NodeConstraints.Default &~ ej.datavisualization.Diagram.NodeConstraints.Select,
        },
      },
      selectedItems: {
        constraints:ej.datavisualization.Diagram.SelectorConstraints.None
      },
      snapSettings: {
        snapConstraints:ej.datavisualization.Diagram.SnapConstraints.None,
      }
    });
  }
}  


// /**
//  * Get path data for a rounded rectangle. Allows for different radius on each corner.
//  * @param  {Number} w   Width of rounded rectangle
//  * @param  {Number} h   Height of rounded rectangle
//  * @param  {Number} tlr Top left corner radius
//  * @param  {Number} trr Top right corner radius
//  * @param  {Number} brr Bottom right corner radius
//  * @param  {Number} blr Bottom left corner radius
//  * @return {String}     Rounded rectangle SVG path data
//  */

//  var roundedRectData = function (w, h, tlr, trr, brr, blr) {
//   return 'M 0 ' + tlr
//     + ' A ' + tlr + ' ' + tlr + ' 0 0 1 ' + tlr + ' 0'
//     + ' L ' + (w - trr) + ' 0'
//     + ' A ' + trr + ' ' + trr + ' 0 0 1 ' + w + ' ' + trr
//     + ' L ' + w + ' ' + (h - brr)
//     + ' A ' + brr + ' ' + brr + ' 0 0 1 ' + (w - brr) + ' ' + h
//     + ' L ' + blr + ' ' + h
//     + ' A ' + blr + ' ' + blr + ' 0 0 1 0 ' + (h - blr)
//     + ' Z';
// };
// console.log(roundedRectData(25,25,5,5,5,5));