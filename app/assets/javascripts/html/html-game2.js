$('#length').append('/242');
$('#body').text(
`    <style>
      body {
        margin-top: 100px;
      }
      h1, h2, h3, ul, p, a, img {
        display: table;
        margin: 0 auto;
      }
      img {
        width: 100px;
      }
    </style>
  </body>
</html>`
)

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
      switch(num) {
        case 7:
        case 8:
        case 9:
          code.append(tab3);
          break
        default:
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
    target.css('color', 'crimson');
    colorReset();
  }
});