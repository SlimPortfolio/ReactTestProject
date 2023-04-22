import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getData() {
    // creates a variables called rows and gets the first element in that array
    const [rows] = await pool.query("SELECT * FROM event_data")
    return rows
}

const result = {"title":"Basketball Game","description":"Watch David take down the Gilstads"}
console.log(result)
