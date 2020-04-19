let word;
let loc;
let score;
let miss;
let startTime;
let testTimer;
let timeoutId;
let isPlaying = false;
let num = 0;
let elapsedTime = 0;
let cnt = 3;
let second = 0;

const tab2 = '&nbsp;&nbsp;&nbsp;&nbsp;';
const tab3 = tab2 + '&nbsp&nbsp';
const tab4 = tab3 + '&nbsp&nbsp';
const tab5 = tab4 + '&nbsp&nbsp';
const tab6 = tab5 + '&nbsp&nbsp';

$(document).keydown(function (e) {
  if (e.keyCode == 32) {
    e.preventDefault();
    $(target).append(" ")
  }
});