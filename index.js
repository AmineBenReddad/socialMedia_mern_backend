import express from 'express'
import 'dotenv/config'
import mysql from 'mysql2'
const app = express()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    port: 3301
})

pool.query("SELECT * FROM users", (err, results) => {
    //handle query
    if(err){
        console.error("Error executing the query", err)
    }
    else {
        console.log("Query results:", results);
    }
})




app.listen(8000, () => {
    console.log("Server is listening!");
})