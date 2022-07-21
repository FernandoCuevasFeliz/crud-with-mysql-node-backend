import { createPool } from 'mysql2/promise'
import { dbConfig } from '../config'

export const connectionDB = createPool(dbConfig)
