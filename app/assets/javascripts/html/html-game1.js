$('#length').append('/30');
const words = [
// element
  'html','head','link','meta','style','title','body','footer','header','h1','h2','h3','h4','h5','h6','main','nav','section','div','hr','li','ol','p','pre','ul','a','br','span','strong','img','video','script','table','tbody','td','tfoot','th','thead','tr','button','form','input','label','option','select','textarea','template',
// global
  'class','id','lang',
// form
  'action',
// img
  'alt','src',
// a
  'href','target',
// link
  'rel',
// meta
  'charset',
// inputA
  'autocomplete','autofocus','disabled','name','type','value',
// inputB
  'checkbox','date','email','radio','submit','text',
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
      switch(word) {
// global
        case 'class':
        case 'id':
        case 'lang':
          code.attr('href', global + word);
          break
// fo rm
        case 'action':
          code.attr('href', form + word);
          break
// img
        case 'alt':
        case 'src':
          code.attr('href', img + word);
          break
// a
        case 'href':
        case 'target':
          code.attr('href', a + word);
          break
// link
        case 'rel':
          code.attr('href', link + word);
          break
// meta
        case 'charset':
          code.attr('href', meta + word);
          break
// inputA
        case 'autocomplete':
        case 'autofocus':
        case 'disabled':
        case 'name':
        case 'type':
        case 'value':
          code.attr('href', inputA + word);
          break
// inputB
        case 'checkbox':
        case 'date':
        case 'email':
        case 'radio':
        case 'submit':
        case 'text':
          code.attr('href', inputB + word);
          break
// element
        default:
          code.attr('href', element + word);
          break
      }

      $('.li' + number).removeAttr('id', 'code')
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