import pgPromise from "pg-promise"

const pgp = pgPromise();

const db = pgp({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_DATABASE
});

export default db