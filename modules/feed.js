/**
 * Request feed rss
 * =====================
 * Check feed rss wordpress in loop
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
module.exports = function(bot, config, db, request, translations) {
    /**
     * Update database last url
     * =====================
     * Update last url for not receive same notify. Send url post if user not see it.
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    function check_database(json){
        let sleep = require('system-sleep');
        db.serialize(function() {
            let limit = 0;
            db.each("SELECT rowid AS id, chat_id, last_url FROM users", function(err, row) {
                let last_url = null;
                let chat_id = null;
                let i = 0;
                for (i = 0; i < config.wp_total_feed && i < json.rss.channel[0].item.length; i++) {
                    let url = json.rss.channel[0].item[i].link[0].replace("'", "");
                    if(i == 0){
                        last_url = url;
                        chat_id = row.chat_id;
                    }
                    if(url == row.last_url)
                        break;

                    bot.telegram.sendMessage(row.chat_id, url);
                    limit++;

                    if(limit >= 29){ // bug: https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once
                        sleep(1000);
                        limit = 0;
                    }
                }

                if(i > 0){
                    db.run("UPDATE users SET last_url = ? WHERE chat_id = ?", last_url, chat_id);
                }
            });
        });
    }

    /**
     * Parser xml
     * =====================
     * Read /feed/ path from wordpress
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    function feed_parser() {
        let xml2js = require('xml2js').parseString;

        request(config.wp_url +'/feed/', function(error, response, xml) {
            if (error)
                return error;

            xml2js(xml, function(err, json) {
                check_database(json);
            });
        });
    }
    
    setInterval(function() { feed_parser(); }, config.wp_check_timeout * 1000);

};
