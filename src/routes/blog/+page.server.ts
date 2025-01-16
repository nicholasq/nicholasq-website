import { defaultDatabase } from "$lib/db.ts";

export const load = async () => {
  const db = defaultDatabase();
  const posts = await db.findAll();

  return { posts };
};
