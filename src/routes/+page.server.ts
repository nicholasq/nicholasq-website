import { defaultDatabase } from "$lib/server/db";
import {
  FOOTER_CONTENT,
  MAIN_PAGE_EXPERIENCE,
  MAIN_PAGE_JOB_TITLE,
  MAIN_PAGE_PROJECT1_CONTENT,
  MAIN_PAGE_PROJECT1_TITLE,
  MAIN_PAGE_PROJECT1_URL,
  MAIN_PAGE_PROJECT2_CONTENT,
  MAIN_PAGE_PROJECT2_TITLE,
  MAIN_PAGE_PROJECT2_URL,
  MAIN_PAGE_TITLE,
  MAIN_PAGE_WELCOME_MESSAGE,
  NAVBAR_GITHUB_URL,
} from "$env/static/private";

export const load = async () => {
  const db = defaultDatabase();
  const mostRecentPosts = await db.findMostRecent(3);
  return {
    title: MAIN_PAGE_TITLE,
    welcomeMessage: MAIN_PAGE_WELCOME_MESSAGE,
    experience: MAIN_PAGE_EXPERIENCE,
    jobTitle: MAIN_PAGE_JOB_TITLE,
    githubLink: NAVBAR_GITHUB_URL,
    mostRecentPosts,
    projects: [
      {
        title: MAIN_PAGE_PROJECT1_TITLE,
        content: MAIN_PAGE_PROJECT1_CONTENT,
        url: MAIN_PAGE_PROJECT1_URL,
      },
      {
        title: MAIN_PAGE_PROJECT2_TITLE,
        content: MAIN_PAGE_PROJECT2_CONTENT,
        url: MAIN_PAGE_PROJECT2_URL,
      },
    ],
    footer: FOOTER_CONTENT,
  };
};
