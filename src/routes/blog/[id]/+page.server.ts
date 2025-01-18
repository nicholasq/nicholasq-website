import { defaultDatabase } from "$lib/server/db";

export const load = async ({ params }) => {
  const db = defaultDatabase();
  const post = await db.findById(Number(params.id));

  return { post };
};

export const entries = async () => {
  const db = defaultDatabase();
  const posts = await db.findAll();

  return posts.map((post) => ({ id: String(post.id) }));
};
