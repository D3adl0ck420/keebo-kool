// require the discord.js module
const Discord = require('discord.js');

// prerequisites for later commands
const config = require('./config.json');
const { prefix, token, quotes, fidel, bohoDatabase, video } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('guildMemberAdd', member => {
	console.log('User' + member.user.tag + 'has joined the server!');

	const role = member.guild.roles.find('name', 'user');
	member.addRole(role);
});

client.on('message', message => {

	const args2 = message.content.slice();
	const command2 = args2.toLowerCase();

	if (command2 === 'keebo kool') {
		// Need to figure out how to send message because of the presence of the words "Keebo Kool"
		message.channel.send('Do not summon me peasant!');
	}

	if (command2 === 'goodnight') {
		message.channel.send('Goodnight, burn in hell.');
	}
	if (command2 === 'keebo') {
		// See above
		message.channel.send('Fuck off.');
	}

	if (command2 === 'i love you') {
		// Same thing as the other ones
		message.reply('Faggot');
	}

	if (command2 === 'good shit') {
		message.channel.send('what type of fucking retard do you have to be to believe shit is good??!');
	}

	if (message.isMentioned('@Keebo Kool#3141') === 1) {
		// This one needs a lot of work
		message.channel.send('Fuck you');
	}

	if (command2 === 'keebo kool, may you appear before us') {
		// This is hella gay, but it's fun lol
		message.channel.send('no');
	}

	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'help') {
		// eslint-disable-next-line no-useless-escape
		message.channel.send('```css\nHere\'s all the commands!\n    help: Self-explanatory, unfortunately doesn\'t provide therapy\n    funni: Gives a funni quote\n    video: Shamelessly promotes one of our videos\n    fidel: Gives a big funny fidel pic\n    boho: Gives info abut our website. Add a boho\'s name after the command to learn more about the boho(ex: !boho kini)\n    name: I give my name\n    todd: The forbidden command.\n    server: Gives the server info!\n    info: I give you my info, including social security number, passwords, etc.\n    avatar: Sends back the user\'s avatar. Tag another user at the end to get their avatar(ex: !avatar @D3adl0ck#7175)\n    user: Gives the user their info. Tag another user to get their info(ex: !user @Keebo Kool#3141)\n```');
	}
	if (command === 'funni') {
		const funni = Math.floor(Math.random() * (quotes.length));
		const randomElement = quotes[funni];
		message.channel.send(randomElement);
	}

	if (command === 'name') {
		// send back a thingy to the channel the message was sent in
		message.channel.send('My name is Keebo Kool');
	}

	if (command === 'todd') {
		// send back a thingy to the channel the message was sent in
		message.channel.send('Fuck Todd the God');
	}

	if (command === 'info') {
		// send back a thingy to the channel the message was sent in
		message.channel.send('This bot is in Version 1.0.2.3\n@D3adl0ck#7175 made this bot');
	}

	if (command === 'server') {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}

	if (command === 'user') {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
	if (command === 'user-info') {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
	if (command === 'userinfo') {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}

	if (command === 'fidel') {
		const castro = Math.floor(Math.random() * (fidel.length));
		const randomMissile = fidel[castro];
		message.channel.send(randomMissile);
	}

	if (command === 'video') {
		const bigfunnyvids = Math.floor(Math.random() * (video.length));
		const thebestfunnyvids = video[bigfunnyvids];
		message.channel.send(thebestfunnyvids);
	}

	if (command === 'boho') {
		if (!args.length) {
			return message.channel.send('http://bohos.bigbohos.com\nAdd a boho\'s name at the end of\n the !boho command to see their info!');
		}
		else if (args[0] === bohoDatabase) {
			return message.channel.send('yeet');
		}

		message.channel.send(`${args[0]} isn't a boho!`);
	}

	if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
		});

		// send the entire array of strings as a message
		// by default, discord.js will `.join()` the array with `\n`
		message.channel.send(avatarList);
	}

});

// login to Discord with your app's token
client.login(config.token);
client.login(token);