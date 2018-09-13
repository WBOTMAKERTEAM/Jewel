let e = module.exports = {}

const redis = require('redis')
Promise.promisifyAll(redis)

e.init = function (Bot) {
  if (!process.env.REDIS_PORT) return
  let r = redis.createClient(process.env.REDIS_PORT)
  r.on('error', err => {
    return Bot.util.logger.error('REDIS', err.message)
  })
  r.on('connect', () => {
    Bot.util.logger.log('REDIS', 'Connected to database')
  })
  Bot.db = r
}
