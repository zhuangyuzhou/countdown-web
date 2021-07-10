var mo=function(e){passive: false ;};
document.body.style.overflow='hidden';
document.addEventListener("touchmove",mo,false); // Disable scrolling

var start_time = (new Date("06/29/2021 21:00:00")).getTime();
var end_time = (new Date("07/13/2021 18:00:00")).getTime();
var clockElement = document.getElementById("clock");
var memoryElement = document.getElementById("memory");
var progressElement = document.getElementById("progress");

function getMemory(days, left) {
  var memory = 100;
  var rate = 0.8;
  var part = 20;
  for (var i = 0; i < days; i += 1) {
    memory = memory - part;
    part = part * rate;
  }
  memory = memory - left / (24 * 3600) * part;
  memory = memory.toFixed(2);
  return memory;
}

/*This function is called when the page is loaded and registers the necessary callbacks/event handlers*/
function showTime() {
  var start_diff = Math.round(((new Date()).getTime() - start_time) / 1000);
  var end_diff = Math.round((end_time - (new Date()).getTime()) / 1000);
  
  var days = Math.floor(end_diff / (24 * 60 * 60));
  end_diff = end_diff - days * 24 * 60 * 60;
  var hours = Math.floor(end_diff / 3600);
  end_diff = end_diff - hours * 3600;
  var mins = Math.floor(end_diff / 60);
  var secs = end_diff - mins * 60;
  clockElement.innerHTML = days + "天" + hours + "时" + mins + "分" + secs + "秒";
  
  var days = Math.floor(start_diff / (24 * 60 * 60));
  start_diff = start_diff - days * 24 * 60 * 60;
  var memory = getMemory(days, start_diff);
  memoryElement.innerHTML = memory + "%"
  progressElement.value = memory;

  setTimeout(showTime, 1000)
}