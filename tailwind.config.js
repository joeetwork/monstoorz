/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    daisyui: {
        themes: "emerald",
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        require("prettier-plugin-tailwindcss"),
    ],
};
