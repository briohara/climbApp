module.exports = {
  logging: true,
  seed: false,
  db: {
    url: "mongodb://localhost/climb-app"
  },
  dbSettings: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
};
