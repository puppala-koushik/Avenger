const languageData = {
	// SUCCESS
	LANGUAGE_SET: (language) => `Language has been set to \`${language}\`.`,
	LEVEL_SET: (option) => `Level plugin has been set to \`${option}\`.`,
	MODERATION_SET: (option) => `Moderation plugin has been set to \`${option}\`.`,
	MUSIC_SET: (option) => `Music plugin has been set to \`${option}\`.`,
	NSFW_SET: (option) => `NSFW plugin has been set to \`${option}\`.`,
	SEARCH_SET: (option) => `Search plugin has been set to \`${option}\`.`,
	LOGS_SET: (option) => `Logging plugin has been set to \`${option}\`.`,
	PREFIX_SET: (newprefix) => `Prefix has been set to \`${newprefix}\`.`,
	// error message
	MISSING_LANGUAGE: 'هیچ زبانی انتخاب نشده است.',
	NO_LANGUAGE: 'این هنوز زبانی نیست که من از آن پشتیبانی کنم.  چرا با عضویت در اینجا به من در یادگیری آن زبان کمک نمی کنید: https://discord.gg/MsJ99j5Bcv',
	// other success messages
	LOG_CHANNEL: (channelID) => `Logging channel updated to: <#${channelID}>`,
	PREFIX_LENGTH: 'Please ensure the prefix is no larger than 3 characters',
};

const translate = (key, args) => {
	const translation = languageData[key];
	if (typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
