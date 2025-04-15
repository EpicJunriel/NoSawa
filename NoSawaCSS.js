// ==UserScript==
// @name         NoSawaCSS
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fix CSS.
// @match        https://s4wa.hatenadiary.jp/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`

        * {
            background-color: unset !important;
            color: unset !important;
            padding: unset;
            margin: unset;
            line-height: unset;
            position: unset;
            right: unset;
            writing-mode: unset;
        }

        #content {
            background-color: #fff !important;
            color: #3d3d3d !important;
            width: 900px !important;
            margin: 0 auto !important;
            position: static !important;
        }

        img:not(.hatena-fotolife) {
            visibility: visible;
        }

    `);
    console.log('*applying fixed CSS...*');

})();
