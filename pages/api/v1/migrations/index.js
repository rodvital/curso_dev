import migrationsRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  const defaultMigrationOptions = {
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };

  if (request.method === "GET") {
    const pendingMigrations = await migrationsRunner(defaultMigrationOptions);
    return response.status(200).json(pendingMigrations);
  }

  if (request.method === "POST") {
    const migrateMigrations = await migrationsRunner({
      ...defaultMigrationOptions,
      dryRun: false,
    });
    if (migrateMigrations.length > 0) {
      return response.status(201).json(migrateMigrations);
    }
    return response.status(200).json(migrateMigrations);
  }

  return response.status(405).end();
}
