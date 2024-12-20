require("dotenv").config()


module.exports = config = {
    mongodb: {
        url: process.env.MONGODB_CONNECTION_URL,
        databaseName: "todo_app",
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    migrationsDir: "todo_migrations",
    changeLogCollectionName: "changelog",
    migrationFileExtension: ".js",
    useFileHash: false
}


