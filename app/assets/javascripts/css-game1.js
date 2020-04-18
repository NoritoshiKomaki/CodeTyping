$(window).on('load', function() {
  $('#length').append('/362');
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
$('#retry').on('click', function() {
  location.reload();
});
$('#r-submit').on('click', function() {
  $('#r-string').text('登録が完了しました');
});
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
  target.textContent = placeholder + word.substring(loc);
}

function showResult() {
  const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
  const totalScore =  (score - miss * 3) / (second / 60)
  if (totalScore > 300) {
    $('#r-rank').append('S');
  } else if (totalScore > 250) {
    $('#r-rank').append('A');
  } else if (totalScore > 200) {
    $('#r-rank').append('B');
  } else if (totalScore > 150) {
    $('#r-rank').append('C'); 
  } else if (totalScore > 100) {
    $('#r-rank').append('D');
  } else {
    $('#r-rank').append('E');
  }
  $('#r-totalScore').append(Math.round(totalScore));
  $('#r-score').append(score);
  $('#r-miss').append(miss);
  $('#r-accuracy').append(`${accuracy.toFixed(2)}%`);
  $('#r-timer').append(timerLabel);
  $('#myscore').val(totalScore);
}

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
    startTimer();
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
        if (num === 0) {
          return;
        } else if (num === 30) {
          $('.code').append(tab2);
        } else if (num === 1 || num === 6 || num === 7 || num === 13 || num === 14 || num === 17 || num === 18 || num === 20 || num === 21 || num === 23 || num === 24 || num === 26 || num === 27 || num === 29) {
          $('.code').append(tab3);
        } else {
          $('.code').append(tab4);
        }
      }
      updateTarget();
      score++;
      if (score === 3) {
        showResult();
        $('.result').slideDown(200);
        countStop();
        stopTimer();
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