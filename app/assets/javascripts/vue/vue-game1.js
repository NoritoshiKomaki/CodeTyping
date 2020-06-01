$('#length').append('/30');
const words = [
// ここからapi

  'data','components','methods','watch','el','render','props','computed','v-bind','v-on','v-if','v-else-if','v-else','v-html','v-show','v-model','v-once','v-text','v-pre','v-cloak','slot','v-slot','template','keep-alive','activated','deactivated','directive','filter','mixins','transition','transition-group',
// ここまで
  'v-move','scoped','new Vue','$emit','lazy','trim','inserted','componentUpdated','unbind','binding','modifiers','v-enter','v-leave','appear','in-out','out-in','before-enter','before-leave','after-enter','after-leave','enter-cancelled','leave-cancelled','router-link','exact',
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
        case 'v-move':
          code.attr('href', vMove);
          break
        case 'scoped':
          code.attr('href', scoped);
          break
        case 'new Vue':
          code.attr('href', newVue);
          break
        case '$emit':
        case '$root':
          code.attr('href', vm + word);
          break
        case 'lazy':
        case 'trim':
          code.attr('href', forms + word);
          break
        case 'inserted':
        case 'componentUpdated':
        case 'unbind':
        case 'binding':
          code.attr('href', hook);
          break
        case 'modifier':
          code.attr('href', modifier);
          break
        case 'v-enter':
        case 'v-leave':
          code.attr('href', transitionClass);
          break
        case 'appear':
          code.attr('href', appear);
          break
        case 'in-out':
        case 'out-in':
          code.attr('href', transitionMode);
          break
        case 'before-enter':
        case 'before-leave':
        case 'after-enter':
        case 'after-leave':
        case 'enter-cancelled':
        case 'leave-cancelled':
          code.attr('href', jsHook);
          break
        case 'router-link':
          code.attr('href', routerLink);
          break
        case 'exact':
          code.attr('href', exact);
          break
        default:
          code.attr('href', vueApi + word);
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