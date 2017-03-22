// ==UserScript==
// @name         Connexus Safeguard
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Protects yourself from accidently refreshing the page or clicking a lesson that changes the page. 
// @author       John Elizarraras
// @include      https://www.connexus.com/content/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    window.onbeforeunload = function(){
  return 'Are you sure you want to leave?';
};
    var x = document.getElementsByClassName("lessonTreeNode");
    for(var i = 0, max = x.length; i < max; i++)x[i].addEventListener('click', function() {
    return confirm('Are you sure you want to leave?');
}, false);
})();