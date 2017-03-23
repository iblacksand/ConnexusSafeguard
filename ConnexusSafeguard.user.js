// ==UserScript==
// @name         Connexus Safeguard
// @namespace    https://iblacksand.github.io/post/ConnexusSafeguard/
// @version      0.3
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
    var elems = document.getElementsByClassName("lessonTreeNode");
    var confirmIt = function (e) {
        if (!confirm('Are you sure?')) e.preventDefault();
    };
    for (var i = 0, l = elems.length; i < l; i++) {
        elems[i].addEventListener('click', confirmIt, false);
    }
}, false);
})();