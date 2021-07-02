var mo=function(e){passive: false ;};
document.body.style.overflow='hidden';
document.addEventListener("touchmove",mo,false); // Disable scrolling

var start_time = (new Date("06/29/2021 21:00:00")).getTime();
var clockElement = document.getElementById("clock");
var memoryElement = document.getElementById("memory");
var progressElement = document.getElementById("progress");

function getMemory(days) {
  var memory = 100;
  var rate = 0.8;
  var part = 20;
  for (var i = 0; i < days; i += 1) {
    memory = memory - part;
    part = part * rate;
  }
  return memory;
}

/*This function is called when the page is loaded and registers the necessary callbacks/event handlers*/
function showTime() {
  var diff = Math.round(((new Date()).getTime() - start_time) / 1000);
  var days = Math.floor(diff / (24 * 60 * 60));
  diff = diff - days * 24 * 60 * 60;
  var hours = Math.floor(diff / 3600);
  diff = diff - hours * 3600;
  var mins = Math.floor(diff / 60);
  var secs = diff - mins * 60;
  var memory = getMemory(days);
  clockElement.innerHTML = days + "天" + hours + "时" + mins + "分" + secs + "秒";
  memoryElement.innerHTML = memory + "%"
  progressElement.value = memory;

  setTimeout(showTime, 1000)
}