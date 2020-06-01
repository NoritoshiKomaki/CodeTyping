const rank = $('#r-rank');
const code = $('#code');
const target = $('#target');
const scoreLabel = $('#score');
const missLabel = $('#miss');
const timerLabel = $('#timer');

function countUp() {
  const d = new Date(Date.now() - startTime + elapsedTime);
  const m = String(d.getMinutes()).padStart(2, '0');
  const s = String(d.getSeconds()).padStart(2, '0');
  timerLabel.text(`${m}:${s}`);

  timeoutId = setTimeout(() => {
    countUp();
  }, 10);
}

function startTimer() {
  testTimer=setInterval(function(){
  second++;
  } , 1000);
}

function countStop() {
  clearTimeout(timeoutId);
}

function stopTimer(){
  clearInterval(testTimer);
}

function updateTarget() {
  let placeholder = '';
  for (let i = 0; i < loc; i++) {
    placeholder += '_';
  }
  target.text(placeholder + word.substring(loc));
}

function colorReset() {
  $(document).keyup(function () {
      target.css('color', '#2c3e50');
  });
}

function showResult() {
  const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
  const totalScore =  Math.round((score - miss * 3) / (second / 60));
  if (totalScore >= 200) {
    rank.append('S');
  } else if (totalScore >= 190) {
    rank.append('A+');
  } else if (totalScore >= 180) {
    rank.append('A');
  } else if (totalScore >= 170) {
    rank.append('A-');
  } else if (totalScore >= 160) {
    rank.append('B+');
  } else if (totalScore >= 150) {
    rank.append('B');
  } else if (totalScore >= 140) {
    rank.append('B-');
  } else if (totalScore >= 130) {
    rank.append('C+'); 
  } else if (totalScore >= 120) {
    rank.append('C'); 
  } else if (totalScore >= 110) {
    rank.append('C-'); 
  } else if (totalScore >= 100) {
    rank.append('D+');
  } else if (totalScore >= 90) {
    rank.append('D');
  } else if (totalScore >= 80) {
    rank.append('D-');
  } else if (totalScore >= 70) {
    rank.append('E+');
  } else if (totalScore >= 60) {
    rank.append('E');
  } else if (totalScore >= 50) {
    rank.append('E-');
  } else {
    rank.append('-');
  }
  $('#r-totalScore').append(totalScore);
  $('#r-score').append(score);
  $('#r-miss').append(miss);
  $('#r-accuracy').append(`${accuracy.toFixed(2)}%`);
  $('#r-timer').append(timerLabel);
  $('#myscore').val(totalScore);
}

target.text(cnt).css('color', '#1da1f2').css('font-size', '64px')
cnDown = setInterval(function(){ 
    cnt--;
    if(cnt <= 0){
        clearInterval(cnDown);
    }
    target.text(cnt);
},999);