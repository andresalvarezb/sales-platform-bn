const db = require("mongoose");

db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "sale-platform",
    });
    console.log("[db] Susses Connect");
  }

  module.exports = connect;
