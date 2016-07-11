var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'app'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URL || 'mongodb://mongo/app-development',
    redis: {
      host: process.env.REDIS_HOST || "redis",
      port: process.env.REDIS_PORT || 6379,
    },
    session_secret: process.env.SESSION_SECRET || "not secure"
  },

  test: {
    root: rootPath,
    app: {
      name: 'app'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URL || 'mongodb://mongo/app-test',
    redis: {
      host: process.env.REDIS_HOST || "redis",
      port: process.env.REDIS_PORT || 6379,
    },
    session_secret: process.env.SESSION_SECRET || "not secure"
  },

  production: {
    root: rootPath,
    app: {
      name: 'app'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URL || 'mongodb://mongo/app-production',
    redis: {
      host: process.env.REDIS_HOST || "redis",
      port: process.env.REDIS_PORT || 6379,
    },
    session_secret: process.env.SESSION_SECRET || "not secure"
  }
};

module.exports = config[env];
