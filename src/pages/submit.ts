import type { APIRoute } from "astro";
import { z } from "astro:schema";

export const prerender = false;

// Define your color codes for Bash (ANSI escape codes)
const red = "\x1b[0;31m";
const green = "\x1b[0;32m";
const blue = "\x1b[0;34m";
const yellow = "\x1b[0;33m";
const cyan = "\x1b[0;36m";
const reset = "\x1b[0m";

// Define the JSON content with color codes embedded
const res = `${cyan}{${reset}
  ${red}"submission_link"${reset}: ${cyan}"https://forms.hackclub.com/submitraspapi"${reset},${reset}
  ${red}"submit_via_api"${reset}: ${cyan}
  ${green}Example (submit to /submit):${reset}
  ${cyan}{
    "full_name": "John Doe",
    "email": "john_doe@hackclub.com",
    "date_of_birth": "10/26/1990",
    "address": "123 Main St, New York, NY 10001",
    "slack_id": "U123456",
    "project_name": "Project X",
    "github_repo": "https://github.com/hackclub/project-x",
    "api_link": "https://hackclub.com/api/project-x",
    "stars": 5,
    "how_did_you_hear_about_us": "Google",
    "api_description": "A project that does X",
    "screenshot_url": "https://hackclub.com/project-x/screenshot.png",
    "secret_code": "It's secret for a reason..."
  }${reset},${reset}
  ${red}"deadline"${reset}: ${green}"March 31, 2025"${reset},${reset}
  ${red}"hint"${reset}: ${green}"navigate to ${red}/[TOTAL_NUMBER_OF_ENDPOINTS_REQUIRED]${reset}${green} to finally uncover the secret!"${reset}
${cyan}}\n`;

export const GET: APIRoute = () => {
    return new Response(res, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const submitSchema = z.object({
    full_name: z.string().min(2),
    email: z.string().email(),
    date_of_birth: z.string(),
    address: z.string().min(1).max(500),
    slack_id: z.string().regex(/^(U|W)[A-Z0-9]+$/),
    project_name: z.string().min(1).max(100),
    github_repo: z.string().url().startsWith('https://github.com/'),
    secret_code: z.string().optional(),
    api_link: z.string().url(),
    stars: z.number().int().min(1).max(5),
    api_description: z.string().min(1).max(500),
    screenshot_url: z.string().url(),
    how_did_you_hear_about_us: z.string().min(1).max(500)
});

export const POST: APIRoute = async ({ request }) => {
    let body: unknown;
    try {
        body = await request.json();
    } catch (e) {
        return new Response("Invalid JSON", {
            status: 400,
            headers: {
                "Content-Type": "text/plain",
            },
        });
    }

    const result = submitSchema.safeParse(body);

    if (!result.success) {
        return new Response(JSON.stringify(result.error), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const { data } = result;

    const res = await fetch("https://api.fillout.com/v1/api/forms/toAGHEbg4kus/submissions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.FILLOUT_KEY}`,
        },
        body: JSON.stringify({
            "submissions": [
                {
                    "questions": [
                        {
                            "id": "t33d",
                            "value": data.full_name
                        },
                        {
                            "id": "fhLq",
                            "value": data.email
                        },
                        {
                            "id": "fxgX",
                            "value": data.date_of_birth
                        },
                        {
                            "id": "ww1C",
                            "value": {
                                address: data.address,
                            }
                        },
                        {
                            "id": "jxLj",
                            "value": data.slack_id
                        },
                        {
                            "id": "e8tV",
                            "value": data.project_name
                        },
                        {
                            "id": "6bpR",
                            "value": data.api_link
                        },
                        {
                            "id": "6s9F",
                            "value": data.github_repo
                        },
                        {
                            "id": "dciQ",
                            "value": data.api_description
                        },
                        {
                            "id": "uez8",
                            "value": data.screenshot_url
                        },
                        {
                            "id": "jVjr",
                            "value": data.how_did_you_hear_about_us
                        },
                        {
                            "id": "6b4d",
                            "value": data.secret_code
                        }
                    ],
                    "submissionTime": new Date().toISOString(),
                    "submissionId": ""
                }
            ]
        })
    });

    console.log(await res.text())

    return new Response(JSON.stringify({ success: res.ok }), {
        status: res.ok ? 200 : 500,
        headers: {
            "Content-Type": "application/json",
        },
    });
};
