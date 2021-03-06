var debug = require('debug')('botkit:incoming_webhooks');

module.exports = function(webserver, controller) {

    debug('Configured POST /ciscospark/receive url for receiving events');
    webserver.post('/webexteams/receive', function(req, res) {

        // NOTE: we should enforce the token check here

        // respond to Slack that the webhook has been received.
        res.status(200);
        res.send('ok');

        var bot = controller.spawn({});
	if (bot && bot.botkit && bot.botkit.identity) {
        	if (bot.botkit.identity.id != req.body.data.personId) {
        		// Now, pass the webhook into be processed
        		controller.handleWebhookPayload(req, res, bot);
		}
        }

    });

}
