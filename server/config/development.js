module.exports = {
  logging: true,
  seed: false,
  db: {
    url: `mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@testcluster-jcqs6.mongodb.net/test?retryWrites=true&w=majority`
  },
  dbSettings: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
};
