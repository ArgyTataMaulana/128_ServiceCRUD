import express from 'express'
import pg from 'pg'

const app = express()
const port = 3000

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pertemuan5',
    password: 'Satoru12345',
    port: 5432, 
})