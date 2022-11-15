const db = [
  {
    "showName" : "2019 Wanna One Concert［Therefore］",
    "posterImg" : "https://ticketimage.interpark.com/Play/image/large/18/18018073_p.gif",
    "showDate" : "2019.01.24 ~ 2019.01.27",
    "artistName" : "워너원",
    "hallName" : "고척스카이돔"
  },
  {
    "showName" : "SEVENTEEN WORLD TOUR ［BE THE SUN］- SEOUL",
    "posterImg" : "https://ticketimage.interpark.com/Play/image/large/22/22006106_p.gif",
    "showDate" : "2022.06.25 ~ 2022.06.26",
    "artistName" : "세븐틴",
    "hallName" : "고척스카이돔"
  },
  {
    "showName" : "2021 SVT 5TH FAN MEETING 〈SEVENTEEN in CARAT LAND〉",
    "posterImg" : "https://ticketimage.interpark.com/Play/image/large/21/21005587_p.gif",
    "showDate" : "2021.08.06 ~ 2021.08.08",
    "artistName" : "세븐틴",
    "hallName" : "잠실실내체육관"
  },
  {
    "showName" : "2022 알렌 워커(Alan Walker) 내한공연",
    "posterImg" : "https://ticketimage.interpark.com/Play/image/large/22/22006873_p.gif",
    "showDate" : "2022.09.14 ~ 2022.09.14",
    "artistName" : "알렌 워커",
    "hallName" : "잠실실내체육관"
  },
  {
    "showName" : "TOMORROW X TOGETHER WORLD TOUR 〈ACT : LOVE SICK〉 IN SEOUL",
    "posterImg" : "https://ticketimage.interpark.com/Play/image/large/22/22005310_p.gif",
    "showDate" : "2022.07.02 ~ 2022.07.03",
    "artistName" : "투모로우바이투게더",
    "hallName" : "잠실실내체육관"
  },
  {
    "showName" : "2018 Asia Song Festival - Day 2",
    "posterImg" : "https://ticketimage.interpark.com/Play/image/large/18/18011915_p.gif",
    "showDate" : "2018.10.03",
    "artistName" : "이특(박정수), 세븐틴, 레드벨벳, 워너원, 프로미스나인, 모모랜드",
    "hallName" : "부산아시아드주경기장"
  },
];

function findDB(element, text){
  if (element.artistName === text || element.showName === text || element.hallName === text){
    return true;
  } else {
    return false;
  }
}

function search() {
  let text = document.querySelector(".search-text").value;
  
  let res = db.find((element)=>{
    return findDB(element, text);
  });

  if (res !== undefined) {
    console.log(text);
  } else {
    alert('찾을 수 없습니다.');
  }
}
document.getElementById("btn").addEventListener("click", search);