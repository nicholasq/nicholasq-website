const title = Deno.env.get("MAIN_PAGE_TITLE");
const welcomeMessage = Deno.env.get("MAIN_PAGE_WELCOME_MESSAGE");
const experience = Deno.env.get("MAIN_PAGE_EXPERIENCE");
const jobTitle = Deno.env.get("MAIN_PAGE_JOB_TITLE");

export const load = () => ({ title, welcomeMessage, experience, jobTitle });
