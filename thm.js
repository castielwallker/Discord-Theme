// ==UserScript==
// @name         ThemesX - By Maad - Definitivo
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Discord Theme
// @author       Maad
// @match        https://discord.com/*
// @icon         https://i.imgur.com/GyjWMYI.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        @import url("https://milbits.github.io/oldcord/src/components/imgs.css");
        @import url("https://milbits.github.io/oldcord/src/components/other.css");
        @import url("https://milbits.github.io/oldcord/src/components/redesign.css");
        @import url('https://DiscordStyles.github.io/DarkMatter/src/base.css');

        /* Fundo personalizado */
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

        /* Barra lateral e elementos */
        .sidebar_e031be, .wrapper__216eb, .itemsContainer_ef3116 {
            height: 100vh !important;
        }

        .scroller_ef3116 {
            max-height: 100vh !important;
            overflow-y: auto !important;
            padding-bottom: 10px;
        }

        /* Now Playing transparente */
        div[class^='nowPlayingColumn'] {
            background-color: transparent !important;
            --background-secondary: transparent !important;
            --background-primary: rgba(var(--md-black), 0.5) !important;
            --background-modifier-hover: rgba(var(--dm-white), 0.075) !important;
        }

        /* Corrigir user panel quebrado e deixar transparente */
        .container__37e49 {
            background-color: transparent !important;
            margin: 0 !important;
            padding: 8px !important;
            width: 100% !important;
            box-sizing: border-box !important;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        /* Guilds nav com opacidade */
        ul[data-list-id='guildsnav'] {
            background-color: rgba(var(--md-black), 0.2) !important;
        }

        /* linked messages & @'s */
        .wrapper_f61d60 {
            font-weight: 500;
            color: #C9CDFB;
            background: #3D4270;
        }


        /* bigger & better reaction emojis */
        .reaction__23977 .reactionInner__23977, .reaction_f8896c.reactionInner_f8896c {
            align-items: center;
            display: flex;
            padding: 0.18rem 0.4rem;
            position: relative;
        }

        .reactionCount__23977 {
            color: var(--interactive-normal);
            font-weight: 500;
            margin-left: .375rem;
            text-align: center;
        }

        .visual-refresh .reaction__23977 {
            background-color: #2e3236 !important;
        }

        .visual-refresh .reaction__23977.reactionMe__23977 {
            box-sizing: border-box;
            background-color: #393D5D !important;
            box-shadow: 0px 0px 0px 1.5px #4752C4 inset;
        }

        .reaction_f8896c.reactionMe_f8896c .reactionCount_f8896c,
        .reaction__23977.reactionMe__23977 .reactionCount__23977 {
            color: var(--text-secondary) !important;
        }

        .reactionLarge.emoji {
            width: 1.25rem;
            height: 1.25rem;
        }

        /* fixes the add reaction button */
        .reactionBtn__23977.forceShow__23977 {
            background-color: var(--background-secondary);
            border: .0625rem solid transparent;
            border-radius: .5rem;
            margin-left: 2px;
            margin-top: -0.7px;
            opacity: 1;
        }

        .reactionBtn__23977.forceShow__23977:hover {
            box-shadow: 0px 0px 0px 1.5px #4752C4 inset;
            border-color: transparent;
            background-color: #393D5D !important;
        }

        .visual-refresh .largeReactionBtn__23977.forceShow__23977 {
            padding: 0.3235rem .44rem;
        }

        .reaction_f8896c, .reaction__23977 {
            border-radius: 8px;
        }

        /* remove linha estranha na sidebar */
        .base_c48ade .sidebar_c48ade { margin-right: -0.007px }
        .visual-refresh .base_c48ade .sidebar_c48ade > .sidebarList_c48ade {
            width: 240.3px;
        }

        /* fix para pronomes ao lado do nome */
        :is(.timestampInline_c19a55) time[aria-label^="Today at"]::before {
            font-size: .75rem;
            line-height: 1.375rem;
        }
        :is(.timestampInline_c19a55) time[aria-label^="Today at"] {
            font-size: 0px;
        }

        body {
            font-family: GG Sans, sans-serif !important;
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

        #app-mount > div:not([class^="appDevToolsWrapper-"]), .autocomplete-1vrmpx {
            background-tertiary: #0c0e12bd;
            background-primary: transparent;
        }

        .menu_d90b3d {
            background: #161921bd;
        }

        .channelInfo_f6f816, .mentionsBadge_e2a798, .iconBase_e2a798,
        .numberBadge_df8943, .base_df8943, .eyebrow_df8943,
        .baseShapeRound_df8943, .lowerBadge_c5f96a {
            background-color: #5799ff !important;
            box-shadow: 0 0 8px #b5cff7, 0 0 12px #3a80f7;
            color: white !important;
            border-radius: 50px;
        }

        .visual-refresh .container__0f2e8 {
            background: transparent !important;
            border: 1px solid var(--border-faint); /* mantém a borda se quiser */
            max-width: calc(var(--custom-member-list-width) - 16px);
        }
        .visual-refresh .container__0f2e8 {
            --background: transparent !important;
            --border: none !important;
            --background: #161921bd;
        }
        .visual-refresh .tabBody__133bf {
           --background-color: transparent;
        }

        .visual-refresh .tabBody__133bf {
           --background-color: transparent;
        }

        div[class^='nowPlayingColumn'] {
            --background-secondary: transparent;
            background-primary: rgba(var(--md-black), 0.0);
        }

        .grid__623de {
            background: #161921bd;
        }

        .visual-refresh .embedFull__623de {
            background: transparent !important;
            border: none !important;
            border-left: none !important;
        }

        .container__7d20c {
            background: transparent !important;
        }

        .privateChannels__35e86 {
            background: #161921bd !important;
        }

        .visual-refresh .sidebarList_c48ade {
            border-left: none !important;
            border-top: none !important;
        }

        .visual-refresh .scroller__99e7c,
        .theme-dark .scroller__99e7c {
            background: transparent !important;
            margin-bottom: 0 !important;
        }
        .visual-refresh .container__2637a {
          background: #161921bd;
         }

        nav.container__2637a {
         background: #161921bd !important;
        }


       .visual-refresh .panels_c48ade, .theme-dark .panels_c48ade {
        background: #161921bd !important;
        border: none !important;
        border-radius: 0px !important;
        padding: 6px !important;
       }

      .visual-refresh .panels_c48ade {
        width: 100% !important;
       }
      .header_f37cb1 {
        border-radius: 0 !important;
      }

  `);

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

    const observer = new MutationObserver(removeNotification);
    observer.observe(document.body, { childList: true, subtree: true });
})();
