// 임시 좌석정보
const seatReview = [
  {
    "seatImg":"../../img/view1.jpeg",
    "hallName":"세종문화회관 대극장",
    "showName":"웃는남자",
    "date": "2022-08-16",
    "seat":"2-C-56",
    "writer":"뷰잉뷰잉"
  },
  {
    "seatImg":"../../img/view2.jpeg",
    "hallName":"세종문화회관 대극장",
    "showName":"웃는남자",
    "date": "2022-08-16",
    "seat":"2-D-131",
    "writer":"뷰잉뷰잉"
  },
]

// 좌석표 그리기
function drawSection(section){
  if (section == 1) {

    rowsdraw(0, 1, 500, 700, "null");

    seatCnt = 1;
    rowsdraw(6, 1, 300, 80, "A");
    rowsdraw(7, 2, 300, 110, "A");
    rowsdraw(8, 3, 300, 140, "A");
    rowsdraw(9, 4, 300, 170, "A");
    rowsdraw(10, 5, 300, 200, "A");
    rowsdraw(11, 6, 300, 230, "A");
    rowsdraw(12, 7, 300, 260, "A");
    rowsdraw(13, 8, 300, 290, "A");
    rowsdraw(14, 9, 300, 320, "A");
    rowsdraw(14, 10, 300, 350, "A");
    rowsdraw(14, 11, 300, 380, "A");
    rowsdraw(14, 12, 300, 410, "A");
    rowsdraw(14, 13, 300, 440, "A");
    rowsdraw(14, 14, 300, 470, "A");
    rowsdraw(14, 15, 300, 500, "A");
    rowsdraw(14, 16, 300, 530, "A");
    rowsdraw(14, 17, 300, 560, "A");
    rowsdraw(14, 18, 300, 590, "A");
  
    seatCnt = 1;
    for(let k=1; k<19; k++) {
      rowsdraw(13, k, 700, 50 + (30*k), "B");
    }
  
    seatCnt = 1;
    for(let k=1; k<17; k++) {
      rowsdraw(13, k, 1100, 50 + (30*k), "C");
    }
  
    seatCnt = 1;
    for(let k=1; k<19; k++) {
      rowsdraw(13, k, 1500, 50 + (30*k), "D");
    }
  
    seatCnt = 1;
    rowsdraw(6, 1, 1690, 80, "E");
    rowsdraw(7, 2, 1720, 110, "E");
    rowsdraw(8, 3, 1750, 140, "E");
    rowsdraw(9, 4, 1780, 170, "E");
    rowsdraw(10, 5, 1810, 200, "E");
    rowsdraw(11, 6, 1840, 230, "E");
    rowsdraw(12, 7, 1870, 260, "E");
    rowsdraw(13, 8, 1900, 290, "E");
    rowsdraw(14, 9, 1930, 320, "E");
    rowsdraw(14, 10, 1930, 350, "E");
    rowsdraw(14, 11, 1930, 380, "E");
    rowsdraw(14, 12, 1930, 410, "E");
    rowsdraw(14, 13, 1930, 440, "E");
    rowsdraw(14, 14, 1930, 470, "E");
    rowsdraw(14, 15, 1930, 500, "E");
    rowsdraw(14, 16, 1930, 530, "E");
    rowsdraw(14, 17, 1930, 560, "E");
    rowsdraw(14, 18, 1930, 590, "E");
  
    drawSeat(nodes);

  } else if (section == 2) {

    rowsdraw(0, 1, 500, 700, "null");

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

    drawSeat(nodes);
  }
  colorSeat();
} 
