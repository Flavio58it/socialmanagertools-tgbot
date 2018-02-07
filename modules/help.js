/**
 * Commands
 * =====================
 * Write slash / and see commands of bot
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @link:       http://telegraf.js.org/#/?id=command
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
module.exports = function(bot, config, request, translations) {
    /**
     * Command: /help
     * =====================
     * Command request last post, read /feed/ path from wordpress
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    function help(ctx) {
        ctx.reply(translations.command_help_text);
    }
    bot.command(translations.command_help, help);

};