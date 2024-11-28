import type { APIRoute } from "astro";

const res = `
{
    top_3: "Raspberry Pi Sensor HAT",
    about: "The Sensor HAT is a great addition to your Raspberry Pi, allowing you to measure temperature, humidity, and more!",
}
`.trim()

export const GET: APIRoute = () => {
    return new Response(res);
}
