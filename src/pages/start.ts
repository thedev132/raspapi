import type { APIRoute } from "astro";

// Define your color codes for Bash (ANSI escape codes)
const red = "\x1b[0;31m";
const green = "\x1b[0;32m";
const blue = "\x1b[0;34m";
const yellow = "\x1b[0;33m";
const reset = "\x1b[0m";

// Define the response content with color codes for each section
const coloredRes = `
${red}Welcome to RaspAPI!${reset}

${green}Here's the start of your journey:
- Learn about the project at \`/mission\`${reset}.

${yellow}**Hint**: This isn't just about APIs. There are secrets to uncover along the way.${reset}\n
`;

export const GET: APIRoute = () => {
  return new Response(coloredRes, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
