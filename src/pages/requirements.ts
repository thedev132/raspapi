import type { APIRoute } from "astro";

const res = `
{
  "minimum_endpoints": {
    "post_requests": 1,
    "get_requests": 3
  },
  "languages_and_frameworks": "*",
  "documentation": "Required",
  "example": "https://raspapi-example.adamthegreat.hackclub.app/"
}
`.trim()

export const GET: APIRoute = () => {
    return new Response(res);
}