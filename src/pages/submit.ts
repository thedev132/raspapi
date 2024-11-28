import type { APIRoute } from "astro";

export const prerender = false;

const res = `
{
  "submission_link": "https://forms.fillout.com/t/nzGCgZ4XUYus",
  "deadline": "January 31, 2025"
}
`.trim()

export const POST: APIRoute = () => {
    return new Response(res);
}