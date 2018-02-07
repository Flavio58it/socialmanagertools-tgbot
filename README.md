<p align="center"><a href="https://wordpress-telegram-bot.js.ptkdev.io" alt="Screenshot"><img src="https://ptkdev.it/img/bot/wordpress-telegram-bot.js.png"></a></p>

<p align="center"><h1 align="center">WordpressTelegramBot.js</h1></p>

<p align="center"><a href="#" alt="License"><img src="https://img.shields.io/badge/license-GLPv3-brightgreen.svg"></a>
<a href="https://github.com/telegraf/telegraf" alt="powered by telegraf"><img src="https://img.shields.io/badge/powered%20by-telegraf-46aef7.svg"></a>
<a href="https://github.com/social-manager-tools/wordpress-telegram-bot.js/releases" alt="Version"><img src="https://img.shields.io/badge/version-v0.1-lightgrey.svg"></a>
<a href="http://t.me/smodatamentebot" alt="Try bot"><img src="https://img.shields.io/badge/try%20bot-smodatamente-blue.svg"></a>
<a href="https://slack.ptkdev.io" alt="Slack Chat"><img src="https://img.shields.io/badge/chat%20on-Slack-orange.svg"></a>
<a href="https://paypal.me/ptkdev" alt="Paypale Donate"><img src="https://img.shields.io/badge/donate-PayPal-red.svg"></a>
<a href="mailto:support@ptkdev.io" alt="Support: support@ptkdev.io"><img src="https://img.shields.io/badge/help-support@ptkdev.io-fbbc05.svg"></a></p>

# What does he do
News feed on telegram for your wordpress blog. 

# Features
* [✓] Easy to use
* [✓] Multi-Session
* [✓] Multi-Language (Italian and English)
* [✓] Multi-Platform (Windows 10, Mac OSX, Linux)
* [✓] Personalizable
* [✓] Custom commands
* [✓] Email contact form
* [✓] Database with user information
* [✓] No wordpress-plugin required
* [✓] No wordpress-mysql user/pass required
* [✓] Wordpress news feed on telegram bot

# Fast setup
1. Create a bot via [@BotFather](https://t.me/BotFather) and grab a **token**. 
2. Personalize your bot with @botfather, use `/setname` `/setdescription` `/setuserpic` `/setabouttext`
3. Set commands with @botfather, use `/setcommands`. 

If you set english language in `config.js` send:
```
lastpost - show new posts of blog
email - contact me
help - show commands of bot
credits - info of bot
```
If you set italian language in `config.js` send:
```
ultimipost - mostra gli ultimi post pubblicati
email - contattaci con un'email
aiuto - mostra la lista di comandi del bot
crediti - informazioni sul bot
```
4. Download [stable version](https://github.com/social-manager-tools/wordpress-telegram-bot.js/releases) and extract it.
5. Download [Node.js](https://nodejs.org/) >= 7.6 and install it.
6. Run `npm install` in `wordpress-telegram-bot.js` folder.
7. Copy root file `config.js.tpl` to `config.js`, fill it properly.
8. Start the bot via `node bot.js`
9. If work add star :star: at this project :heart:
10. Please not delete `/credits` commands, if you need delete it contact me.

## ATTENTION
Not delete /database/users.db on update of bot, users.db save information of users and what is last url readed from user.

## Commands
Command                 | Role       | Available at | Description
----------------------- | ---------- | ------------ | -----------------
`<loop check>`          | _Everyone_ | _Everywhere_ | Check new post and send at user who not read it
`/lastpost`             | _Everyone_ | _Everywhere_ | Send last 5 post of blog
`/credits`              | _Everyone_ | _Everywhere_ | Credits of bot
`/email <text>`         | _Everyone_ | _Everywhere_ | Send email to email in config.js
`/help` \| `/start`     | _Everyone_ | _In-Bot_     | How to use the bot.

Create new commands in `/modules/custom.js`

# TODO
Nice to have:
* docker container

# Sorry for snake_case
I love snake_case syntax sorry for this :sob: don't hate me.

<p align="center"><a href="https://github.com/social-manager-tools" alt="Screenshot"><img src="https://ptkdev.it/img/bot/social-manager-tools.png"></a></p>
<p align="center"><h1 align="center">Social Manager Tools</h1></p>

<p align="center">Available:<br />
<a href="https://github.com/social-manager-tools/instagram-bot.js">InstagramBot.js</a> (<a href="https://github.com/social-manager-tools/instagram-bot-gui.js">GUI</a>)<br />
<a href="https://github.com/social-manager-tools/wordpress-telegram-bot.js">TelegramWordpressBot.js</a></p>

<p align="center">Coming soon:<br />
<a href="https://github.com/social-manager-tools/twitter-bot.js">TwitterBot.js</a><br />
<a href="https://github.com/social-manager-tools/facebookpage-bot.js">FacebookPageBot.js</a></p>

<p align="center"><h1 align="center">License</h1></p>

<p align="center">GNU GENERAL PUBLIC LICENSE</p>

<p align="center">Copyright (c) 2018 Patryk Rzucidło (PTKDev)</p>
