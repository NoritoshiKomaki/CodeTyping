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
      switch(num) {
        case 0:
          break;
        case 30:
          code.append(tab2);
          break
        case 1:
        case 6:
        case 7:
        case 13:
        case 14:
        case 17:
        case 18:
        case 20:
        case 21:
        case 23:
        case 24:
        case 26:
        case 27:
        case 29:
          code.append(tab3);
          break
        default:
          code.append(tab4);
          break
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