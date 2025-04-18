// ==UserScript==
// @name         ThemesX - By Maad - X
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Discord Theme
// @author       Maad
// @match        https://discord.com/*
// @icon         https://i.imgur.com/GyjWMYI.png
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     imgs.css https://raw.githubusercontent.com/castielwallker/Discord-Theme/main/imgs.css
// @resource     other.css https://raw.githubusercontent.com/castielwallker/Discord-Theme/main/other.css
// @resource     redesign.css https://raw.githubusercontent.com/castielwallker/Discord-Theme/main/redesign.css
// @resource     theme.css https://raw.githubusercontent.com/castielwallker/Discord-Theme/main/theme.css
// @require      https://raw.githubusercontent.com/castielwallker/Discord-Theme/main/thm.js
// ==/UserScript==

(function() {
    'use strict';

    // Importando os CSS externos
    const imgsCSS = GM_getResourceText("imgs.css");
    const otherCSS = GM_getResourceText("other.css");
    const redesignCSS = GM_getResourceText("redesign.css");
    const themeCSS = GM_getResourceText("theme.css");

    // Aplicando os estilos
    GM_addStyle(imgsCSS);
    GM_addStyle(otherCSS);
    GM_addStyle(redesignCSS);
    GM_addStyle(themeCSS);

    // Variáveis customizáveis
    GM_addStyle(`
        body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            background-image: url('https://i.imgur.com/UqIc3Hp.jpeg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 1;
            pointer-events: none;
        }

        :root {
            --avatar-size: 32px;
            --home-image: url('https://i.imgur.com/233d55Y.gif');
            --background-solid: #1619216e;
            --background-solid-dark: #1619216e;
            --background-solid-darker: #161921bd;
            --accent: 37, 172, 232;
            --accent-alt: 29, 101, 134;
        }

        .channelInfo_f6f816, .mentionsBadge_e2a798, .iconBase_e2a798,
        .numberBadge_df8943, .base_df8943, .eyebrow_df8943,
        .baseShapeRound_df8943, .lowerBadge_c5f96a {
            background-color: #5799ff !important;
            box-shadow: 0 0 8px #b5cff7, 0 0 12px #3a80f7;
            color: white !important;
            border-radius: 50px
        }
    `);
})();
