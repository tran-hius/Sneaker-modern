import mysql, { Pool } from "mysql2/promise";
import { env } from "./env.js";

export class Database {
  private static instance: Database | null = null;
  private readonly pool: Pool;

  private poolOptions = {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    timezone: "Z",
  };

  private constructor() {
    this.pool = mysql.createPool(this.poolOptions);
  }

  public static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getPool(): Pool {
    return this.pool;
  }

  public async disconnect(): Promise<void> {
    await this.pool.end();
  }
}
