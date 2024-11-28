import type { APIRoute } from "astro";

const res = `
{
  "project": "RaspAPI YSWS",
  "description": "Submit an API, get a Raspberry Pi!",
  "status": "ACTIVE",
  "get_free_stuff": true
}
`.trim()

export const GET: APIRoute = () => {
    return new Response(res);
}