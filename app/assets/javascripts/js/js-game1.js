$('#length').append('/30');
const words = [
// referenceClass
  'static',
// string
  'match','replace','substring','split','toUpperCase','toLowerCase',
// array
  'length','push','pop','shift','slice','sort','reverse','concat','join','splice','reduce','join','forEach','map','filter',
// math
  'random','floor','round',
// date
  'getFullYear','getMonth','getDate','getDay','getHours','getMinutes','getSeconds',
// jsFunction
  'call','bind','apply',
//object
  'hasOwnProperty','setPrototypeOf',
// apiDocument
  'getElementById',
  'getElementsByClassName',
  'querySelector',
// htmlElement
  'focus',
// apiWindow
  'alert','confirm','setInterval',
// windowTimers
  'clearInterval','setTimeout','clearTimeout',
// mouseEvent
  'clientX','clientY',
// element
  'blur',
// jsConsole
  'console.log',
// prototype
  'prototype',
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
// referenceClass
        case 'static':
          code.attr('href', referenceClass + word);
          break
// string
        case 'match':
        case 'replace':
        case 'substring':
        case 'split':
        case 'toUpperCase':
        case 'toLowerCase':
          code.attr('href', string + word);
          break
// math
        case 'random':
        case 'floor':
        case 'round':
          code.attr('href', math + word);
          break
// date
        case 'getFullYear':
        case 'getMonth':
        case 'getDate':
        case 'getDay':
        case 'getHours':
        case 'getMinutes':
        case 'getSeconds':
          code.attr('href', date + word);
          break
// jsFunction
        case 'call':
        case 'bind':
        case 'apply':
          code.attr('href', jsFunction + word)
          break
// object
        case 'hasOwnProperty':
        case 'setPrototypeOf':
          code.attr('href', object + word)
          break
// apiDocument
        case 'getElementById':
        case 'getElementsByClassName':
        case 'querySelector':
          code.attr('href', apiDocument + word);
          break
// htmlElement
        case 'focus':
          code.attr('href', htmlElement + word);
          break
// apiWindow
        case 'alert':
        case 'confirm':
        case 'setInterval':
          code.attr('href', apiWindow + word);
          break
// windowTimers
        case 'clearInterval':
        case 'setTimeOut':
        case 'clearTimeOut':
          code.attr('href', windowTimers + word);
          break
// mouseEvent
        case 'clientX':
        case 'clientY':
          code.attr('href', mouseEvent + word);
          break
// element
        case 'blur':
          code.attr('href', jsElement + word + event);
          break
// jsConsole
        case 'console.log':
          code.attr('href', jsConsole)
          break
// prototype
        case 'prototype':
          code.attr('href', prototype)
          break
// array
        default:
          code.attr('href', array + word);
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