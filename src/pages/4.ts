import type { APIRoute } from "astro";

// Define your color codes for Bash (ANSI escape codes)
const red = "\x1b[0;31m";
const green = "\x1b[0;32m";
const yellow = "\x1b[0;33m";
const blue = "\x1b[0;34m";
const magenta = "\x1b[0;35m";
const cyan = "\x1b[0;36m";
const bold = "\x1b[1m";
const reset = "\x1b[0m";

// Define the response content with color codes and special formatting
const res = `
${cyan}${bold}🎉 Congratulations! 🎉${reset}

${green}You've reached the end of the RaspAPI challenge.${reset}

${yellow}Here’s your secret code: ${blue}${bold}${import.meta.env.SECRET_CODE}${reset}

${magenta}Great job following the clues and learning about RaspAPI along the way!${reset}

${cyan}Enter this code on the submission form to complete the challenge!${reset}
\n`;

export const GET: APIRoute = () => {
    return new Response(res, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
};
