import { getDb, saveDb } from "../utils/db";

export async function addTask(task: string) {
  const db = await getDb();
  db.tasks.push({ id: db.tasks.length + 1, task, completed: false });
  await saveDb(db);
  console.log(`Added task: ${task}`);
}
