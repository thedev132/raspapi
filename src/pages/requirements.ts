import type { APIRoute } from "astro";

// Define your color codes for Bash (ANSI escape codes)
const red = "\x1b[0;31m";
const green = "\x1b[0;32m";
const blue = "\x1b[0;34m";
const yellow = "\x1b[0;33m";
const reset = "\x1b[0m";

// Define the JSON content with color codes embedded
const res = `${green}{${reset}
  ${blue}"minimum_endpoints"${reset}: {${reset}
    ${green}"post_endpoints"${reset}: ${yellow}1${reset},${reset}
    ${green}"get_requests"${reset}: ${yellow}3${reset}${reset}
  ${green}}${reset},${reset}
  ${blue}"languages_and_frameworks"${reset}: ${yellow}"All"${reset},${reset}
  ${blue}"documentation"${reset}: ${yellow}"Required"${reset},${reset}
  ${blue}"hint"${reset}: ${yellow}"Check out /prizes to learn more about our prize pool—and uncover another clue!"${reset}
${green}}\n`;

export const GET: APIRoute = () => {
    return new Response(res, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
