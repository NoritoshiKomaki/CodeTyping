$(window).on('load', function() {
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
  const tab4 = tab3 + '&nbsp&nbsp';
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

  cnt = 3;
  $(target).text(cnt).css('color', '#1da1f2').css('font-size', '56px')
  cnDown = setInterval(function(){ 
      cnt--;
      if(cnt <= 0){
          clearInterval(cnDown);
      }
      $(target).text(cnt);
  },1000);

  $(function(){
    setTimeout(function(){
      isPlaying = true;
    
      loc = 0;
      score = 0;
      miss = 0;
      scoreLabel.textContent = score;
      missLabel.textContent = miss;
      word = words[0];
    
      $(target).text(word).css('color', '#333').css('font-size', '40px')
      startTime = Date.now();
      countUp();  
    },3000);
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
        $('#target').animate({ scrollLeft: 100})
      };
      if (loc === word.length) {
        $('.code').append('<br>');
        word = words[num = num + 1];
        loc = 0;
        $('.editor').animate({ scrollTop: 27 * num});
        if (num === 6 || num === 7 || num === 8 || num === 9 || num === 10 || num === 11 || num === 12 || num === 15 || num === 18) {
          $('.code').append(tab4);
        } else if (num === 1 || num === 2 || num === 5 || num === 13 || num === 14 || num === 16 || num === 17 || num === 19) {
          $('.code').append(tab3);
        } else if (num === 3 || num === 4 || num === 20) {
          $('.code').append(tab2);
        }
      }
      updateTarget();
      score++;
      if (score === 267) {
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