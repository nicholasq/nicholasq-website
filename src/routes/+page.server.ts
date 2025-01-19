import { defaultDatabase } from "$lib/server/db";
import {
  MAIN_PAGE_EXPERIENCE,
  MAIN_PAGE_JOB_TITLE,
  MAIN_PAGE_TITLE,
  MAIN_PAGE_WELCOME_MESSAGE
} from "$env/static/private";

const title = MAIN_PAGE_TITLE;
const welcomeMessage = MAIN_PAGE_WELCOME_MESSAGE;
const experience = MAIN_PAGE_EXPERIENCE;
const jobTitle = MAIN_PAGE_JOB_TITLE;

export const load = async () => {
  const db = defaultDatabase();
  const mostRecentPosts = await db.findMostRecent(3);
  return { title, welcomeMessage, experience, jobTitle, mostRecentPosts };
};
