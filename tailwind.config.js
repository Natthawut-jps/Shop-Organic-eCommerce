/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        limegreen: {
          "100": "rgba(32, 181, 38, 0.2)",
          "200": "rgba(32, 181, 38, 0.1)",
        },
        "gren-gray-scale-50": "#edf2ee",
        "gray-scale-gray-900": "#1a1a1a",
        "gray-scale-white": "#fff",
        "gray-scale-gray-800": "#333",
        "gray-scale-gray-400": "#999",
        dimgray: "#555",
        tomato: "rgba(234, 75, 72, 0.1)",
        darkorange: "#ff8a00",
        gray: {
          "100": "#1a1a1a",
          "200": "rgba(255, 255, 255, 0.85)",
          "300": "rgba(255, 255, 255, 0.6)",
          "400": "rgba(255, 255, 255, 0.8)",
        },
        "gray-scale-gray-700": "#4d4d4d",
        "branding-success-dark": "#2c742f",
        "gray-scale-gray-200": "#ccc",
        "gray-scale-gray-100": "#e6e6e6",
        "branding-success": "#00b207",
        "gray-scale-gray-500": "#808080",
        "gren-gray-scale-900": "#002603",
        "gray-scale-gray-600": "#666",
        gold: "#fcc900",
        "branding-warning": "#ff8a00",
        "branding-success-bright": "#84d187",
        "branding-error": "#ea4b48",
        whitesmoke: "#f7f7f7",
        "gray-scale-gray-50": "#f2f2f2",
        "gray-scale-gray-300": "#b3b3b3",
      },
      spacing: {},
      fontFamily: {
        "body-tiny-body-tiny-400": "Poppins",
        "body-medium-body-medium-600": "Poppins",
        "dancing-script": "'Dancing Script'",
        "body-small-body-small-400": "Poppins",
        "heading-05-heading-05-600": "Poppins",
      },
      borderRadius: {
        "11xl": "30px",
        "13xl": "32px",
        "111xl": "130px",
        "24xl": "43px",
        "8xs": "5px",
        "3xs": "10px",
        "34xl": "53px",
        "7xs-3": "5.3px",
        "481xl": "500px",
        "27xl": "46px",
        "81xl": "100px",
        "151xl": "170px",   
        "10xs": "3px",
      },
    },
    fontSize: {
      sm: "14px",
      "2xs": "11px",
      "3xs": "10px",
      mini: "15px",
      "13xl": "32px",
      xs: "12px",
      "21xl": "40px",
      "2xs": "11px",
      lg: "18px",
      xl: "20px",
      "5xl": "24px",
      base: "16px",
      "29xl": "48px",
      "37xl": "56px",
      "13xl": "32px",
      "5xl": "24px",
      "3xs": "10px",
      smi: "13px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
