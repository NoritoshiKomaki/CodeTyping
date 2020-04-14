// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery

// 共通の変数、定数
let word;
let loc;
let score;
let miss;
let startTime;
let timeoutId;
let isPlaying = false;
let num = 0;
let elapsedTime = 0;

const tab2 = '&nbsp;&nbsp;&nbsp;&nbsp;';
const tab3 = tab2 + '&nbsp&nbsp';
const tab4 = tab3 + '&nbsp&nbsp';
const tab5 = tab4 + '&nbsp&nbsp';
const tab6 = tab5 + '&nbsp&nbsp';