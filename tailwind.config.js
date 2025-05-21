/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // If you have a 'src' directory, you might need this:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      gridTemplateColumns: {
        // This line is ABSOLUTELY CRUCIAL for your layout to match the design
        "my-jobs-table": "2.5fr 1fr 1.5fr 1.5fr",
        "applications-table": "2fr 1.5fr 1fr 1fr 1.5fr 1fr", // Adjust column widths as needed
      },
      // You can add other Tailwind theme customizations here (colors, spacing, etc.)
    },
  },
  plugins: [],
};
