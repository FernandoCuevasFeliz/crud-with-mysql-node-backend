import dotEnv from 'dotenv'
dotEnv.config()

const { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const port = PORT || 3000

const dbConfig = {
  host: DB_HOST || 'localhost',
  user: DB_USER || 'root',
  password: DB_PASSWORD || '',
  database: DB_NAME || 'db_test',
}

const OK = 200
const BAD_REQUEST = 400
const NOT_FOUND = 404
const INTERNAL_SERVER_ERROR = 500

export { port, dbConfig, OK, BAD_REQUEST, NOT_FOUND, INTERNAL_SERVER_ERROR }
