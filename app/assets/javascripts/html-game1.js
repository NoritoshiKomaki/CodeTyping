$(function() {
  $('#length').append('/267');
  const words = [
    '<div class="container">',
      '<h1>hello world</h1>',
      '<p>my name is tanaka</p>',
    '</div>',
    '<style>',
      '.container {',
        'width: 300px;',
        'padding: 30px;',
        'margin: 300px auto;',
        'text-align: center;',
        'background-color: yellow;',
        'border: 3px solid red;',
        'border-radius: 10px;',
      '}',
      'h1 {',
        'color: green;',
      '}',
      'p {',
        'color: blue;',
      '}',
    '</style> ',
  ];

// ここから固定
  $('#retry').on('click', function() {
    location.reload();
  });
  $('#r-submit').on('click', function() {
    $('#r-string').text('登録が完了しました');
  });

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
  
  function showResult() {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    const totalScore =  (score - miss * 3) / (second / 60)
    if (totalScore >= 300) {
      rank.append('S');
    } else if (totalScore >= 285) {
      rank.append('A+');
    } else if (totalScore >= 265) {
      rank.append('A');
    } else if (totalScore >= 250) {
      rank.append('A-');
    } else if (totalScore >= 235) {
      rank.append('B+');
    } else if (totalScore >= 215) {
      rank.append('B');
    } else if (totalScore >= 200) {
      rank.append('B-');
    } else if (totalScore >= 185) {
      rank.append('C+'); 
    } else if (totalScore >= 165) {
      rank.append('C'); 
    } else if (totalScore >= 150) {
      rank.append('C-'); 
    } else if (totalScore >= 135) {
      rank.append('D+');
    } else if (totalScore >= 115) {
      rank.append('D');
    } else if (totalScore >= 100) {
      rank.append('D-');
    } else if (totalScore >= 85) {
      rank.append('E+');
    } else if (totalScore >= 65) {
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
    
      target.text(word).css('color', '#333').css('font-size', '48px')
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
        if (num === 6 || num === 7 || num === 8 || num === 9 || num === 10 || num === 11 || num === 12 || num === 15 || num === 18) {
          code.append(tab4);
        } else if (num === 1 || num === 2 || num === 5 || num === 13 || num === 14 || num === 16 || num === 17 || num === 19) {
          code.append(tab3);
        } else if (num === 3 || num === 4 || num === 20) {
          code.append(tab2);
        }
      }
      updateTarget();
      score++;
      if (score === 267) {
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
    }
  });
});