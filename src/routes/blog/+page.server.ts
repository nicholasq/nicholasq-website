import { defaultDatabase } from "$lib/server/db.ts";

export const load = async () => {
  const db = defaultDatabase();
  const posts = await db.findAll();

  return { posts };
};
