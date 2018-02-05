module.exports = {
    // Node Config
    "debug": false,

    // Telegram API
    "bot_username": "ptkdev_bot",
    "bot_token": "123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ",

    // Bot Config
    "bot_stats": false,  // enable statistics - save username who use bot and otehr stats in sql-lite db

    // Wordpress API config
    "wp_total_feed": 5, // total items of command /lastpost

    //SMTP Server
    "smtp_user": "bot@ptkdev.io",
    "smtp_pass": "password",
    "smtp_server": "smtp.ptkdev.io",
    "smtp_port": 587,
    "smtp_ttls": false,

    // Webhook
    "webhook": false,
    "webhook_port": 3000,
    "webhook_host": "https://XXXXXXXXX.localtunnel.me",
    "webhook_secretpath": "/secret-path"
}