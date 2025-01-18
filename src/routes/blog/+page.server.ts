import { defaultDatabase } from "$lib/server/db";

export const load = async () => {
  const db = defaultDatabase();
  const posts = await db.findAll();

  return { posts };
};
