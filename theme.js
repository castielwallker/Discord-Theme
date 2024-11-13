// ==UserScript==
// @name         Theme Satoru Gojo - Darker
// @namespace    http://tampermonkey.net/
// @version      3.0.0
// @description  Change Dark Matter for Satoru Theme
// @author       Maad
// @match        https://discord.com/*
// @icon         https://i.imgur.com/GyjWMYI.png
// @grant        GM_addStyle
// @source       https://github.com/DiscordStyles/DarkMatter/
// ==/UserScript==

(function() {
    'use strict';

    // Importando o CSS do tema Dark Matter
    GM_addStyle(`
        @import url('https://DiscordStyles.github.io/DarkMatter/src/base.css');

        /* Variables */
        :root {
            --avatar-size: 32px;
            --background-image: url('https://i.imgur.com/w1rStjv.jpeg');
            --home-image: url('https://i.imgur.com/233d55Y.gif');
            --background-solid: #1619216e;
            --background-solid-dark: #1619216e;
            --background-solid-darker: #1619216e;
            --accent: 37, 172, 232;
            --accent-alt: 29, 101, 134;

           #app-mount>div:not([class^="appDevToolsWrapper-"]), .autocomplete-1vrmpx {
            background-tertiary: #0c0e12bd;
           }
           .menu_d90b3d{
            background: #161921d4;
           }
          #app-mount>div:not([class^="appDevToolsWrapper-"]), .autocomplete-1vrmpx {
           background-primary: transparent;

        }
    `);

        // Função para remover as notificações e ajustar o espaço
    function removeNotification() {
        const notificationContainer = document.querySelector('.container_fa295b');
        const channelNotice = document.querySelector('.channelNotice_f013f3');

        if (notificationContainer) {
            notificationContainer.style.display = 'none';
            notificationContainer.style.marginBottom = '0';
        }

        if (channelNotice) {
            channelNotice.style.display = 'none';
            channelNotice.style.marginBottom = '0';
        }
    }

    // Observa mudanças no DOM para detectar o carregamento das notificações
    const observer = new MutationObserver(removeNotification);
    observer.observe(document.body, { childList: true, subtree: true });


    const style = document.createElement('style');
    style.innerHTML = `
        .channelInfo_f6f816, .mentionsBadge_e2a798, .iconBase_e2a798,
        .numberBadge_df8943, .base_df8943, .eyebrow_df8943,
        .baseShapeRound_df8943, .lowerBadge_c5f96a {
            background-color: #5799ff !important; /* Azul */
            box-shadow: 0 0 8px #b5cff7, 0 0 12px #3a80f7; /* Glow */
            color: white !important; /* Texto em branco */
            border-radius: 50px
        }
    `;
    document.head.appendChild(style);
})();
