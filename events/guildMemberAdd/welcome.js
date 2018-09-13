const info = 'This is a channel for new members; you\'ll be able to see the main chat once a'
  + ' staff member approves you. We do this to avoid unwanted people from joining and we might'
  + ' ask you a few questions if needed. Make sure to read any important information once you\'re in.'

module.exports = function (guild, member) {
  let welcomeChannel = guild.channels.get('489571655396491266')
  let embed = {
    description: `Hello <@${member.id}>, welcome to **Electro2001's Cafe**!\n\n${info}`,
    color: 0xF1C40F,
    timestamp: new Date().toISOString(),
    footer: {
      icon_url: member.avatarURL,
      text: `${member.user.username}#${member.user.discriminator} (${member.id})`
    }
  }
  welcomeChannel.createMessage({ embed })
}
