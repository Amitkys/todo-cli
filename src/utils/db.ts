import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import path from "path";
import fs from "fs";

type Task = {
  id: number;
  task: string;
  completed: boolean;
};

type Database = {
  tasks: Task[];
};

// ✅ Store db.json inside the utils folder
const filePath = path.join(__dirname, "db.json");

// ✅ Ensure the utils folder and db.json file exist
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify({ tasks: [] }, null, 2));
}

const adapter = new JSONFile<Database>(filePath);
const db = new Low(adapter, { tasks: [] });

// Read the database
export async function getDb(): Promise<Database> {
  await db.read();
  return db.data;
}

// Save the database
export async function saveDb(data: Database): Promise<void> {
  db.data = data;
  await db.write();
}
