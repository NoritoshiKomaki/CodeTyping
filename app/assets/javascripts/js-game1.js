$(function() {
  $('#length').append('/246');
  const words = [
    '<script>',
      'function fizzbuzz() {',
        'for(i = 1; i <= 100; i++) {',
          'if(i % 3 === 0 && i % 5 === 0) {',
            "console.log('FizzBuzz');",
          '} else if(i % 3 === 0) {',
            "console.log('Fizz');",
          '} else if(i % 5 === 0) {',
            "console.log('Buzz');",
          '} else {',
            'console.log(i);',
          '}',
        '}',
      '}',
      'fizzbuzz();',
    '</script> ',
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
        target.animate({ scrollLeft: 500})
      };
      if (loc === word.length) {
        code.append('<br>');
        word = words[num = num + 1];
        loc = 0;
        $('.editor').animate({ scrollTop: 27 * num});
        if (num === 0) {
          return;
        } else if (num === 15) {
          code.append(tab2);
        } else if (num === 1 || num === 13 || num === 14) {
          code.append(tab3);
        } else if (num === 2 || num === 12) {
          code.append(tab4);
        } else if (num === 3 || num === 5 || num === 7 || num === 9 || num === 11) {
          code.append(tab5);
        } else {
          code.append(tab6);
        }
      }
      updateTarget();
      score++;
      if (score === 246) {
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