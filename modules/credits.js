/**
 * Command: /credits
 * =====================
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
     * Command: /credits
     * =====================
     * Copyright and license
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    function credits(ctx) {
         ctx.reply(translations.command_credits_url);
         ctx.reply(translations.command_credits_text);
    }
    bot.command(translations.command_credits, credits);

};