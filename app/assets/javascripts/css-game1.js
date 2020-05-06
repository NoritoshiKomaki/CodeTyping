$(function() {
  $('#length').append('/362');
  $('#body').text(
`    <div class="container">
      <div class="left">
        <div class="red box">
        <div class="blue box">
      </div>
      <div class="right">
        <div class="yellow box">
        <div class="green box">
      </div>
    </div>
  </body>
</html>`
  )
  
  const words = [
    '<style>',
      '.container {',
        'height: 100vh;',
        'display: flex;',
        'justify-content: center;',
        'align-items: center;',
      '}',
      '.box {',
        'width: 200px;',
        'height: 200px;',
        'margin: 20px 10px;',
        'border-radius: 10px;',
        'box-shadow: 3px 3px 3px gray;',
      '}',
      '.box:hover {',
        'transform: scale(1.5, 1.5);',
        'transition: 0.2s;',
      '}',
      '.red {',
        'background: red;',
      '}',
      '.yellow {',
        'background: yellow;',
      '}',
      '.green {',
        'background: green;',
      '}',
      '.blue {',
        'background: blue;',
      '}',
    '</style> ',
  ];

// ここから固定
const rank = $('#r-rank')
const code = $('#code')
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
  const totalScore =  (score - miss * 3) / (second / 60)
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
  $('#r-totalScore').append(Math.round(totalScore));
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
    word = words[0];
  
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
      code.append(word[loc]);
      loc++;
      if (loc === 15) {
        target.animate({ scrollLeft: 100})
      };
      if (loc === word.length) {
        code.append('<br>');
        word = words[num = num + 1];
        loc = 0;
        $('.editor').animate({ scrollTop: 27 * num});
        if (num === 0) {
          return;
        } else if (num === 30) {
          code.append(tab2);
        } else if (num === 1 || num === 6 || num === 7 || num === 13 || num === 14 || num === 17 || num === 18 || num === 20 || num === 21 || num === 23 || num === 24 || num === 26 || num === 27 || num === 29) {
          code.append(tab3);
        } else {
          code.append(tab4);
        }
      }
      updateTarget();
      score++;
      if (score === 362) {
        showResult();
        $('.result').slideDown(200);
        countStop();
        stopTimer();
        score++;
      }
      scoreLabel.text(score);
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