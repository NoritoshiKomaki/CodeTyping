$('#length').append('/246');
$('#body').text(
`  </body>
</html>`
)
const words = [
  '<script>',
    'function fizzbuzz() {',
      'for(i = 1; i <= 100; i++) {',
        'if(i % 3 === 0 && i % 5 === 0) {',
          "console.log('fizzbuzz');",
        '} else if(i % 3 === 0) {',
          "console.log('fizz');",
        '} else if(i % 5 === 0) {',
          "console.log('buzz');",
        '} else {',
          'console.log(i);',
        '}',
      '}',
    '}',
    'fizzbuzz();',
  '</script> ',
];

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
      switch(num) {
        case 0:
          break;
        case 15:
          code.append(tab2);
          break
        case 1:
        case 13:
        case 14:
          code.append(tab3);
          break
        case 2:
        case 12:
          code.append(tab4);
          break
        case 3:
        case 5:
        case 7:
        case 9:
        case 11:
          code.append(tab5);
          break
        default:
          code.append(tab6);
          break
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
    target.css('color', 'crimson');
    colorReset();
  }
});