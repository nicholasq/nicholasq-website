import { defaultDatabase } from "$lib/server/db.ts";

export const load = async ({ params }) => {
  const db = defaultDatabase();
  const post = await db.findById(Number(params.id));

  return { post };
};
