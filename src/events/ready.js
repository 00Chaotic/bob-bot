const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready to accept commands. Logged in as ${client.user.tag}`);
	},
};