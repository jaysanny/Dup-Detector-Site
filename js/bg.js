'use strict';
var color1 = '#7A1EA1';
var color2 = '#a464bd';
var speed = 860;
var deg = 0;
var p1 = -10;
var p2 = 100;
var startSubtractingP2 = false;
var startSubtractingDeg = false;
var add = function add() {
  if (p2 === 100) {
    startSubtractingP2 = true;
  } else if (p2 == 0) {
    startSubtractingP2 = false;
  }
  if (deg == 360) {
    startSubtractingDeg = true;
  } else if (deg === -360) {
    startSubtractingDeg = false;
  }
  if (startSubtractingP2 != true) {
    p2++;
  } else if (startSubtractingP2 === true) {
    p2--;
  }
  if (startSubtractingDeg != true) {
    deg++;
  } else if (startSubtractingDeg === true) {
    deg--;
  }
  render(deg, p1, p2);
};
var render = function render(deg, p1, p2) {
  document.getElementsByClassName("moving-bg")[0].style.background = 'linear-gradient(' + deg + 'deg,' + color1 + ' ' + p1 + '%,' + color2 + ' ' + p2 + '%)'

  document.getElementsByClassName("moving-bg-inverse")[0].style.background = 'linear-gradient(' + '-' + deg + 'deg,' + color1 + ' ' + p1 + '%,' + color2 + ' ' + p2 + '%)'

  setTimeout(function () {
    add();
  }, speed);
};
add();