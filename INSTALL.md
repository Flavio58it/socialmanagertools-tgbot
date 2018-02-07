# Setup
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