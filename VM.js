Consular-Script

// ==UserScript==
// @name        Consular-Script
// @namespace   Violentmonkey Scripts
// @match       https://www.usvisascheduling.com/en-US/schedule/
// @grant       none
// @version     1.0
// @author      -
// @description 12/25/2023, 12:01:58 PM
// ==/UserScript==
javascript:(function () {
  window.onload = function() {
      var script = document.createElement('script');
      var whichScript = prompt("Choose one task { 1. Consular Random , 2. Consular Fixed}");
      if (whichScript == 1){
          script.src = 'https://aditya4478.github.io/Visa-Scheduling-Script/cr.js';
      }else if(whichScript == 2){
          script.src = 'https://aditya4478.github.io/Visa-Scheduling-Script/cf.js';
      }
      document.head.appendChild(script);
  };
})();


OFC script

// ==UserScript==
// @name        OFC Script
// @namespace   Violentmonkey Scripts
// @match       https://www.usvisascheduling.com/en-US/ofc-schedule/*
// @grant       none
// @version     1.0
// @author      -
// @description 1/1/2024, 8:41:30 PM
// ==/UserScript==
javascript:(function () {
    window.onload = function() {
      var script = document.createElement('script');
      var whichScript = prompt("Choose one task { 1. OFC Random , 2. OFC Fixed}");
      if (whichScript == 1){
          script.src = 'https://aditya4478.github.io/Visa-Scheduling-Script/or.js';
      }else if(whichScript == 2){
          script.src = 'https://aditya4478.github.io/Visa-Scheduling-Script/of.js';
      }
      document.head.appendChild(script);
    };
  })();
