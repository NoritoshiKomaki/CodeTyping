$(function() {
  $('#length').append('/30');
  const words = [
    ':active',
    '::after',
    'align-content',
    'align-items',
    'align-self',
    'background',
    'background-color',
    'background-image',
    'background-size',
    '::before',
    'border',
    'border-bottom',
    'border-left',
    'border-right',
    'border-style',
    'border-top',
    'bottom',
    'box-shadow',
    'box-sizing',
    'calc',
    'color',
    'cursor',
    'display',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'float',
    'font',
    'font-family',
    'font-size',
    'font-style',
    'font-weight',
    'height',
    ':hover',
    'justify-content',
    'justify-items',
    'justify-self',
    'left',
    'letter-spacing',
    'line-height',
    'list-style',
    'margin',
    'margin-bottom',
    'margin-left',
    'margin-right',
    'margin-top',
    'opacity',
    'overflow',
    'padding',
    'padding-bottom',
    'padding-left',
    'padding-right',
    'padding-top',
    'right',
    'text-align',
    'text-decoration',
    'text-shadow',
    'top',
    'transform',
    'transition',
    'white-space',
    'width',
    'z-index',
  ];

  var randoms = [];
  var min = 0
  var max = words.length - 1;

for(i = min; i <= max; i++){
  while(true){
    var tmp = intRandom(min, max);
    if(!randoms.includes(tmp)){
      randoms.push(tmp);
      break;
    }
  }
}

function intRandom(min, max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}


// ここから固定
const rank = $('#r-rank')
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

$(function(){
  setTimeout(function(){
    isPlaying = true;
  
    loc = 0;
    score = 0;
    miss = 0;
    scoreLabel.text(score);
    missLabel.text(miss);
    word = words[randoms[0]];
  
    target.text(word).css('color', '#2c3e50').css('font-size', '48px')
    startTime = Date.now();
    countUp();
    startTimer();
  },3000);
});
// ここまで
  
  window.addEventListener('keydown', e => {
    if (isPlaying !== true) {
      return;
    }
  
    if (e.key === word[loc]) {
      $('#code').append(word[loc]);
      loc++;
      if (loc === word.length) {
        $('.li' + number).removeAttr('id', 'code').attr('href', 'https://developer.mozilla.org/ja/docs/Web/CSS/' + word);
        $('.li' + (number + 1)).attr('id', 'code');
        number++
        num += 1
        word = words[randoms[num]];
        loc = 0;
        if (num > 5) {
          $('.words-view').animate({ scrollTop: 39 * (num - 5)});
        }
        if (num === 30) {
          showResult();
          $('.result').slideDown(200);
          countStop();
          stopTimer();
        }
      }
      updateTarget();
      score++;
      scoreLabel.text(0 + num);
    } else if(e.keyCode === 16) {
      e.preventDefault();
    } else {
      miss++;
      missLabel.text(miss);
      target.css('color', 'crimson');
      colorReset();
    }
  });
});