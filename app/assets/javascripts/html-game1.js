$(function() {
  $('#length').append('/242');
  const words = [
    '<h1>heading1</h1>',
    '<h2>heading2</h2>',
    '<h3>heading3</h3>',
    '<hr>',
    '<p>paragraph</p>',
    '<hr>',
    '<ul>',
      '<li>list item1</li>',
      '<li>list item2</li>',
      '<li>list item3</li>',
    '</ul>',
    '<hr>',
    '<a href="https://prog-8.com/">anchor</a>',
    '<hr>',
    '<img src="https://bit.ly/2yxubtu" alt="html picture"> '
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
        target.animate({ scrollLeft: 300})
      }
      if (loc === 30) {
        target.animate({ scrollLeft: 600})
      }
      if (loc === word.length) {
        code.append('<br>');
        word = words[num = num + 1];
        loc = 0;
        $('.editor').animate({ scrollTop: 27 * num});
        if (num === 7 || num === 8 || num === 9) {
          code.append(tab3);
        } else {
          code.append(tab2);
        }
      }
      updateTarget();
      score++;
      if (score === 242) {
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