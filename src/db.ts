import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "admin",
  password: "secret",
  port: 5432,
  database: "typeorm_db",
  entities: [User],
  logging: true,
  synchronize: true,
});
