$('.section-img').hide();
$('.section-text').hide();

var seatCnt = 1;
var nodes = [];

const section = decodeURIComponent(window.location.href).split("section=")[1];

// 선택 공연장 & 구역 정보 불러오기
function fillText(){
  const hallName = ["세종문화회관 대극장", "예술의전당 오페라극장", "충무아트센터 대극장", "블루스퀘어 신한카드홀", "잠실종합운동장 올림픽주경기장", "고척스카이돔", "잠실실내체육관", "올림픽공원 SK올림픽핸드볼경기장", "KSPO DOME(올림픽체조경기장)"];
  const selectedHall = decodeURIComponent(window.location.href).split("hall-section/")[1].split(".html")[0];
  $(".section-info > a").text(hallName[parseInt(selectedHall)-1]);
  const n = $('.section-text li').length;
  for(i=0; i<n; i++){
    if ($('.section-text a')[i].text == `${section}층` || $('.section-text a')[i].text == `${section}구역`) {
      $('.section-text a')[i].style.color = "#1A1F57";
    }
  }
}

// 리뷰있는 좌석
function colorSeat(){
  for(let i = 0; i < seatReview.length; i++) {
    $(`#${seatReview[i].seat}`).children('path').attr('fill', '#FF7AAA');
  }
}

// 리뷰리스트 불러오기
function makeReviewList(name){
  seatReview.forEach(res => {
    if (res.seat == name) {
      temp_html =  `<div class="review" onclick="location.href='review-detail.html'">
                      <div class="hoverimgchange">
                        <img src=${res.seatImg} class="before" alt="1" >
                        <img src="/img/좌석배치도.png" class="after" alt="1-1"  >
                      </div>
                      <div class="card-body">
                        <div class="review-info">
                          <div class="review-info-top">
                            <div class="yellow-star">★★☆☆☆</div>
                            <div>
                              <span>${res.writer}</span>
                              <span>| ${res.date}</span>
                            </div>
                          </div>
                          <p>${res.hallName}</p>
                          <p>${res.showName}</p>
                          <p>${res.seat}</p>
                        </div>
                      </div>
                    </div>`;
}
  });
  if (temp_html) {
    $('.review-list-container').append(temp_html);
  }
}

// 좌석표 그리기 (상세)
function createTextNode(name,offsetX,offsetY,label) {
  var node = {};
  node.name = name;
  node.offsetX = offsetX;
  node.offsetY = offsetY;
  node.width = 20;
  node.height = 20;
  node.type = ej.datavisualization.Diagram.Shapes.Text;
  node.textBlock = { text: "" };
  nodes.push(node);
}
function createNode(name, offsetX, offsetY, label) {
  var node = {};
  node.name = name;
  node.offsetX = offsetX;
  node.offsetY = offsetY;
  node.width = 25;
  node.height = 25;
  node.shape = "path";
  node.pathData = "M 0 5 A 5 5 0 0 1 5 0 L 20 0 A 5 5 0 0 1 25 5 L 25 20 A 5 5 0 0 1 20 25 L 5 25 A 5 5 0 0 1 0 20 Z";
  node.fillColor = "#ddd";
  node.labels = [{ text: label }];
  nodes.push(node);
}
function rowsdraw(count, row, offsetX, offsetY, label) {
  seatCnt += (count-1);
  createTextNode("seat", offsetX + 40, offsetY, label);
  for (i = 1; i < count; i++) {
    createNode(`${section}-${label}-${seatCnt-i}`, offsetX, offsetY, seatCnt-i);
    offsetX = offsetX - 30;
  }
  createTextNode("seat" + ej.datavisualization.Diagram.Util.randomId(), offsetX, offsetY, label);
}

function drawSeat(nodes) {
  $("#diagram").ejDiagram({                   
    width: "100%",
    height: "70vh",                  
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

// 좌석 클릭시
function click(args) {
  var diagram = $("#diagram").ejDiagram("instance");
  if (args.element.name){
    if (args.element.name.includes('-')){
      $('.review-list-container').empty();
      makeReviewList(args.element.name);
      $(".review-list").show();
      window.scrollTo( 0, 650);
      // $("[role=presentation]").attr('fill', "#ddd");
      // if (args.element.fillColor != "#FF7AAA") {
      //   diagram.updateNode(args.element.name, { fillColor: "#FF7AAA" });
      //   $(".review-list").show();
      //   window.scrollTo( 0, 650);
      // } else {
      //   diagram.updateNode(args.element.name, { fillColor: "#ddd" });
      //   $(".review-list").hide();
      // }
    }
  }
}

$(document).ready(function(e){
  fillText();
  if(section == undefined) {
    $('.section-img').show();
    $('.section-text').hide();
  } else {
    $('.section-img').hide();
    $('.section-text').show();
  }
  drawSection(section);
});