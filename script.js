let s= 0;
var rn = 0;
function bubbleFormation(){
  let bubbles = " ";
  for(var i=1; i<=118; i++){
    bubbles += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
  }
  document.querySelector(".p-btm").innerHTML = bubbles;
}
bubbleFormation();
function Timer(){
  let Time = 30;
  let timeInterval = setInterval(function() {
    if(Time>0){
      Time--;
      document.querySelector("#time").textContent = Time;
    }
    else{
      clearInterval(timeInterval);
      document.querySelector(".pannel")
      .innerHTML = 
      `<div class="end">
        <div class="text">
        Game Over 
        <div class="show">
        Your Score is: ${s}
        </div>
        </div>
      </div>`;
    }
  },1000);
}
Timer();
function getNewHit(){
  rn = Math.floor(Math.random()*10);
  document.querySelector("#hit").textContent = rn;
}
getNewHit();

function IncScore(){
  s+=10;
  document.querySelector("#score").textContent = s;
}

document.querySelector(".p-btm")
.addEventListener("click", function(dets){
  var clickedNum = Number(dets.target.textContent);
  if(clickedNum === rn){
    IncScore();
    bubbleFormation();
    getNewHit();
  }
});



