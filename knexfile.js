const isTestEnv = process.env.NODE_ENV === 'test'

const envs = {
  default: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: isTestEnv ? './db.test.sqlite3' : './db.sqlite3',
    },
  },
}

module.exports = envs.default