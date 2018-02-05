/**
 * Command: /email
 * =====================
 * Send email to author of blog
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @link:       http://telegraf.js.org/#/?id=command
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
module.exports = function(bot, config, request) {
    /**
     * Command: email
     * =====================
     * Send support email. Example: /email me@email.it | hi patryk
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    function email(ctx) {
        const nodemailer = require('nodemailer');
        let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        let email_array = [];
        let email_from = '';
        let email_text = ctx.update.message.text;
        email_text = email_text.replace("/email ", "");
        email_array = email_text.split("|");
        if (typeof email_array[0] !== "undefined") {
            email_from = (email_array[0]).trim();
        }
        if (typeof email_array[1] !== "undefined") {
            email_text = (email_array[1]).trim();
        }
        if (!email_regex.test(email_from)) {
            ctx.reply("Email non valida, esempio:\n/email your@email.com | text text text text text");
        } else if (typeof email_array[1] === "undefined" || email_text.trim() == "") {
            ctx.reply("Inserisci un testo valido, esempio:\n/email your@email.com | text text text text text");
        } else {
            let smtp_config = {
                host: config.smtp_server,
                port: config.smtp_port,
                secure: config.smtp_ttls,
                auth: {
                    user: config.smtp_user,
                    pass: config.smtp_pass
                }
            };
            let transporter = nodemailer.createTransport(smtp_config);

            var mail_options = {
                from: email_from,
                to: config.smtp_user,
                subject: 'BOT: Email from ' + email_from,
                text: email_text
            };

            transporter.sendMail(mail_options, function(error, info) {
                if (error) {
                    ctx.reply("Errore... " + error);
                    ctx.reply("Riprova usando il formato:\n/email your@email.com | text text text text text");
                } else {
                    ctx.reply("Email inviata :)");
                }
            });
        }
    }
    bot.command('email', email);
};