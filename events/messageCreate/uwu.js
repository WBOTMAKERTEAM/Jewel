module.exports = function (message) {
  if (!message.author.bot && message.content === 'uwu')
    message.channel.createMessage('uwu')
}
