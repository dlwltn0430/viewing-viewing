var seatCnt = 1;
var nodes = [];
const section = decodeURIComponent(window.location.href).split("section=")[1];

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
    createNode(`seat-${label}-${seatCnt-i}`, offsetX, offsetY, seatCnt-i);
    offsetX = offsetX - 30;
  }
  createTextNode("seat" + ej.datavisualization.Diagram.Util.randomId(), offsetX, offsetY, label);
}

var name;
function click(args) {
  var diagram = $("#diagram").ejDiagram("instance");
  if (args.element.name.includes('-')){
    if (args.element.fillColor != "#32CD32") {
      diagram.updateNode(args.element.name, { fillColor: "#32CD32" });
    } else {
      diagram.updateNode(args.element.name, { fillColor: "#ddd" });
    }
  }
}

$(document).ready(function(e){
  drawSection(section);
});