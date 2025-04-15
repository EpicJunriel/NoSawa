// ==UserScript==
// @name         NoSawa
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Disable and cleanup UltimateChaos and jumpscare.
// @match        https://s4wa.hatenadiary.jp/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.tagName === 'SCRIPT') {
                    if (node.textContent.includes('startUltimateChaos') ||
                        node.textContent.includes('location.href = "https://www.youtube.com/watch?v=ctAD9nvVFmU"')) {
                        node.remove();
                        console.log('*sawa was slain by junriel*');
                    }
                }
            });
        });
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });

    window.addEventListener('load', () => {
        const troll = function() {
            location.href = "https://www.youtube.com/watch?v=ctAD9nvVFmU";
        };

        const allElements = document.querySelectorAll('*');
        allElements.forEach((el) => {
            el.removeEventListener('click', troll);

            if (['SCRIPT', 'STYLE', 'META', 'LINK'].includes(el.tagName)) return;
            if (el.style.position === 'absolute') el.style.position = '';
            if (el.style.zIndex === '9999') el.style.zIndex = '';
            if (el.style.transition === 'transform 0.2s ease') el.style.transition = '';
            if (el.style.transform) el.style.transform = '';
            if (el.style.color && el.style.color.includes('hsl')) el.style.color = '';
        });

        const maxIntervalId = 99999;
        for (let i = 1; i < maxIntervalId; i++) {
            window.clearInterval(i);
        }

        console.log('*sawa\'s corpse was cleaned up by junriel*');
    });
})();
