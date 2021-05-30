import dotenv from "dotenv"
import mongodb from "mongodb"
import app from "./server.js"
// import RestaurantsDAO from "./dao/restaurantsDAO.js"
// import ReviewsDAO from "./dao/reviewsDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000
MongoClient.connect(
  process.env.RESTREVIEWS_DB_URI,
  {
    poolSize: 50,
    wtimeout: 2500,
    useNewUrlParse: true
  }
)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    // await RestaurantsDAO.injectDB(client)
    // await ReviewsDAO.injectDB(client)
    // var dbo = client.db(process.env.RESTREVIEWS_DB_URI)
    // dbo.createCollection("testo", (err, res) => {

    //   if (err)
    //     console.log("fse");
    //   //   console.log("Collection created!");
    // })

    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })