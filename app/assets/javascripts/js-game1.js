$(window).on('load', function() {
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
  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    timerLabel.textContent = `${m}:${s}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);

  }

  function countStop() {
    clearTimeout(timeoutId);
  }
  
  function updateTarget() {
    let placeholder = '';
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    target.textContent = placeholder + word.substring(loc);
  }
  
  function showResult() {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    $('#r-score').append(score);
    $('#r-miss').append(miss);
    $('#r-accuracy').append(`${accuracy.toFixed(2)}%`);
    $('#r-timer').append(timerLabel);
  }
  
  window.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
  
    loc = 0;
    score = 0;
    miss = 0;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    word = words[0];
  
    target.textContent = word;
    startTime = Date.now();
    countUp();
  });
// ここまで
  
  window.addEventListener('keydown', e => {
    if (isPlaying !== true) {
      return;
    }
  
    if (e.key === word[loc]) {
      $('.code').append(word[loc]);
      loc++;
      if (loc === 15) {
        $('#target').animate({ scrollLeft: 500})
      };
      if (loc === word.length) {
        $('.code').append('<br>');
        word = words[num = num + 1];
        loc = 0;
        $('.editor').animate({ scrollTop: 27 * num});
        if (num === 0) {
          return;
        } else if (num === 15) {
          $('.code').append(tab2);
        } else if (num === 1 || num === 13 || num === 14) {
          $('.code').append(tab3);
        } else if (num === 2 || num === 12) {
          $('.code').append(tab4);
        } else if (num === 3 || num === 5 || num === 7 || num === 9 || num === 11) {
          $('.code').append(tab5);
        } else {
          $('.code').append(tab6);
        }
      }
      updateTarget();
      score++;
      if (score === 246) {
        showResult();
        $('.result').slideDown(200);
        countStop();
        score++;
      }
      scoreLabel.textContent = score;
    } else if(e.keyCode === 16) {
      e.preventDefault();
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  });
});