const NODE_ENV = process.env.NODE_ENV

const MONGODB_URI = NODE_ENV === 'test'
  ? 'mongodb://localhost:27017/test_cronos_app'
  : (process.env.MONGODB_URI || 'mongodb://localhost:27017/dev_cronos_app')

module.exports = {
  NODE_ENV,
  MONGODB_URI
}
