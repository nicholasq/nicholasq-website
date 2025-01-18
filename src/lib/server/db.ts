import { type Client, createClient } from "@libsql/client";
import { DB_URL } from "$env/static/private";

const dbUrl = DB_URL;

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  pubDate: string;
  content: string;
}

export interface Database {
  findAll(): Promise<BlogPost[]>;
  findById(id: number): Promise<BlogPost>;
  findMostRecent(count: number): Promise<BlogPost[]>;
}

export class Db implements Database {
  constructor(private client: Client) {}

  async findAll(): Promise<BlogPost[]> {
    const result = await this.client.execute("SELECT * FROM blog");
    return result.rows as unknown as BlogPost[];
  }

  async findById(id: number): Promise<BlogPost> {
    const result = await this.client.execute({
      sql: "SELECT * FROM blog WHERE id = ?",
      args: [id]
    });

    if (result.rows.length === 0) {
      throw new Error(`BlogPost with id ${id} not found`);
    }

    return result.rows[0] as unknown as BlogPost;
  }

  async findMostRecent(count: number): Promise<BlogPost[]> {
    const result = await this.client.execute({
      sql: "SELECT * FROM blog ORDER BY id DESC LIMIT ?",
      args: [count]
    });

    if (result.rows.length === 0) {
      throw new Error(`BlogPost with id ${count} not found`);
    }

    return result.rows as unknown as BlogPost[];
  }
}

export function defaultDatabase(): Database {
  return new Db(createClient({ url: dbUrl }));
}
