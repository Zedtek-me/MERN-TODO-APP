const app = require("./app")
const settings = require("./settings")


app.listen(
    settings.PORT, (req, res)=>{
        console.log(`server is listening on port ${settings.PORT}`)
    }
)