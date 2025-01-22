import { FOOTER_CONTENT, NAVBAR_GITHUB_URL } from "$env/static/private";

export const prerender = true;

export const load = () => {
  return {
    githubLink: NAVBAR_GITHUB_URL,
    footer: FOOTER_CONTENT,
  };
};
