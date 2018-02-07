/**
 * Command: /lastpost
 * =====================
 * Request feed rss of blog 
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
     * Command: /lastpost
     * =====================
     * Command request last post, read /feed/ path from wordpress
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    function lastpost(ctx) {
        let xml2js = require('xml2js').parseString;

        request(config.wp_url +'/feed/', function(error, response, xml) {
            if (error)
                return error;

            xml2js(xml, function(err, json) {
                for (let i = 0; i < config.wp_total_feed && i < json.rss.channel[0].item.length; i++) {
                    let url = json.rss.channel[0].item[i].link[0].replace("'", "");
                    ctx.reply(url);
                }
            });
        });
    }
    bot.command(translations.command_lastpost, lastpost);

};