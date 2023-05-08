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

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function postData(title, description) {
    // const sql = "INSERT INTO event_data(event_title, event_description)  VALUES ('" + title + "', '" + description + "')"
    const sql = "INSERT INTO event_data(event_title, event_description)  VALUES (" + title + ", " + description + ")"
    connection.query(sql) 
    // connection.query("INSERT INTO event_data(event_title, event_description)  VALUES ('Sean Kingston Concert', 'Mr. Kingston is back to rock the house to the ground')") 
    console.log("post to db successful")   
}

export async function executeLogin(username, password) {
    //database function to check if username/password exists, outputs success or failure in login
    const sql = "SELECT*FROM users where username = " + username +" AND password = " + password + ";";
    const [test] = await connection.query(sql);
    if(test.length > 0) {
        console.log("login successful")
    } else {
        console.log("login failed")
    }
}