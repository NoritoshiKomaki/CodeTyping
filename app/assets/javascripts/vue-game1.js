$(function() {
  $('#length').append('/30');
  const words = [
    'data','components','methods','watch','scoped','return','$mount','el','render','new Vue','props','computed','required','default','$emit','vm','v-bind','v-on','v-if','v-else-if','v-else','v-html','v-show','v-model','v-once','v-text','v-pre','v-cloak','slot','v-slot','template','keep-alive','activated','deactivated','lazy','trim','multiple','$event','directive','inserted','componentUpdated','unbind','binding','arg','modifiers','filter','export','mixins','transition','transition-group','v-enter','v-leave','appear','mode','out-in','before-enter','before-leave','after-enter','after-leave','enter-cancelled','leave-cancelled','v-move','router-view','router-link','active-class','exact','query','selector','offset','savedPosition','$root','beforeEach','scrollBehavior','beforeEnter','beforeRouteEnter','beforeRouteUpdate','beforeRouteLeave',
    'getters',
    'mapGetters',
    'mutations',
    'dispatch',
    'namespaced',
    'interceptors',
  ];
  
  var randoms = [];
  var min = 0
  var max = words.length - 1;

  for(i = min; i <= max; i++){
    while(true){
      var tmp = intRandom(min, max);
      if(!randoms.includes(tmp)){
        randoms.push(tmp);
        console.log(tmp)
        break;
      }
    }
  }

  function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
  }


// ここから固定
  const rank = $('#r-rank')
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

  function colorReset() {
    $(document).keyup(function () {
        target.css('color', '#2c3e50');
    });
  }

  function showResult() {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    const totalScore =  (score - miss * 3) / (second / 60)
    if (totalScore >= 200) {
      rank.append('S');
    } else if (totalScore >= 190) {
      rank.append('A+');
    } else if (totalScore >= 180) {
      rank.append('A');
    } else if (totalScore >= 170) {
      rank.append('A-');
    } else if (totalScore >= 160) {
      rank.append('B+');
    } else if (totalScore >= 150) {
      rank.append('B');
    } else if (totalScore >= 140) {
      rank.append('B-');
    } else if (totalScore >= 130) {
      rank.append('C+'); 
    } else if (totalScore >= 120) {
      rank.append('C'); 
    } else if (totalScore >= 110) {
      rank.append('C-'); 
    } else if (totalScore >= 100) {
      rank.append('D+');
    } else if (totalScore >= 90) {
      rank.append('D');
    } else if (totalScore >= 80) {
      rank.append('D-');
    } else if (totalScore >= 70) {
      rank.append('E+');
    } else if (totalScore >= 60) {
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
      word = words[randoms[0]];
    
      target.text(word).css('color', '#2c3e50').css('font-size', '48px')
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
      $('#code').append(word[loc]);
      loc++;
      if (loc === word.length) {
          $('.li' + number).removeAttr('id', 'code').attr('id', word);
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
});