let cnt = 0, minute = 0, hour = 0, variable, millisec = 0;
let s = document.getElementsByClassName("hour")[0];
let q = document.getElementsByClassName("minute")[0];
let r = document.getElementsByClassName("cnt")[0];
let g = document.getElementsByClassName("starting")[0];
let f = document.getElementsByClassName("millicnt")[0];

function startwatch() {
  if (g.innerHTML == "STOP") {
    clearInterval(variable);
    g.innerHTML = "START";
    return;
  }
  g.innerHTML = "STOP";
  let b = setInterval(function() {
    s.value = hour;
    q.value = minute;
    r.value = cnt;
    f.value = millisec;
    millisec++;
    if (millisec == 100) {
      millisec = 0;
      cnt++;
    }
    if (cnt == 60) {
      cnt = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    if (hour == 24) {
      hour = 0;
    }
    variable = b;
  }, 10)
}
function stopwatch() {
  clearInterval(variable);
  cnt = 0, minute = 0, hour = 0, millisec = 0;
  s.value = hour;
  q.value = minute;
  r.value = cnt;
  f.value = millisec;
  g.innerHTML = "START";
}