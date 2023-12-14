const host = process.env.HOST;
const port = process.env.PORT;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE; 

const config = {
    db: {
        host: host,
        port: port,
        user: user,
        password: password,
        database: database
    }
}
module.exports = config;
