setTimeout(function(){
  isPlaying = true;

  loc = 0;
  score = 0;
  miss = 0;
  scoreLabel.text(score);
  missLabel.text(miss);
  word = words[randoms[0]];

  target.text(word).css('color', '#2c3e50').css('font-size', '48px')
  startTime = Date.now();
  countUp();
  startTimer();
},3000);