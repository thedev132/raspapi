import type { APIRoute } from "astro";

// Define your color codes for Bash (ANSI escape codes)
const red = "\x1b[0;31m";
const green = "\x1b[0;32m";
const blue = "\x1b[0;34m";
const yellow = "\x1b[0;33m";
const reset = "\x1b[0m";

// Define the JSON content with color codes embedded
const res = `${green}{${reset}
  ${red}"project"${reset}: ${green}"RaspAPI YSWS",${reset}
  ${red}"description"${reset}: ${green}"Submit an API, get a mini server to host it on!",${reset}
  ${red}"status"${reset}: ${green}"ACTIVE",${reset}
  ${red}"get_free_stuff"${reset}: ${green}true,${reset}
  ${red}"hint"${reset}: ${green}"Visit /requirements to learn about submission requirements—and find the next clue!"${reset}
${green}}\n${red}`;

export const GET: APIRoute = () => {
    return new Response(res, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
