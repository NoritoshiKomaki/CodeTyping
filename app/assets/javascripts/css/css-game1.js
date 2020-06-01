const cssUrl = 'https://developer.mozilla.org/ja/docs/Web/CSS/'
$('#length').append('/30');
const words = [
  ':active','::after','align-content','align-items','align-self','background','background-color','background-image','background-size','::before','border','border-bottom','border-left','border-right','border-style','border-top','bottom','box-shadow','box-sizing','calc','color','cursor','display','flex','flex-basis','flex-direction','flex-grow','flex-shrink','flex-wrap','float','font','font-family','font-size','font-style','font-weight','height',':hover','justify-content','justify-items','justify-self','left','letter-spacing','line-height','list-style','margin','margin-bottom','margin-left','margin-right','margin-top','opacity','overflow','padding','padding-bottom','padding-left','padding-right','padding-top','right','text-align','text-decoration','text-shadow','top','transform','transition','white-space','width','z-index',
];

var randoms = [];
var min = 0
var max = words.length - 1;

for(i = min; i <= max; i++){
  while(true){
    var tmp = intRandom(min, max);
    if(!randoms.includes(tmp)){
      randoms.push(tmp);
      break;
    }
  }
}

function intRandom(min, max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}

window.addEventListener('keydown', e => {
  if (isPlaying !== true) {
    return;
  }

  if (e.key === word[loc]) {
    const code = $('#code')
    code.append(word[loc]);
    loc++;
    if (loc === word.length) {
      $('.li' + number).removeAttr('id', 'code').attr('href', cssUrl + word);
      $('.li' + (number + 1)).attr('id', 'code');
      number++
      num += 1
      word = words[randoms[num]];
      loc = 0;
      if (num > 5) {
        $('.words-view').animate({ scrollTop: 39 * (num - 5)});
      }
      if (num === 30) {
        showResult();
        $('.result').slideDown(200);
        countStop();
        stopTimer();
      }
    }
    updateTarget();
    score++;
    scoreLabel.text(0 + num);
  } else if(e.keyCode === 16) {
    e.preventDefault();
  } else {
    miss++;
    missLabel.text(miss);
    target.css('color', 'crimson');
    colorReset();
  }
});